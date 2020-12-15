package uk.co.tissueinc.awardsservice.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.controller.model.CategoriesRepresentation;
import uk.co.tissueinc.awardsservice.service.CategoriesService;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class CategoriesControllerTest {

    private CategoriesController testSubject;

    @Mock
    private CategoriesService categoriesService;

    @BeforeEach
    public void beforeEach() {
        testSubject = new CategoriesController(categoriesService);
    }

    @Test
    public void getCategoriesReturnsCategoriesFromService() {
        final List<String> categories = List.of("category1", "category2");
        final CategoriesRepresentation expectedResult = new CategoriesRepresentation(categories);
        when(categoriesService.getCategories()).thenReturn(categories);

        final CategoriesRepresentation result = testSubject.getCategories();

        assertThat(result).usingRecursiveComparison().isEqualTo(expectedResult);
    }
}
