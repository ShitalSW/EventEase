package com.eventease.controller;

import com.eventease.DTO.CreateEventDTO;
import com.eventease.DTO.EventDTO;
import com.eventease.DTO.EventDetailsDTO;
import com.eventease.entity.EventEntity;
import com.eventease.security.JwtUtils;
import com.eventease.service.EventService;

import io.jsonwebtoken.Claims;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/events")
public class EventController {

    @Autowired
    private EventService eventService;
    @Autowired
    private JwtUtils jwtUtils;
    
    
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<EventDetailsDTO> getEventById(@PathVariable Long id) {
        EventDetailsDTO event = eventService.getEventById(id);
        return event != null ? ResponseEntity.ok(event) : ResponseEntity.notFound().build();
    }
   /* {
    	  "name": "Event Name",
    	  "category": "Concert",
    	  "location": "Venue Address",
    	  "date": "2024-08-08",
    	  "time": "18:00",
    	  "duration": "3 hours",
    	  "price": 100.0,
    	  "description": "Event Description",
    	  "eventType": "venue",
    	  "organizerId": 4
    	}*/
    
   /* @PostMapping
    public ResponseEntity<EventEntity> createEvent(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestHeader("User-ID") String userId,
            @RequestBody EventDTO eventDTO) {
        
        // Extract the JWT token from the Authorization header
        String jwtToken = authorizationHeader.replace("Bearer ", "");

        // Validate the JWT token
        Claims claims = jwtUtils.validateJwtToken(jwtToken);
        if (claims == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

        // Optional: Validate that the token's user ID matches the provided user ID
        String tokenUserId = jwtUtils.getUserNameFromJwtToken(claims);
        if (!tokenUserId.equals(userId)) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
        }

        // Save the event with the organizer's ID
        EventEntity createdEvent = eventService.createEvent(eventDTO,userId);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }*/

   // @PostMapping(consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<EventEntity> createEvent(
            @RequestHeader("Authorization") String authorizationHeader,
            @RequestHeader("User-ID") String userId,
            @RequestParam("name") String name,
            @RequestParam("category") String category,
            @RequestParam("location") String location,
            @RequestParam("date") String date,
            @RequestParam("time") String time,
            @RequestParam("duration") String duration,
            @RequestParam("description") String description,
            @RequestParam("type") String type,
            @RequestParam("price") double price,
            @RequestParam("tickets") int tickets)
           // @RequestParam(value = "banner", required = false) MultipartFile bannerFile)
            {

        // Extract the JWT token from the Authorization header
        String jwtToken = authorizationHeader.replace("Bearer ", "");

        // Validate the JWT token
        Claims claims = jwtUtils.validateJwtToken(jwtToken);
        if (claims == null) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }

      

        // Convert user ID to Long
        Long userIdLong = Long.parseLong(userId);

        // Create EventDTO object and populate it with the received data
        EventDTO eventDTO = new EventDTO();
        eventDTO.setName(name);
        eventDTO.setCategory(category);
        eventDTO.setLocation(location);
        eventDTO.setDate(LocalDate.parse(date));
        eventDTO.setTime(LocalTime.parse(time));
        eventDTO.setDuration(duration);
        eventDTO.setDescription(description);
        eventDTO.setEventType(type);
        eventDTO.setPrice(price);
        eventDTO.setTickets(tickets);

      

        // Save the event with the organizer's ID
        EventEntity createdEvent = eventService.createEvent(eventDTO,userId);

        return ResponseEntity.status(HttpStatus.CREATED).body(createdEvent);
    }

//    private String saveFile(MultipartFile file) {
//        // Implement this method to save the file to a directory and return its path
//        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
//        String uploadDir = "path/to/upload/directory";
//        File targetFile = new File(uploadDir, fileName);
//
//        try {
//            file.transferTo(targetFile);
//            return targetFile.getAbsolutePath();
//        } catch (IOException e) {
//            throw new RuntimeException("Failed to store file " + fileName, e);
//        }
    

//    @PutMapping("/{id}")
//    public ResponseEntity<EventDTO> updateEvent(@PathVariable Long id, @RequestBody EventDTO eventDTO) {
//        EventDTO updatedEvent = eventService.updateEvent(id, eventDTO);
//        return updatedEvent != null ? ResponseEntity.ok(updatedEvent) : ResponseEntity.notFound().build();
//    }
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping
    public ResponseEntity<List<EventDTO>> getAllEvents() {
        List<EventDTO> events = eventService.getAllEvents();
        return ResponseEntity.ok(events);
    }
    @GetMapping("/category/{category}")
    public List<EventDTO> getEventsByCategory(@PathVariable String category) {
        return eventService.getEventsByCategory(category);
    }
//    @GetMapping("/date/{date}")
//    public List<EventEntity> getEventsByDate(@PathVariable("date") String dateStr) {
//        // Convert the date string to LocalDate
//        LocalDate date = LocalDate.parse(dateStr);
//        return eventService.getEventsByDate(date);
//    }
    @GetMapping("/price-range")
    public List<EventDTO> getEventsByPriceRange(@RequestParam Double minPrice, @RequestParam Double maxPrice) {
        return eventService.getEventsByPriceRange(minPrice, maxPrice);
    }

//    @DeleteMapping("/{id}")
//    public ResponseEntity<Void> deleteEvent(@PathVariable Long id) {
//        eventService.deleteEvent(id);
//        return ResponseEntity.noContent().build();
//    }
}
