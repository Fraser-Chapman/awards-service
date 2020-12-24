package uk.co.tissueinc.awardsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import uk.co.tissueinc.awardsservice.controller.model.AwardsRepresentation;
import uk.co.tissueinc.awardsservice.controller.model.CategoryAwardRepresentation;
import uk.co.tissueinc.awardsservice.service.AwardsService;

import java.util.stream.Collectors;

@Controller
@RequestMapping(path = "/api/awards")
public class AwardsController {

    private final AwardsService awardsService;

    @Autowired
    public AwardsController(AwardsService awardsService) {
        this.awardsService = awardsService;
    }

    @ResponseBody
    @GetMapping(produces = "application/json")
    public AwardsRepresentation getAwards() {
        return new AwardsRepresentation(awardsService.getAwards()
                .stream()
                .map(categoryAward -> new CategoryAwardRepresentation(
                        categoryAward.getCategoryName(),
                        categoryAward.getWinnerName(),
                        categoryAward.getNominations()))
                .collect(Collectors.toList()));
    }
}
