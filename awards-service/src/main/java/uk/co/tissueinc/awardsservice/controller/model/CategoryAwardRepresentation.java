package uk.co.tissueinc.awardsservice.controller.model;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.List;

public class CategoryAwardRepresentation {

    private final String categoryName;
    private final String winnerName;
    private final List<String> nominations;

    @JsonCreator
    public CategoryAwardRepresentation(@JsonProperty("categoryName") String categoryName, @JsonProperty("winnerName") String winnerName, @JsonProperty("nominations") List<String> nominations) {
        this.categoryName = categoryName;
        this.winnerName = winnerName;
        this.nominations = nominations;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public String getWinnerName() {
        return winnerName;
    }

    public List<String> getNominations() {
        return nominations;
    }
}
