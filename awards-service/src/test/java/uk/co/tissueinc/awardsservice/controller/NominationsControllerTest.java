package uk.co.tissueinc.awardsservice.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormRepresentation;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormsRepresentation;
import uk.co.tissueinc.awardsservice.service.NominationsService;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.refEq;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class NominationsControllerTest {

    private static final String USER_ID_1 = "userId1";
    private static final String USER_ID_2 = "userId2";
    private static final String CATEGORY_1 = "Category_1";
    private static final String ANSWER_1 = "answer_1";
    private static final String CATEGORY_2 = "Category_2";
    private static final String ANSWER_2 = "answer_2";
    private static final Map<String, String> NOMINATIONS = Map.of(CATEGORY_1, ANSWER_1, CATEGORY_2, ANSWER_2);

    private NominationsController nominationsController;

    @Mock
    private NominationsService nominationsService;

    @BeforeEach
    public void beforeEach() {
        nominationsController = new NominationsController(nominationsService);
    }

    @Test
    public void saveNominationsShouldReturnNominationsFromService() {
        NominationsFormRepresentation expectedResult = new NominationsFormRepresentation(USER_ID_1, NOMINATIONS);
        NominationsForm nominationsForm = new NominationsForm(USER_ID_1, NOMINATIONS);
        when(nominationsService.saveNominations(refEq(NOMINATIONS))).thenReturn(nominationsForm);

        NominationsFormRepresentation result = nominationsController.saveNominations(NOMINATIONS);

        assertThat(result).usingRecursiveComparison().isEqualTo(expectedResult);
    }

    @Test
    public void getAllNominationsShouldReturnNominationsFromService() {
        NominationsFormRepresentation expectedForm1 = new NominationsFormRepresentation(USER_ID_1, NOMINATIONS);
        NominationsFormRepresentation expectedForm2 = new NominationsFormRepresentation(USER_ID_2, NOMINATIONS);
        NominationsForm nominationsForm1 = new NominationsForm(USER_ID_1, NOMINATIONS);
        NominationsForm nominationsForm2 = new NominationsForm(USER_ID_2, NOMINATIONS);
        when(nominationsService.getNominations()).thenReturn(List.of(nominationsForm1, nominationsForm2));

        NominationsFormsRepresentation result = nominationsController.getAllNominations();

        assertThat(result).usingRecursiveComparison().isEqualTo(new NominationsFormsRepresentation(List.of(expectedForm1, expectedForm2)));
    }
}
