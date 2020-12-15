package uk.co.tissueinc.awardsservice.integration;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.annotation.DirtiesContext;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.web.context.WebApplicationContext;

import java.io.UnsupportedEncodingException;

import static org.assertj.core.api.AssertionsForClassTypes.assertThat;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import static uk.co.tissueinc.awardsservice.integration.util.FileResources.fromFile;

@SpringBootTest
@ActiveProfiles("test")
@DirtiesContext
public class CategoriesControllerIntegrationTest {

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
    public void getCategoriesReturnsCategoriesRepresentation() throws Exception {
        result = mockMvc.perform(get("/api/categories"))
                .andReturn();

        thenResponseIsSuccess();
        thenResponseBodyIsEqualTo(fromFile("integration/categories/get/SuccessResponse.json"));
    }

    private void thenResponseIsSuccess() {
        assertThat(result.getResponse().getStatus()).isEqualTo(OK);
    }

    private void thenResponseBodyIsEqualTo(String responseBody) throws UnsupportedEncodingException {
        assertThat(result.getResponse().getContentAsString()).isEqualToIgnoringWhitespace(responseBody);
    }
}
