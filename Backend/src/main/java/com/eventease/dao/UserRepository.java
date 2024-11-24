package com.eventease.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.eventease.entity.UserEntity;
import com.eventease.entity.UserTemp;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    @Query("SELECT u FROM UserEntity u WHERE u.isUserDeleted = false")
	List<UserEntity> getAllUsers();
    
    Optional<UserEntity> findByEmail(String email);
}

