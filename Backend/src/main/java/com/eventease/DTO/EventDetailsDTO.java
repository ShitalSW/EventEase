package com.eventease.DTO;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

import com.eventease.entity.EventEntity;

public class EventDetailsDTO {
	 private Long id;
	    
	    private String name;
	    private String category;
	    private String location;
	    private LocalDate date;
	    private LocalTime time;
	    private String duration; // Duration as a string, e.g., "2 hours"
	    private Double price;
	    private String description;
	    private String eventType;
	    private int ticketsAvailable;
	    private Long organizerId;
	    public EventDetailsDTO(Long id, String name, String category, String location, LocalDate date, LocalTime time,
                String duration, Double price, String description, String eventType, int ticketsAvailable, Long organizerId) {
this.id = id;
this.name = name;
this.category = category;
this.location = location;
this.date = date;
this.time = time;
this.duration = duration;
this.price = price;
this.description = description;
this.eventType = eventType;
this.ticketsAvailable = ticketsAvailable;
this.organizerId = organizerId;
}
	   
		public Long getOrganizerId() {
			return organizerId;
		}
		public void setOrganizerId(Long organizerId) {
			this.organizerId = organizerId;
		}
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getCategory() {
			return category;
		}
		public void setCategory(String category) {
			this.category = category;
		}
		public String getLocation() {
			return location;
		}
		public void setLocation(String location) {
			this.location = location;
		}
		public LocalDate getDate() {
			return date;
		}
		public void setDate(LocalDate date) {
			this.date = date;
		}
		public LocalTime getTime() {
			return time;
		}
		public void setTime(LocalTime time) {
			this.time = time;
		}
		public String getDuration() {
			return duration;
		}
		public void setDuration(String duration) {
			this.duration = duration;
		}
		public Double getPrice() {
			return price;
		}
		public void setPrice(Double price) {
			this.price = price;
		}
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		public String getEventType() {
			return eventType;
		}
		public void setEventType(String eventType) {
			this.eventType = eventType;
		}
		public int getTicketsAvailable() {
			return ticketsAvailable;
		}
		public void setTicketsAvailable(int ticketsAvailable) {
			this.ticketsAvailable = ticketsAvailable;
		}
	
	    

}
