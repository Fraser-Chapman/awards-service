package uk.co.tissueinc.awardsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.tissueinc.awardsservice.service.model.CategoryAward;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.*;
import java.util.AbstractMap.SimpleEntry;
import java.util.Map.Entry;
import java.util.stream.Collectors;

@Service
public class AwardsService {

    private final NominationsService nominationsService;

    @Autowired
    public AwardsService(NominationsService nominationsService) {
        this.nominationsService = nominationsService;
    }

    public List<CategoryAward> getAwards() {
        List<NominationsForm> nominations = nominationsService.getNominations();
        Set<String> categories = nominations.get(0).getNominations().keySet();
        Map<String, Map<String, Integer>> nominationsMatrix = new HashMap<>();

        categories.forEach(category -> {
            Map<String, Integer> personNominationCount = new HashMap<>();
            nominations.forEach((form) -> {
                String nominee = form.getNominations().get(category);

                if (Objects.nonNull(personNominationCount.get(nominee))) {
                    personNominationCount.put(nominee, personNominationCount.get(nominee) + 1);
                }
                else {
                    personNominationCount.put(nominee, 1);
                }
            });

            nominationsMatrix.put(category, personNominationCount);
        });

        return nominationsMatrix.entrySet()
                .stream()
                .map((entry) -> {
                    Entry<String, Integer> currentWinner = new SimpleEntry<>("placeHolder", 0);
                    Set<String> categoryNominees = entry.getValue().keySet();

                    for (Entry<String, Integer> nominee : entry.getValue().entrySet()) {
                        if (currentWinner.getValue() < nominee.getValue()) {
                            currentWinner = nominee;
                        }
                        else if (currentWinner.getValue().equals(nominee.getValue())) {
                            final String jointWinnerName = String.format("%s, %s", currentWinner.getKey(), nominee.getKey());
                            currentWinner = new SimpleEntry<>(jointWinnerName, currentWinner.getValue());
                        }
                    }

                    return new CategoryAward(entry.getKey(), currentWinner.getKey(), new ArrayList<>(categoryNominees));
                })
                .collect(Collectors.toList());
    }

}
