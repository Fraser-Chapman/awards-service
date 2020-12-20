package uk.co.tissueinc.awardsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.tissueinc.awardsservice.repository.NominationsRepository;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;

@Service
public class NominationsService {

    private final NominationsRepository nominationsRepository;

    @Autowired
    public NominationsService(NominationsRepository nominationsRepository) {
        this.nominationsRepository = nominationsRepository;
    }

    public NominationsForm upsertNominations(Map<String, String> nominations) {
        return nominationsRepository.upsertForm(nominations);
    }

    public List<NominationsForm> getNominations() {
        return nominationsRepository.getAllNominations();
    }
}
