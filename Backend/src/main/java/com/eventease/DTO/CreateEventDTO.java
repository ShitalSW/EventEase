package com.eventease.DTO;

import java.time.LocalDate;
import java.time.LocalTime;

import org.springframework.web.multipart.MultipartFile;

public class CreateEventDTO {
    private String name;
    private String category;
    private String location;
    private LocalDate date;
    private LocalTime time;
    private String duration;
    private Double price;
    private String description;
 
	private String eventType;
//    private int ticketsAvailable;
    private MultipartFile eventImage;
    private Long organizerId;
	public Long getOrganizerId() {
		return organizerId;
	}
	public void setOrganizerId(Long organizerId) {
		this.organizerId = organizerId;
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
	public MultipartFile getEventImage() {
		return eventImage;
	}
	public void setEventImage(MultipartFile eventImage) {
		this.eventImage = eventImage;
	}
//	   public int getTicketsAvailable() {
//			return ticketsAvailable;
//		}
//		public void setTicketsAvailable(int ticketsAvailable) {
//			this.ticketsAvailable = ticketsAvailable;
//		}

 
}

