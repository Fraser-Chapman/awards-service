package uk.co.tissueinc.awardsservice.repository;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

class CategoriesRepositoryTest {

    private CategoriesRepository testSubject;

    @BeforeEach
    public void beforeEach() {
        testSubject = new CategoriesRepository();
    }

    @Test
    public void getCategoriesShouldReturnCategoriesConstant() {
        final List<String> result = testSubject.getCategories();

        assertThat(result).usingFieldByFieldElementComparator().containsExactlyInAnyOrder("Future president", "Best beard", "Worst beard");
    }
}
