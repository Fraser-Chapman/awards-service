package uk.co.tissueinc.awardsservice.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.repository.NominationsRepository;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NominationsServiceTest {

    private static final String USER_ID_1 = "userId1";
    private static final String USER_ID_2 = "userId2";
    private static final String CATEGORY_1 = "Category_1";
    private static final String ANSWER_1 = "answer_1";
    private static final String CATEGORY_2 = "Category_2";
    private static final String ANSWER_2 = "answer_2";
    private static final Map<String, String> NOMINATIONS = Map.of(CATEGORY_1, ANSWER_1, CATEGORY_2, ANSWER_2);

    private NominationsService nominationsService;

    @Mock
    private NominationsRepository nominationsRepository;

    @BeforeEach
    public void beforeEach() {
        nominationsService = new NominationsService(nominationsRepository);
    }

    @Test
    public void upsertNominationsShouldReturnSavedNominationsFromRepository() {
        NominationsForm nominationsForm = new NominationsForm(USER_ID_1, NOMINATIONS);
        when(nominationsRepository.upsertForm(NOMINATIONS)).thenReturn(nominationsForm);

        NominationsForm result = nominationsService.upsertNominations(NOMINATIONS);

        assertThat(result).isEqualTo(nominationsForm);
    }

    @Test
    public void getNominationsShouldReturnNominationsFromRepository() {
        NominationsForm nominationsForm1 = new NominationsForm(USER_ID_1, NOMINATIONS);
        NominationsForm nominationsForm2 = new NominationsForm(USER_ID_2, NOMINATIONS);
        when(nominationsRepository.getAllNominations()).thenReturn(List.of(nominationsForm1, nominationsForm2));

        List<NominationsForm> result = nominationsService.getNominations();

        assertThat(result).usingRecursiveFieldByFieldElementComparator().containsExactlyInAnyOrder(nominationsForm1, nominationsForm2);
    }
}
