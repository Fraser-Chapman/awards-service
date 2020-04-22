package uk.co.tissueinc.awardsservice.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import uk.co.tissueinc.awardsservice.repository.NominationsRepository;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;

@Service
public class NominationsService {

    private final NominationsRepository nominationsRepository;

    @Autowired
    public NominationsService(NominationsRepository nominationsRepository) {
        this.nominationsRepository = nominationsRepository;
    }

    public NominationsForm saveNominations(NominationsForm nominations) {
        return nominationsRepository.saveForm(nominations);
    }

    public List<NominationsForm> getNominations() {
        return nominationsRepository.getAllNominations();
    }
}
