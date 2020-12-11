package uk.co.tissueinc.awardsservice.service.model;

import java.util.Map;

public class NominationsForm {
    private String userId;
    private Map<String, String> nominations;

    public NominationsForm(String userId, Map<String, String> nominations) {
        this.userId = userId;
        this.nominations = nominations;
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

}
