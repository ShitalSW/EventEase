package com.eventease.controller;


import com.eventease.entity.EventEntity;
import com.eventease.entity.RoleTemp;
import com.eventease.entity.UserEntity;
import com.eventease.entity.UserTemp;
import com.eventease.security.JwtUtils;
import com.eventease.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Lazy;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import javax.validation.Valid;

import com.eventease.DTO.SigninRequest;
import com.eventease.DTO.SigninResponse;
import com.eventease.DTO.UserDTO;
import com.eventease.DTO.UserRegistrationDTO;
import com.eventease.dao.RoleRepository;
import com.eventease.dao.UserRepository;
import com.eventease.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/users")
public class UserController {

    @Autowired
    @Lazy
    private UserService userService;
    @Autowired
    private RoleRepository roleRepo;
	@Autowired
	private JwtUtils jwtUtils;

	@Autowired
	private AuthenticationManager authMgr;
	
	@Autowired
	private UserRepository userRepo;
    

    
         @GetMapping("/{id}")
        public ResponseEntity<UserDTO> getUserById(@PathVariable Long id) {
            UserDTO userDTO = userService.getUserById(id);
            return userDTO != null ? ResponseEntity.ok(userDTO) : ResponseEntity.notFound().build();
        }
         
/*         {
        	  "firstName": "John",
        	  "lastName": "Doe",
        	  "email": "john.doe@example.com",
        	  "password": "securepassword123",
        	  "description":"i am a event organizer",
        	  "role": "USER" 
        	}*/
       /* @PostMapping
        public ResponseEntity<UserDTO> createUser(@RequestBody UserDTO userDTO) {
            UserDTO createdUser = userService.createUser(userDTO);
            return ResponseEntity.ok(createdUser);
        }*/
         @CrossOrigin(origins="http://localhost:3000")
         @PostMapping("/register")
         public ResponseEntity<UserRegistrationDTO> registerUser(@RequestBody UserRegistrationDTO user) {
             if (user.getPassword()== null || user.getPassword().isEmpty()) {
                 return new ResponseEntity<>(HttpStatus.BAD_REQUEST); // Bad Request if password is null or empty
             }

            

             UserRegistrationDTO savedUser = userService.registerUser(user);
             return new ResponseEntity<>(savedUser, HttpStatus.CREATED);
         }
         @CrossOrigin(origins="http://localhost:3000")
         @PostMapping("/signin")
        	public ResponseEntity<?> authenticateUser(@RequestBody 
        			@Valid SigninRequest request) {
        		System.out.println("in sign in" + request);
        		//create a token(implementation of Authentication i/f)
        		//to store un verified user email n pwd
        		UsernamePasswordAuthenticationToken token=new 
        				UsernamePasswordAuthenticationToken(request.getEmail(), 
        						request.getPassword());
        		//invoke auth mgr's authenticate method;
        		Authentication verifiedToken = authMgr.authenticate(token);
        		//=> authentication n authorization  successful !
        		System.out.println(verifiedToken.getPrincipal().getClass());//custom user details object
        		
        		UserEntity user=userRepo.findByEmail(request.getEmail()).orElseThrow();
        		SigninResponse resp=new SigninResponse(jwtUtils.generateJwtToken(verifiedToken),user.getRole().name(),user.getId());
        		return ResponseEntity.ok(resp);
        				//status(HttpStatus.CREATED).body(resp);
        	}
 
       /* { "firstName": "John",
      	  "lastName": "Doe",
                "description":"i have conducted more than 10 events successfully"
               } */
        @PutMapping("/{id}")
        public ResponseEntity<UserDTO> updateUser(@PathVariable Long id, @RequestBody UserDTO userDTO) {
            UserDTO updatedUser = userService.updateUser(id, userDTO);
            return updatedUser != null ? ResponseEntity.ok(updatedUser) : ResponseEntity.notFound().build();
        }
        
        @GetMapping
        public ResponseEntity<List<UserDTO>> getAllUsers() {
            List<UserDTO> userDTOs = userService.getAllUsers();
            return ResponseEntity.ok(userDTOs);
        }

        @PostMapping("/delete/{id}")
        public ResponseEntity<String> softDeleteUser(@PathVariable Long id) {
            try {
                userService.softDeleteUser(id);
                return ResponseEntity.ok("User soft deleted successfully.");
            } catch (RuntimeException e) {
                return ResponseEntity.badRequest().body(e.getMessage());
            }
        }
        
     
    }

    



   

   

  




