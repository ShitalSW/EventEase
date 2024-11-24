package com.eventease.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.eventease.entity.UserTemp;

public interface UserRepositoryTemp extends JpaRepository<UserTemp, Long> {

	Optional<UserTemp> findByEmail(String email);
}
