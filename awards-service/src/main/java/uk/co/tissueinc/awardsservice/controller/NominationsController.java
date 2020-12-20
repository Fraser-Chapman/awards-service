package uk.co.tissueinc.awardsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormRepresentation;
import uk.co.tissueinc.awardsservice.controller.model.NominationsFormsRepresentation;
import uk.co.tissueinc.awardsservice.service.NominationsService;

import java.util.Map;
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
    public NominationsFormRepresentation upsertNominations(@RequestBody Map<String, String> nominations) {
        return new NominationsFormRepresentation(nominationsService.upsertNominations(nominations));
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
