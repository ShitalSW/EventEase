package com.eventease.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;

import java.util.Date;

import javax.persistence.*;

@Entity
	public class NotificationEntity {
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @ManyToOne
	    @JoinColumn(name = "recipient_id")
	    private UserEntity recipient;

	    private String message;
	    private Date notificationDate;
		public Long getId() {
			return id;
		}
		public void setId(Long id) {
			this.id = id;
		}
		public UserEntity getRecipient() {
			return recipient;
		}
		public void setRecipient(UserEntity recipient) {
			this.recipient = recipient;
		}
		public String getMessage() {
			return message;
		}
		public void setMessage(String message) {
			this.message = message;
		}
		public Date getNotificationDate() {
			return notificationDate;
		}
		public void setNotificationDate(Date notificationDate) {
			this.notificationDate = notificationDate;
		}
	    

	}



