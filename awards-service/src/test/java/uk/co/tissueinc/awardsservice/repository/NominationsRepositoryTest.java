package uk.co.tissueinc.awardsservice.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.repository.model.NominationsFormEntity;
import uk.co.tissueinc.awardsservice.service.RequestDetailsService;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.refEq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NominationsRepositoryTest {

    private static final String USER_ID_1 = "1234";
    private static final String CATEGORY_1 = "Category_1";
    private static final String ANSWER_1 = "answer_1";
    private static final String CATEGORY_2 = "Category_2";
    private static final String ANSWER_2 = "answer_2";
    private static final Map<String, String> NOMINATIONS = Map.of(CATEGORY_1, ANSWER_1, CATEGORY_2, ANSWER_2);
    private static final String USER_ID_2 = "4321";

    private NominationsRepository nominationsRepository;

    @Mock
    private NominationsCRUDRepository nominationsCRUDRepository;

    @Mock
    private RequestDetailsService requestDetailsService;

    @BeforeEach
    public void beforeEach() {
        nominationsRepository = new NominationsRepository(nominationsCRUDRepository, requestDetailsService);
    }

    @Test
    public void saveNominationsShouldReturnSavedNominations() {
        NominationsForm nominationsForm = new NominationsForm(USER_ID_1, NOMINATIONS);
        NominationsFormEntity expectedEntity = new NominationsFormEntity(USER_ID_1, NOMINATIONS);

        when(requestDetailsService.getxForwardedFor()).thenReturn(USER_ID_1);
        when(nominationsCRUDRepository.save(refEq(expectedEntity))).thenReturn(expectedEntity);

        NominationsForm result = nominationsRepository.saveForm(NOMINATIONS);

        assertThat(result).isEqualToComparingFieldByField(nominationsForm);
    }

    @Test
    public void getAllNominationsReturnsNominationsFromRepository() {
        NominationsFormEntity nominationsFormEntity1 = new NominationsFormEntity(USER_ID_1, NOMINATIONS);
        NominationsFormEntity nominationsFormEntity2 = new NominationsFormEntity(USER_ID_2, NOMINATIONS);
        NominationsForm nominationsForm1 = new NominationsForm(USER_ID_1, NOMINATIONS);
        NominationsForm nominationsForm2 = new NominationsForm(USER_ID_2, NOMINATIONS);

        when(nominationsCRUDRepository.findAll()).thenReturn(List.of(nominationsFormEntity1, nominationsFormEntity2));

        List<NominationsForm> result = nominationsRepository.getAllNominations();

        assertThat(result).usingRecursiveFieldByFieldElementComparator().containsExactlyInAnyOrder(nominationsForm1, nominationsForm2);
    }
}
