package uk.co.tissueinc.awardsservice.service;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import uk.co.tissueinc.awardsservice.service.model.CategoryAward;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class AwardsServiceTest {

    private AwardsService testSubject;

    @Mock
    private NominationsService nominationsService;

    @BeforeEach
    public void beforeEach() {
        testSubject = new AwardsService(nominationsService);
    }

    @Test
    public void getAwardsShouldCallNominationServiceForNominations() {
        final Map<String, String> nominations = Map.of("categoryOne", "person1");
        NominationsForm nominations1 = new NominationsForm("user1", nominations);
        NominationsForm nominations2 = new NominationsForm("user2", nominations);

        when(nominationsService.getNominations()).thenReturn(List.of(nominations1, nominations2));

        testSubject.getAwards();

        verify(nominationsService, times(1)).getNominations();
    }

    @Test
    public void getAwardsShouldCalculateWinners() {
        final Map<String, String> nominations = Map.of("categoryOne", "person1");
        NominationsForm nominations1 = new NominationsForm("user1", nominations);
        NominationsForm nominations2 = new NominationsForm("user2", nominations);
        NominationsForm nominations3 = new NominationsForm("user3", Map.of("categoryOne", "person2"));

        when(nominationsService.getNominations()).thenReturn(List.of(nominations1, nominations2, nominations3));

        List<CategoryAward> result = testSubject.getAwards();

        //TODO maybe sort the ordering!!!!!!
        final List<CategoryAward> expectedResult = List.of(new CategoryAward("categoryOne", "person1", List.of("person2", "person1")));
        assertThat(result).usingRecursiveComparison().isEqualTo(expectedResult);
    }
}
