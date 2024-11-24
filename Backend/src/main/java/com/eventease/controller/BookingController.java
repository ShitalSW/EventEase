package com.eventease.controller;

import com.eventease.DTO.BookingDTO;
import com.eventease.entity.BookingEntity;
import com.eventease.entity.PaymentEntity;
import com.eventease.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired                     
    private BookingService bookingService;
    @CrossOrigin(origins="http://localhost:3000")
    @GetMapping("/{id}")
    public ResponseEntity<BookingDTO> getBookingById(@PathVariable Long id) {
        BookingDTO bookingDTO = bookingService.getBookingById(id);
        return bookingDTO != null ? ResponseEntity.ok(bookingDTO) : ResponseEntity.notFound().build();
    }
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping
    public ResponseEntity<?> createBooking(@RequestBody BookingDTO bookingDTO) {
        try {
           Long bookingid= bookingService.createBooking(bookingDTO);
            return ResponseEntity.ok(bookingid);
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(e.getMessage());
        }
    }

//    @PutMapping("/{id}")
//    public ResponseEntity<BookingDTO> updateBooking(@PathVariable Long id, @RequestBody BookingDTO bookingDTO) {
//        BookingDTO updatedBooking = bookingService.updateBooking(id, bookingDTO);
//        return updatedBooking != null ? ResponseEntity.ok(updatedBooking) : ResponseEntity.notFound().build();
//    }

    @GetMapping
    public ResponseEntity<List<BookingDTO>> getAllBookings() {
        List<BookingDTO> bookings = bookingService.getAllBookings();
        return ResponseEntity.ok(bookings);
    }
}


