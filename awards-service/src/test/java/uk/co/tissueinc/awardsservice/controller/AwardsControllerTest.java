package uk.co.tissueinc.awardsservice.controller;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.controller.model.AwardsRepresentation;
import uk.co.tissueinc.awardsservice.controller.model.CategoryAwardRepresentation;
import uk.co.tissueinc.awardsservice.service.AwardsService;
import uk.co.tissueinc.awardsservice.service.model.CategoryAward;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class AwardsControllerTest {

    private AwardsController testSubject;

    @Mock
    private AwardsService awardsService;

    @BeforeEach
    public void beforeEach() {
        testSubject = new AwardsController(awardsService);
    }

    @Test
    public void getAwardsShouldReturnAwardsFromServiceLayer() {
        CategoryAwardRepresentation categoryOneAwards = new CategoryAwardRepresentation("categoryOne", "person1", List.of("person1", "person2", "person3"));
        CategoryAwardRepresentation categoryTwoAwards = new CategoryAwardRepresentation("categoryTwo", "person1", List.of("person1", "person2", "person3"));
        List<CategoryAwardRepresentation> expectedAwards = List.of(categoryOneAwards, categoryTwoAwards);
        AwardsRepresentation expectedResult = new AwardsRepresentation(expectedAwards);

        List<CategoryAward> awards = List.of(
                new CategoryAward("categoryOne", "person1", List.of("person1", "person2", "person3")),
                new CategoryAward("categoryTwo", "person1", List.of("person1", "person2", "person3"))
        );

        when(awardsService.getAwards()).thenReturn(awards);

        AwardsRepresentation result = testSubject.getAwards();

        assertThat(result).usingRecursiveComparison().isEqualTo(expectedResult);
    }
}
