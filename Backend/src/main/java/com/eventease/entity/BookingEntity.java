package com.eventease.entity;

import javax.persistence.*;



@Entity
public class BookingEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Override
	public String toString() {
		return "BookingEntity [id=" + id + ", attendee=" + attendee + ", event=" + event + ", bookingDate="
				+ bookingDate + ", bookingtime=" + bookingtime + ", numberOfTickets=" + numberOfTickets
				+ ", totalAmount=" + totalAmount + ", isBookingDeleted=" + isBookingDeleted + ", location=" + location
				+ ", eventname=" + eventname + "]";
	}

	@ManyToOne
    @JoinColumn(name = "attendee_id")
    private UserEntity attendee;

    @ManyToOne
    @JoinColumn(name = "event_id")
    private EventEntity event;

    private String bookingDate;
    private String bookingtime;
    private Integer numberOfTickets;
    private Double totalAmount;
    private boolean isBookingDeleted = false;
    private String location;
    private String eventname;

   

	

	public String getBookingDate() {
		return bookingDate;
	}

	public void setBookingDate(String bookingDate) {
		this.bookingDate = bookingDate;
	}

	public String getBookingtime() {
		return bookingtime;
	}

	public void setBookingtime(String bookingtime) {
		this.bookingtime = bookingtime;
	}

	public String getLocation() {
		return location;
	}

	public void setLocation(String location) {
		this.location = location;
	}

	public String getEventname() {
		return eventname;
	}

	public void setEventname(String eventname) {
		this.eventname = eventname;
	}

	
//	@OneToOne(mappedBy = "booking", cascade = CascadeType.ALL, fetch = FetchType.LAZY, optional = false)
//    private PaymentEntity payment;

    // Getters and Setters

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

    public EventEntity getEvent() {
        return event;
    }

    public void setEvent(EventEntity event) {
        this.event = event;
    }

  

    public Integer getNumberOfTickets() {
        return numberOfTickets;
    }

    public void setNumberOfTickets(Integer numberOfTickets) {
        this.numberOfTickets = numberOfTickets;
    }

    public Double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(Double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public boolean isBookingDeleted() {
        return isBookingDeleted;
    }

    public void setBookingDeleted(boolean isBookingDeleted) {
        this.isBookingDeleted = isBookingDeleted;
    }

//    public PaymentEntity getPayment() {
//        return payment;
//    }
//
//    public void setPayment(PaymentEntity payment) {
//        this.payment = payment;
//    }
}
