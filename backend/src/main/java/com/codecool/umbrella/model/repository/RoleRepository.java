package com.codecool.umbrella.model.repository;

import com.codecool.umbrella.model.ERole;
import com.codecool.umbrella.model.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {

    Optional<Role> findByName(ERole name);

}
