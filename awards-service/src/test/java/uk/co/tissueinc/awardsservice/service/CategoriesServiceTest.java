package uk.co.tissueinc.awardsservice.service;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.repository.CategoriesRepository;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class CategoriesServiceTest {

    private CategoriesService testSubject;

    @Mock
    private CategoriesRepository categoriesRepository;

    @BeforeEach
    public void beforeEach() {
        testSubject = new CategoriesService(categoriesRepository);
    }

    @Test
    public void saveCategoriesShouldCallRepository() {
        final List<String> categories = List.of("category1", "category2");
        when(categoriesRepository.getCategories()).thenReturn(categories);

        final List<String> result = testSubject.getCategories();

        assertThat(result).isEqualTo(categories);
    }
}
