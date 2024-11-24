package com.eventease.service;

import com.eventease.DTO.BookingDTO;
import com.eventease.entity.BookingEntity;
import com.eventease.entity.EventEntity;
import com.eventease.entity.PaymentEntity;
import com.eventease.entity.UserEntity;
import com.eventease.dao.BookingRepository;
import com.eventease.dao.EventRepository;
import com.eventease.dao.PaymentRepository;
import com.eventease.dao.UserRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;
    @Autowired
    private PaymentService paymentService;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private EventRepository eventRepository;
    
    @Autowired
    private PaymentRepository paymentRepository;

    @Autowired
    private ModelMapper modelMapper;

    public BookingDTO getBookingById(Long id) {
        Optional<BookingEntity> booking = bookingRepository.findById(id);
        if (booking.isPresent()) {
            BookingDTO bookingDTO = modelMapper.map(booking.get(), BookingDTO.class);
            bookingDTO.setAttendeeId(booking.get().getAttendee().getId());
            bookingDTO.setEventId(booking.get().getEvent().getId());
            return bookingDTO;
        }
        return null;
    }

 

    public Long createBooking(BookingDTO bookingDTO) {
        BookingEntity booking = modelMapper.map(bookingDTO, BookingEntity.class);

        // Fetch Event and User entities from the database
        EventEntity event = eventRepository.findById(bookingDTO.getEventId())
                .orElseThrow(() -> new RuntimeException("Event not found"));
        UserEntity attendee = userRepository.findById(bookingDTO.getAttendeeId())
                .orElseThrow(() -> new RuntimeException("Attendee not found"));

        // Set Event and User in BookingEntity
        booking.setEvent(event);
        booking.setAttendee(attendee);

        // Handle payment if applicable
       /* if (bookingDTO.getPaid() != null && bookingDTO.getPaid()) {
            PaymentEntity payment = new PaymentEntity();
            payment.setAmount(bookingDTO.getTotalAmount());
            payment.setPaymentDate(new Date());
            payment.setPaymentStatus("SUCCESS");
            payment.setTransactionId("some-transaction-id");

            // Set the payment reference in booking
            booking.setPayment(payment);

            // Set the booking reference in payment
            payment.setBooking(booking);
        }*/

        // Save the booking entity (this will also save the payment entity because of cascade)
       BookingEntity booking1= bookingRepository.save(booking);
       return booking1.getId();
    }


    


//    public BookingDTO updateBooking(Long id, BookingDTO bookingDTO) {
//        Optional<BookingEntity> existingBooking = bookingRepository.findById(id);
//
//        if (existingBooking.isPresent()) {
//            BookingEntity booking = existingBooking.get();
//            modelMapper.map(bookingDTO, booking);
//
//            Optional<UserEntity> attendee = userRepository.findById(bookingDTO.getAttendeeId());
//            Optional<EventEntity> event = eventRepository.findById(bookingDTO.getEventId());
//
//            attendee.ifPresent(booking::setAttendee);
//            event.ifPresent(booking::setEvent);
//
//            BookingEntity updatedBooking = bookingRepository.save(booking);
//            return modelMapper.map(updatedBooking, BookingDTO.class);
//        }
//
//        return null;
//    }

    public List<BookingDTO> getAllBookings() {
        List<BookingEntity> bookingEntities = bookingRepository.findAll();
        
        // Logging the details of each booking entity
        for (BookingEntity booking : bookingEntities) {
            System.out.println("Booking ID: " + booking.getId());
            System.out.println("Event: " + (booking.getEvent() != null ? booking.getEvent().getId() : "null"));
            System.out.println("Attendee: " + (booking.getAttendee() != null ? booking.getAttendee().getId() : "null"));
        }
        
        return bookingEntities.stream()
                .map(booking -> {
                    try {
                        return modelMapper.map(booking, BookingDTO.class);
                    } catch (Exception e) {
                        System.err.println("Error mapping BookingEntity to BookingDTO: " + e.getMessage());
                        throw e;
                    }
                })
                .collect(Collectors.toList());
    }
}
