package uk.co.tissueinc.awardsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.tissueinc.awardsservice.repository.CategoriesRepository;

import java.util.List;

@Service
public class CategoriesService {

    private final CategoriesRepository categoriesRepository;

    @Autowired
    public CategoriesService(CategoriesRepository categoriesRepository) {
        this.categoriesRepository = categoriesRepository;
    }

    public List<String> getCategories() {
        return categoriesRepository.getCategories();
    }
}
