package uk.co.tissueinc.awardsservice.controller.model;

import java.util.List;

public class CategoriesRepresentation {

    private final List<String> categories;

    public CategoriesRepresentation(List<String> categories) {
        this.categories = categories;
    }

    public List<String> getCategories() {
        return categories;
    }
}
