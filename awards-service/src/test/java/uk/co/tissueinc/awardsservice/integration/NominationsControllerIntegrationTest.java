package uk.co.tissueinc.awardsservice.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Disabled;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.web.context.WebApplicationContext;
import uk.co.tissueinc.awardsservice.integration.util.FileResources;

import java.io.UnsupportedEncodingException;

import static org.assertj.core.api.Assertions.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import static uk.co.tissueinc.awardsservice.integration.util.FileResources.fromFile;

@SpringBootTest
@ActiveProfiles("test")
@DirtiesContext
public class NominationsControllerIntegrationTest {

    private static final int CREATED = 201;
    private static final int OK = 200;
    private static final String USER_ID_1 = "1234";
    private static final String USER_ID_2 = "4321";

    private MockMvc mockMvc;

    private MvcResult result;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @BeforeEach
    public void beforeEach() {
        mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void shouldUpsertNomination() throws Exception {
        //given
        String requestBody = fromFile("integration/nominations/save/NominationsRequestBody.json");

        //when
        result = mockMvc.perform(post(String.format("/api/nominations/%s", USER_ID_1))
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andReturn();

        thenResponseCodeIs(CREATED);
    }

    @Test
    public void shouldGetAllNominations() throws Exception {
        //given
        upsertNomination(fromFile("integration/nominations/save/NominationsRequestBody.json"), USER_ID_1);
        upsertNomination(fromFile("integration/nominations/save/AnotherNominationsRequestBody.json"), USER_ID_2);

        //when
        result = mockMvc.perform(get("/api/nominations"))
                .andReturn();

        thenResponseCodeIs(OK);
        thenResponseIsIdenticalTo(fromFile("integration/nominations/get/GetAllResponse.json"));
    }

    private void upsertNomination(String nominationForm, String userId) throws Exception {
        mockMvc.perform(post(String.format("/api/nominations/%s", userId))
                .contentType(MediaType.APPLICATION_JSON)
                .header("X-Forwarded-For", userId)
                .content(nominationForm));
    }

    private void thenResponseCodeIs(int statusCode) {
        assertThat(result.getResponse().getStatus()).isEqualTo(statusCode);
    }

    private void thenResponseIsIdenticalTo(String responseBody) throws UnsupportedEncodingException {
        assertThat(result.getResponse().getContentAsString()).isEqualToIgnoringWhitespace(responseBody);
    }
}
