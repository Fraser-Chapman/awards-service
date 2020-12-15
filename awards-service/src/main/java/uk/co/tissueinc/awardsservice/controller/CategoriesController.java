package uk.co.tissueinc.awardsservice.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import uk.co.tissueinc.awardsservice.controller.model.CategoriesRepresentation;
import uk.co.tissueinc.awardsservice.service.CategoriesService;

@RestController
@RequestMapping("/api/categories")
public class CategoriesController {

    private final CategoriesService categoriesService;

    @Autowired
    public CategoriesController(CategoriesService categoriesService) {
        this.categoriesService = categoriesService;
    }

    @GetMapping(produces = "application/json")
    public CategoriesRepresentation getCategories() {
        return new CategoriesRepresentation(this.categoriesService.getCategories());
    }
}
