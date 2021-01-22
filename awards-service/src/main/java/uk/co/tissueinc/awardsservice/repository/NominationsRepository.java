package uk.co.tissueinc.awardsservice.repository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import uk.co.tissueinc.awardsservice.repository.model.NominationsFormEntity;
import uk.co.tissueinc.awardsservice.service.RequestDetailsService;
import uk.co.tissueinc.awardsservice.service.model.NominationsForm;

import java.util.List;
import java.util.Map;
import java.util.Random;
import java.util.stream.Collectors;

@Repository
public class NominationsRepository {

    private final NominationsCRUDRepository nominationsCRUDRepository;
    private final RequestDetailsService requestDetailsService;

    @Autowired
    public NominationsRepository(NominationsCRUDRepository nominationsCRUDRepository, RequestDetailsService requestDetailsService) {
        this.nominationsCRUDRepository = nominationsCRUDRepository;
        this.requestDetailsService = requestDetailsService;
    }

    public NominationsForm upsertForm(Map<String, String> nominations) {
//        final String clientIp = requestDetailsService.getxForwardedFor();
        final NominationsFormEntity entity = new NominationsFormEntity(String.valueOf(new Random().nextInt()), nominations);
        return this.nominationsCRUDRepository.save(entity).toDomain();
    }

    public List<NominationsForm> getAllNominations() {
        return this.nominationsCRUDRepository.findAll()
                .stream()
                .map(NominationsFormEntity::toDomain)
                .collect(Collectors.toList());
    }
}
