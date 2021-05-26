package uk.co.tissueinc.awardsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.tissueinc.awardsservice.service.model.CategoryAward;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.AbstractMap.SimpleEntry;
import java.util.*;
import java.util.Map.Entry;

import static java.util.Objects.nonNull;
import static java.util.stream.Collectors.toList;
import static java.util.stream.Collectors.toMap;

@Service
public class AwardsService {

    private final NominationsService nominationsService;

    @Autowired
    public AwardsService(NominationsService nominationsService) {
        this.nominationsService = nominationsService;
    }

    public List<CategoryAward> getAwards() {
        final List<NominationsForm> nominations = nominationsService.getNominations();
        final Set<String> categories = getCategories(nominations);
        final Map<String, Map<String, Integer>> nominationsMatrix = categories
                .stream()
                .collect(toMap(
                        category -> category,
                        category -> tallyNominations(nominations, category)
                ));

        return nominationsMatrix.entrySet()
                .stream()
                .map((categoryToNomineeCounts) -> {
                    final Set<String> categoryNominees = categoryToNomineeCounts.getValue().keySet();
                    final String categoryWinner = findWinner(categoryToNomineeCounts);
                    return new CategoryAward(categoryToNomineeCounts.getKey(), categoryWinner, new ArrayList<>(categoryNominees));
                })
                .collect(toList());
    }

    private String findWinner(Entry<String, Map<String, Integer>> categoryToNomineeCounts) {
        Entry<String, Integer> currentWinner = new SimpleEntry<>("placeHolder", 0);

        for (Entry<String, Integer> nominee : categoryToNomineeCounts.getValue().entrySet()) {
            final boolean currentWinnerHasLessVotes = currentWinner.getValue() < nominee.getValue();
            final boolean itIsADraw = currentWinner.getValue().equals(nominee.getValue());

            if (currentWinnerHasLessVotes) {
                currentWinner = nominee;
            }
            else if (itIsADraw) {
                    final String jointWinnerName = String.format("%s, %s", currentWinner.getKey(), nominee.getKey());
                    currentWinner = new SimpleEntry<>(jointWinnerName, currentWinner.getValue());
            }
        }
        return currentWinner.getKey();
    }

    private Map<String, Integer> tallyNominations(List<NominationsForm> nominations, String category) {
        final Map<String, Integer> personNominationCount = new HashMap<>();
        nominations.forEach((form) -> {
            String nominee = form.getNominations().get(category);
            updateNominationCount(personNominationCount, nominee);
        });
        return personNominationCount;
    }

    private void updateNominationCount(Map<String, Integer> personNominationCount, String nominee) {
        if (nonNull(personNominationCount.get(nominee))) {
            personNominationCount.put(nominee, personNominationCount.get(nominee) + 1);
        } else {
            personNominationCount.put(nominee, 1);
        }
    }

    private Set<String> getCategories(List<NominationsForm> nominations) {
        final Set<String> categories = new HashSet<>();
        nominations.stream().findAny().ifPresent(form -> categories.addAll(form.getNominations().keySet()));
        return categories;
    }

}
