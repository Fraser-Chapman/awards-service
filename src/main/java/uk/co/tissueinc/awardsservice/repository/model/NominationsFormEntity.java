package uk.co.tissueinc.awardsservice.repository.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.Map;

@Document(collection = "nominations")
public class NominationsFormEntity {

    @Id
    private String userId;
    private Map<String, String> nominations;

    public NominationsFormEntity() {
    }

    public NominationsFormEntity(String userId, Map<String, String> nominations) {
        this.userId = userId;
        this.nominations = nominations;
    }

    public NominationsFormEntity(NominationsForm domain) {
         this(domain.getUserId(), domain.getNominations());
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public Map<String, String> getNominations() {
        return nominations;
    }

    public void setNominations(Map<String, String> nominations) {
        this.nominations = nominations;
    }

    public NominationsForm toDomain() {
        return new NominationsForm(userId, nominations);
    }
}
