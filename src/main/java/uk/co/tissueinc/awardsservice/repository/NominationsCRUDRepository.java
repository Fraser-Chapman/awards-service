package uk.co.tissueinc.awardsservice.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import uk.co.tissueinc.awardsservice.repository.model.NominationsFormEntity;

@Repository
public interface NominationsCRUDRepository extends MongoRepository<NominationsFormEntity, Integer> {
}
