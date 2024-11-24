package com.eventease.controller;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.eventease.DTO.PaymentDTO;
import com.eventease.dao.BookingRepository;
import com.eventease.entity.*;
import com.eventease.service.PaymentService;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;
    
    private BookingRepository bookingrepo;
    
    @CrossOrigin(origins="http://localhost:3000")
    @PostMapping
    public ResponseEntity<?> createPayment(@RequestBody PaymentDTO payDTO)
           {
    	

        try {
            PaymentEntity payment = paymentService.createPayment(payDTO);
//            Long bid=payment.getBookingId();
//      Optional<BookingEntity> booking= bookingrepo.findById(bid);
            return ResponseEntity.ok(payment);
            
        } catch (RuntimeException e) {
            return ResponseEntity.badRequest().body(null);
        }
    }
}
