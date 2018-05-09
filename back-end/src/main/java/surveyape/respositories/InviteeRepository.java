package surveyape.respositories;

import org.springframework.data.repository.CrudRepository;
import surveyape.entity.InviteesEntity;

import java.util.Set;

public interface InviteeRepository extends CrudRepository<InviteesEntity, Long> {
    Set<InviteesEntity> findAllByEmail(String email);
}
