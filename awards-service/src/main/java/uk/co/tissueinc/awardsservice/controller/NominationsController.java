package uk.co.tissueinc.awardsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormRepresentation;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormsRepresentation;
import uk.co.tissueinc.awardsservice.service.NominationsService;

import java.util.stream.Collectors;

@Controller
@RequestMapping(path = "/api/nominations")
public class NominationsController {

    private final NominationsService nominationsService;

    @Autowired
    public NominationsController(NominationsService nominationsService) {
        this.nominationsService = nominationsService;
    }

    @PostMapping(produces = "application/json")
    @ResponseBody
    @ResponseStatus(HttpStatus.CREATED)
    //TODO make into an upsert and use hashed IP address as primary key.
    public NominationsFormRepresentation saveNominations(@RequestBody NominationsFormRepresentation nominations) {
        return new NominationsFormRepresentation(nominationsService.saveNominations(nominations.toDomain()));
    }

    @GetMapping(produces = "application/json")
    @ResponseBody
    public NominationsFormsRepresentation getAllNominations() {
        return new NominationsFormsRepresentation(nominationsService.getNominations()
                .stream()
                .map(NominationsFormRepresentation::new)
                .collect(Collectors.toList()));
    }
}