package uk.co.tissueinc.awardsservice.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import uk.co.tissueinc.awardsservice.repository.model.NominationsFormEntity;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.stream.Collectors;

@Repository
public class NominationsRepository {

    private final NominationsCRUDRepository nominationsCRUDRepository;

    @Autowired
    public NominationsRepository(NominationsCRUDRepository nominationsCRUDRepository) {
        this.nominationsCRUDRepository = nominationsCRUDRepository;
    }

    public NominationsForm saveForm(NominationsForm nominations) {
        NominationsFormEntity entity = new NominationsFormEntity(nominations);
        return this.nominationsCRUDRepository.save(entity).toDomain();
    }

    public List<NominationsForm> getAllNominations() {
        return this.nominationsCRUDRepository.findAll()
                .stream()
                .map(NominationsFormEntity::toDomain)
                .collect(Collectors.toList());
    }
}
