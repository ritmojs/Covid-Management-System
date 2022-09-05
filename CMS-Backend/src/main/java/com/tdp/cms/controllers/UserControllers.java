package com.tdp.cms.controllers;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdp.cms.payloads.ApiResponse;
import com.tdp.cms.payloads.UserDto;
import com.tdp.cms.services.UserService;

@RestController
@RequestMapping("/api/user")

public class UserControllers {
	
	@Autowired
	private UserService userService;
	@CrossOrigin(origins="http://localhost:3000")
	@PostMapping("/signup")
	public ResponseEntity<UserDto> signUpUser( @Valid @RequestBody UserDto userDto)
	{
		
		UserDto signUpUser=this.userService.signupUser(userDto);
		return new ResponseEntity<>(signUpUser,HttpStatus.CREATED);
		
	}
	
	@GetMapping("/{userId}/dashboard/profile")
	public ResponseEntity<UserDto> getUserById(@PathVariable Integer userId)
	{
		UserDto user=this.userService.getUserById(userId);
		return ResponseEntity.ok(user);
	}
	//read
	
	@PutMapping("/{userId}/dashboard/profile/update")
	public ResponseEntity<UserDto> updateUSer(@Valid @RequestBody UserDto userDto ,@PathVariable Integer userId)
	{
		UserDto updatedUser=this.userService.updateUser(userDto, userId);
		return ResponseEntity.ok(updatedUser);
	}
	//delete
	
	@DeleteMapping("/{userId}/dashboard/profile/delete")
	public ResponseEntity<ApiResponse> deleteUser(@PathVariable Integer userId)
	{
		this.userService.deleteUser(userId);
		return ResponseEntity.ok(new ApiResponse("User Deleted Successfully",true));
	}
	

}
