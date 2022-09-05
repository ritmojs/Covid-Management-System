package com.tdp.cms.controllers;



import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.tdp.cms.entities.User;
import com.tdp.cms.exceptions.ResourceNotFoundExceptions;
import com.tdp.cms.payloads.JwtAuthRequest;
import com.tdp.cms.payloads.JwtAuthResponse;
import com.tdp.cms.repositories.UserRepo;
import com.tdp.cms.security.JwtTokenHelper;

@RestController
@RequestMapping("/api/auth/")
public class AuthController {
	
	
	@Autowired
	private JwtTokenHelper jwtTokenHelper;
	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private AuthenticationManager authenticationManger;
	@Autowired
	private UserRepo userRepo;
	
	
	
	
	
	
	
	
	@PostMapping("/login")
	public ResponseEntity<JwtAuthResponse> createToken(@Valid @RequestBody JwtAuthRequest request)
	{
		
		System.out.println(request);
		this.authenticate(request.getUsername(),request.getPassword());
		System.out.println("HEYYYYYYYYYYYYYYY");
		UserDetails userDetails=this.userDetailsService.loadUserByUsername(request.getUsername());
		System.out.println("HEYYYYYYYYYYYYYYY1111111111111111111111111111");
		String token = this.jwtTokenHelper.generateToken(userDetails);
		JwtAuthResponse response=new JwtAuthResponse();
		response.setToken(token);
		User user=this.userRepo.findByEmail(request.getUsername()).orElseThrow(()-> new ResourceNotFoundExceptions("User","email",0));;
		response.setUser(user);
		return new ResponseEntity<>(response,HttpStatus.OK);
		
		
		
	}
	
	
	private void authenticate(String username, String password)  {
		
		UsernamePasswordAuthenticationToken authenticationToken=new UsernamePasswordAuthenticationToken(username,password);
		System.out.println(authenticationToken);
		try {
			this.authenticationManger.authenticate(authenticationToken);
			System.out.println(authenticationToken);
		}
		catch(BadCredentialsException e)
		{
			//BadCredentialsException
			throw new ResourceNotFoundExceptions("Either email or Password is wrong");
		}
		catch(InternalAuthenticationServiceException e)
		{
			throw new ResourceNotFoundExceptions("User Not Found");
		}
			
		
			
			
		
	}

}
