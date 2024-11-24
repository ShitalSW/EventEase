package com.eventease.dao;


import com.eventease.DTO.EventDetailsDTO;
import com.eventease.entity.EventEntity;


import java.time.LocalDate;
import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<EventEntity, Long> {
	
	@Query("SELECT new com.eventease.DTO.EventDetailsDTO(e.id, e.name, e.category, e.location, e.date, e.time, e.duration, e.price, e.description, e.eventType, e.ticketsAvailable, e.organizer.id) " +
		       "FROM EventEntity e WHERE e.id =:id")
		EventDetailsDTO findEventDetailsById(Long id);


	List<EventEntity> findByCategory(String category);

	 List<EventEntity> findByDate(LocalDate date);

	

	List<EventEntity> findByPriceBetween(Double minPrice, Double maxPrice);
}

