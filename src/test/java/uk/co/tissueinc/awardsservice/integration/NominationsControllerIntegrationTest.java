package uk.co.tissueinc.awardsservice.integration;

import org.junit.jupiter.api.BeforeEach;
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

@SpringBootTest
@ActiveProfiles("test")
@DirtiesContext
public class NominationsControllerIntegrationTest {

    private static final int CREATED = 201;
    private static final int OK = 200;

    private MockMvc mockMvc;

    private MvcResult result;

    @Autowired
    private WebApplicationContext webApplicationContext;

    @BeforeEach
    public void beforeEach() {
        mockMvc = webAppContextSetup(webApplicationContext).build();
    }

    @Test
    public void shouldSaveNomination() throws Exception {
        //given
        String requestBody = FileResources.load("integration/nominations/save/NominationsRequestBody.json");

        //when
        result = mockMvc.perform(post("/api/nominations")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andReturn();

        thenResponseCodeIs(CREATED);
    }

    @Test
    public void shouldGetAllNominations() throws Exception {
        //given
        saveNomination(FileResources.load("integration/nominations/save/NominationsRequestBody.json"));
        saveNomination(FileResources.load("integration/nominations/save/AnotherNominationsRequestBody.json"));

        //when
        result = mockMvc.perform(get("/api/nominations"))
                .andReturn();

        thenResponseCodeIs(OK);
        thenResponseIsIdenticalTo(FileResources.load("integration/nominations/get/GetAllResponse.json"));
    }

    private void saveNomination(String nominationForm) throws Exception {
        mockMvc.perform(post("/api/nominations")
                .contentType(MediaType.APPLICATION_JSON)
                .content(nominationForm));
    }

    private void thenResponseCodeIs(int statusCode) {
        assertThat(result.getResponse().getStatus()).isEqualTo(statusCode);
    }

    private void thenResponseIsIdenticalTo(String responseBody) throws UnsupportedEncodingException {
        assertThat(result.getResponse().getContentAsString()).isEqualToIgnoringWhitespace(responseBody);
    }
}
