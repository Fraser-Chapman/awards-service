package uk.co.tissueinc.awardsservice.controller.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class NominationsFormsRepresentation {

    private final List<NominationsFormRepresentation> nominationForms;

    @JsonCreator
    public NominationsFormsRepresentation(@JsonProperty("nominationForms") List<NominationsFormRepresentation> nominationForms) {
        this.nominationForms = nominationForms;
    }

    public List<NominationsFormRepresentation> getNominationForms() {
        return nominationForms;
    }
}
