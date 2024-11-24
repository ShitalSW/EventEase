package com.eventease.service;



import com.eventease.entity.EventEntity;
import com.eventease.entity.UserEntity;
import com.eventease.security.JwtUtils;
import com.eventease.DTO.*;
import com.eventease.dao.EventRepository;
import com.eventease.dao.UserRepository;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.StandardCopyOption;
import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import java.util.stream.Collectors;
import org.springframework.util.StringUtils;

import javax.persistence.EntityNotFoundException;
import javax.transaction.Transactional;

@Service
public class EventService {

    @Autowired
    private EventRepository eventRepository;
    @Autowired
    private UserRepository userRepo;
    @Autowired
    private ModelMapper modelMapper;

//    @Autowired
//    private ImageStorageService imageStorageService;
//   
    @Autowired
    private JwtUtils jwtutils;
 

  
    public EventDetailsDTO getEventById(Long id) {
        EventDetailsDTO eventEntity = eventRepository.findEventDetailsById(id);
       
        return eventEntity;
    }
/*name: "Dance Event"
category: "Dance"
location: "Hyd"
date: "2024-08-14"
time: "01:02:00"
duration: "1"
price: 100
description: "A fun dance event"
eventType: "Venue"
eventImage*/
    
    @Transactional

    public EventEntity createEvent(EventDTO eventDTO,String userId) {
        // Store the image using ImageStorageService
       // String imagePath = imageStorageService.storeBanner(file);

        // Set the image path in the eventDTO
        //eventDTO.setEventImagePath(imagePath);

        // Create and save EventEntity
        EventEntity eventEntity = new EventEntity();
        eventEntity.setName(eventDTO.getName());
        eventEntity.setCategory(eventDTO.getCategory());
        eventEntity.setLocation(eventDTO.getLocation());
        eventEntity.setDate(eventDTO.getDate());
        eventEntity.setTime(eventDTO.getTime());
        eventEntity.setDuration(eventDTO.getDuration());
        eventEntity.setDescription(eventDTO.getDescription());
        eventEntity.setEventType(eventDTO.getEventType());
        eventEntity.setPrice(eventDTO.getPrice());
        eventEntity.setTicketsAvailable(eventDTO.getTickets());
        //eventEntity.setEventImagePath(eventDTO.getEventImagePath());
       Long userid= Long.parseLong(userId);
        UserEntity user=userRepo.findById(userid).orElseThrow();
        eventEntity.setOrganizer(user);

        return eventRepository.save(eventEntity);
    }


//    public EventDTO updateEvent(Long id, EventDTO eventDTO) {
//        EventEntity event = eventRepository.findById(id).orElse(null);
//
//        if (event != null) {
//            modelMapper.map(eventDTO, event);
//            UserEntity organizer = userRepository.findById(eventDTO.getOrganizer()).orElse(null);
//
//            if (organizer != null) {
//                event.setOrganizer(organizer);
//            }
//
//            EventEntity updatedEvent = eventRepository.save(event);
//            return modelMapper.map(updatedEvent, EventDTO.class);
//        }
//
//        return null;
//    }

    public List<EventDTO> getAllEvents() {
        List<EventEntity> events = eventRepository.findAll();
        return events.stream()
                .map(event -> modelMapper.map(event, EventDTO.class))
                .collect(Collectors.toList());
    }
    public List<EventDTO> getEventsByCategory(String category) {
        List<EventEntity> eventEntities = eventRepository.findByCategory(category);
        return eventEntities.stream()
                .map(eventEntity -> modelMapper.map(eventEntity, EventDTO.class))
                .collect(Collectors.toList());
    }
//    public List<EventEntity> getEventsByDate(LocalDate date) {
//        return eventRepository.findByDate(date);
//    }

    public List<EventDTO> getEventsByPriceRange(Double minPrice, Double maxPrice) {
        List<EventEntity> eventEntities = eventRepository.findByPriceBetween(minPrice, maxPrice);
        return eventEntities.stream()
                .map(eventEntity -> modelMapper.map(eventEntity, EventDTO.class))
                .collect(Collectors.toList());
    }
    
    public void deleteEvent(Long id) {
        eventRepository.deleteById(id);
    }

	
}
