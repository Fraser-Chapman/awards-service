package uk.co.tissueinc.awardsservice.controller.model;

import java.util.List;

public class NominationsFormsRepresentation {

    private final List<NominationsFormRepresentation> nominationForms;

    public NominationsFormsRepresentation(List<NominationsFormRepresentation> nominationForms) {
        this.nominationForms = nominationForms;
    }

    public List<NominationsFormRepresentation> getNominationForms() {
        return nominationForms;
    }
}
