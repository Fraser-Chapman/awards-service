package uk.co.tissueinc.awardsservice.service.model;

import java.util.List;

public class CategoryAward {

    private String categoryName;
    private String winnerName;
    private List<String> nominations;

    public CategoryAward(String categoryName, String winnerName, List<String> nominations) {
        this.categoryName = categoryName;
        this.winnerName = winnerName;
        this.nominations = nominations;
    }

    public String getCategoryName() {
        return categoryName;
    }

    public void setCategoryName(String categoryName) {
        this.categoryName = categoryName;
    }

    public String getWinnerName() {
        return winnerName;
    }

    public void setWinnerName(String winnerName) {
        this.winnerName = winnerName;
    }

    public List<String> getNominations() {
        return nominations;
    }

    public void setNominations(List<String> nominations) {
        this.nominations = nominations;
    }
}
