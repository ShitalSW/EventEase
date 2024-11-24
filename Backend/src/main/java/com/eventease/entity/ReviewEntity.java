package com.eventease.entity;



import javax.persistence.*;
import java.util.Date;

@Entity
public class ReviewEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "attendee_id")
    private UserEntity attendee;

    @ManyToOne
    @JoinColumn(name = "organizer_id")
    private UserEntity organizer;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private EventEntity event;

    private String comment;
    private Integer rating; // Rating out of 5
    private Date reviewDate;
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public UserEntity getAttendee() {
		return attendee;
	}
	public void setAttendee(UserEntity attendee) {
		this.attendee = attendee;
	}
	public UserEntity getOrganizer() {
		return organizer;
	}
	public void setOrganizer(UserEntity organizer) {
		this.organizer = organizer;
	}
	public EventEntity getEvent() {
		return event;
	}
	public void setEvent(EventEntity event) {
		this.event = event;
	}
	public String getComment() {
		return comment;
	}
	public void setComment(String comment) {
		this.comment = comment;
	}
	public Integer getRating() {
		return rating;
	}
	public void setRating(Integer rating) {
		this.rating = rating;
	}
	public Date getReviewDate() {
		return reviewDate;
	}
	public void setReviewDate(Date reviewDate) {
		this.reviewDate = reviewDate;
	}

    
}

