package uk.co.tissueinc.awardsservice.controller.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.Map;

public class NominationsFormRepresentation {

    private final String userId;
    private final Map<String, String> nominations;

    @JsonCreator
    public NominationsFormRepresentation(@JsonProperty("userId") String userId, @JsonProperty("nominations") Map<String, String> nominations) {
        this.userId = userId;
        this.nominations = nominations;
    }

    public NominationsFormRepresentation(NominationsForm domain) {
        this(domain.getUserId(), domain.getNominations());
    }

    public String getUserId() {
        return userId;
    }

    public Map<String, String> getNominations() {
        return nominations;
    }

    public NominationsForm toDomain() {
        return new NominationsForm(userId, nominations);
    }
}
