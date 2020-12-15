package uk.co.tissueinc.awardsservice.repository;

import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class CategoriesRepository {

    private static final List<String> CATEGORIES = List.of(
      "Future president",
      "Best beard",
      "Worst beard"
    );

    public List<String> getCategories() {
        return CATEGORIES;
    }
}
