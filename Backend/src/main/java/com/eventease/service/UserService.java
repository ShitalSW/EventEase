package com.eventease.service;

import com.eventease.DTO.UserDTO;
import com.eventease.DTO.UserRegistrationDTO;
import com.eventease.DTO.EventDTO;
import com.eventease.DTO.BookingDTO;
import com.eventease.entity.UserEntity;
import com.eventease.entity.UserTemp;
import com.eventease.entity.EventEntity;
import com.eventease.entity.Role;
import com.eventease.entity.BookingEntity;
import com.eventease.dao.UserRepository;
import com.eventease.dao.UserRepositoryTemp;
import com.eventease.dao.EventRepository;
import com.eventease.dao.RoleRepository;
import com.eventease.dao.BookingRepository;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@Transactional
public class UserService {

	

       
     
       

   	@Autowired
   	@Lazy
   	private PasswordEncoder encoder;
   	@Autowired
 	private	UserRepository userRepository;
   	@Autowired
 	private EventRepository eventRepository;
   	@Autowired
 	private BookingRepository bookingRepository;
   	@Autowired
 	private ModelMapper modelMapper;
   	@Autowired
 	private RoleRepository roleRepo;
   	


      

    public UserDTO getUserById(Long id) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        if (userEntity == null) return null;

        UserDTO userDTO = modelMapper.map(userEntity, UserDTO.class);

        // Map bookings
        List<BookingDTO> bookings = userEntity.getBookings().stream()
            .map(booking -> modelMapper.map(booking, BookingDTO.class))
            .collect(Collectors.toList());
        userDTO.setBookings(bookings);

        // Map saved events
        List<EventDTO> savedEvents = userEntity.getSavedEvents().stream()
            .map(event -> modelMapper.map(event, EventDTO.class))
            .collect(Collectors.toList());
        userDTO.setSavedEvents(savedEvents);

        return userDTO;
    }
    
   

   /* public UserDTO createUser(UserDTO userDTO) {
        UserEntity userEntity = modelMapper.map(userDTO, UserEntity.class);
        userEntity = userRepository.save(userEntity);
        return modelMapper.map(userEntity, UserDTO.class);
    }*/
    
    public UserRegistrationDTO registerUser(UserRegistrationDTO userRegDTO)
    {
    	 UserEntity userEntity = modelMapper.map(userRegDTO, UserEntity.class);
    	 userEntity.setRole(Role.USER);
   	userEntity.setPassword(encoder.encode(userEntity.getPassword()));
		userEntity= userRepository.save(userEntity);
		 return modelMapper.map(userEntity, UserRegistrationDTO.class);
   	
  }

    public UserDTO updateUser(Long id, UserDTO userDTO) {
        UserEntity userEntity = userRepository.findById(id).orElse(null);
        if (userEntity == null) return null;

        modelMapper.map(userDTO, userEntity);
        userEntity = userRepository.save(userEntity);
        return modelMapper.map(userEntity, UserDTO.class);
    }

   
    public List<UserDTO> getAllUsers() {
        List<UserEntity> userEntities = userRepository.getAllUsers();
        List<UserDTO> userDTOs = new ArrayList<>();
        for (UserEntity userEntity : userEntities) {
            userDTOs.add(modelMapper.map(userEntity, UserDTO.class));
        }
        return userDTOs;
    }

    private UserDTO convertToDto(UserEntity userEntity) {
        return modelMapper.map(userEntity, UserDTO.class);
    }

    private UserEntity convertToEntity(UserDTO userDTO) {
        return modelMapper.map(userDTO, UserEntity.class);
    }

    public void softDeleteUser(Long userId) {
        UserEntity user = userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found"));
        user.setUserDeleted(true);
        userRepository.save(user);
    }
}
