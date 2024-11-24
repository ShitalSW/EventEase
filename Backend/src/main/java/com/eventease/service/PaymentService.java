package com.eventease.service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.Random;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.eventease.DTO.PaymentDTO;
import com.eventease.dao.PaymentRepository;
import com.eventease.entity.PaymentEntity;

@Service
@Transactional
public class PaymentService {

    @Autowired
    private PaymentRepository paymentRepo;
    
    private String generateTransactionNumber() {
        Random random = new Random();
        int number = random.nextInt(999999999);
        return String.format("%09d", number);
    }

  public PaymentEntity createPayment(PaymentDTO payDTO)
  {
	  
	 
	  LocalDateTime now = LocalDateTime.now();

      // Set the parsed LocalDateTime back to the DTO
      PaymentEntity payment = new PaymentEntity();
      payment.setBookingId(payDTO.getBookingId());
      payment.setEventId(payDTO.getEventId());
      //payment.setAmount(payDTO.getAmount());
      payment.setUserId(payDTO.getUserId());
      payment.setLocalDateTime(now); 
      payment.setTransactionNumber(generateTransactionNumber());
	  return paymentRepo.save(payment);
	
	  
  }
}
