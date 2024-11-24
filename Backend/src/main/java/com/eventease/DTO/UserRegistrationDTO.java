package com.eventease.DTO;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

import com.eventease.entity.Role;
import com.eventease.entity.RoleTemp;

public class UserRegistrationDTO {
	
	
	    private String firstName;
	    private String lastName;
	    private String email;
	    private String password;
	    private String description;
	    private Role role;
		public Role getRole() {
			return role;
		}
		public void setRole(Role role) {
			this.role = role;
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
		public String getDescription() {
			return description;
		}
		public void setDescription(String description) {
			this.description = description;
		}
		
		
	    

	   
	}

	

	



