package uk.co.tissueinc.awardsservice.controller.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class AwardsRepresentation {

    private final List<CategoryAwardRepresentation> awards;

    @JsonCreator
    public AwardsRepresentation(@JsonProperty("awards") List<CategoryAwardRepresentation> awards) {
        this.awards = awards;
    }

    public List<CategoryAwardRepresentation> getAwards() {
        return awards;
    }
}
