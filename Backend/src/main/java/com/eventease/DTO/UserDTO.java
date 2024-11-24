package com.eventease.DTO;



import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.eventease.entity.RoleTemp;

public class UserDTO {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private String description;
    public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	 private Set<RoleTemp> roles=new HashSet<>();
    public Set<RoleTemp> getRoles() {
		return roles;
	}
	public void setRoles(Set<RoleTemp> roles) {
		this.roles = roles;
	}
	private List<BookingDTO> bookings;
    private List<EventDTO> savedEvents;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	public List<BookingDTO> getBookings() {
		return bookings;
	}
	public void setBookings(List<BookingDTO> bookings) {
		this.bookings = bookings;
	}
	public List<EventDTO> getSavedEvents() {
		return savedEvents;
	}
	public void setSavedEvents(List<EventDTO> savedEvents) {
		this.savedEvents = savedEvents;
	}

   
}

