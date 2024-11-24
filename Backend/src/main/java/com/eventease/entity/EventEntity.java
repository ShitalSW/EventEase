package com.eventease.entity;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalTime;
import java.util.List;

@Entity
public class EventEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String name;
    private String category;
    private String location;
    
    @Column(columnDefinition = "DATE")
    private LocalDate date;
    
    @Column(columnDefinition = "TIME")
    private LocalTime time;
    
    private String duration; // Duration as a string, e.g., "2 hours"
    private Double price;
    private String description;
    public int getTicketsAvailable() {
		return ticketsAvailable;
	}

	@Override
	public String toString() {
		return "EventEntity [id=" + id + ", name=" + name + ", category=" + category + ", location=" + location
				+ ", date=" + date + ", time=" + time + ", duration=" + duration + ", price=" + price + ", description="
				+ description + ", eventType=" + eventType + ", eventImagePath=" + eventImagePath
				+ ", ticketsAvailable=" + ticketsAvailable + ", isEventDeleted=" + isEventDeleted + ", organizer="
				+ organizer + ", bookings=" + bookings + ", savedByUsers=" + savedByUsers + ", getTicketsAvailable()="
				+ getTicketsAvailable() + ", getEventImagePath()=" + getEventImagePath() + ", getId()=" + getId()
				+ ", getName()=" + getName() + ", getCategory()=" + getCategory() + ", getLocation()=" + getLocation()
				+ ", getDate()=" + getDate() + ", getTime()=" + getTime() + ", getDuration()=" + getDuration()
				+ ", getPrice()=" + getPrice() + ", getDescription()=" + getDescription() + ", getEventType()="
				+ getEventType() + ", getOrganizer()=" + getOrganizer()
				+ ", isEventDeleted()=" + isEventDeleted()
				+ ", getClass()=" + getClass() + ", hashCode()=" + hashCode() + ", toString()=" 
				+ "]";
	}

	public void setTicketsAvailable(int ticketsAvailable) {
		this.ticketsAvailable = ticketsAvailable;
	}

	private String eventType;
    private String eventImagePath;
    private int ticketsAvailable;
    public String getEventImagePath() {
		return eventImagePath;
	}

	public void setEventImagePath(String eventImagePath) {
		this.eventImagePath = eventImagePath;
	}

	private boolean isEventDeleted = false; // "venue" or "online"

    @ManyToOne
    @JoinColumn(name = "organizer_id")
    private UserEntity organizer;

    @OneToMany(mappedBy = "event")
    private List<BookingEntity> bookings;

    @ManyToMany(mappedBy = "savedEvents")
    private List<UserEntity> savedByUsers;

    // Getters and Setters

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

    public UserEntity getOrganizer() {
        return organizer;
    }

    public void setOrganizer(UserEntity organizer) {
        this.organizer = organizer;
    }

    public List<BookingEntity> getBookings() {
        return bookings;
    }

    public void setBookings(List<BookingEntity> bookings) {
        this.bookings = bookings;
    }

    public List<UserEntity> getSavedByUsers() {
        return savedByUsers;
    }

    public void setSavedByUsers(List<UserEntity> savedByUsers) {
        this.savedByUsers = savedByUsers;
    }

	public boolean isEventDeleted() {
		return isEventDeleted;
	}

	public void setEventDeleted(boolean isEventDeleted) {
		this.isEventDeleted = isEventDeleted;
	}
}
