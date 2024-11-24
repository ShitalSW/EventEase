package com.eventease.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventease.entity.Role;
import com.eventease.entity.RoleTemp;

public interface RoleRepository extends JpaRepository<RoleTemp,Long> {

	Optional<RoleTemp> findByRole(Role roleName);
}
