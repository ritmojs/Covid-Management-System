package com.tdp.cms.services.impl;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tdp.cms.exceptions.ResourceNotFoundExceptions;
import com.tdp.cms.entities.User;
import com.tdp.cms.payloads.UserDto;
import com.tdp.cms.repositories.UserRepo;
import com.tdp.cms.services.UserService;
@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private UserRepo userRepo;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Autowired
	private ModelMapper modelMapper;
	
	@Override
	public UserDto signupUser(UserDto userDto) {
		User user=this.dtoToUser(userDto);
		String pass=this.passwordEncoder.encode(user.getPassword());
		user.setPassword(pass);
		User savedUser=this.userRepo.save(user);
		return this.userToDto(savedUser);
		
	}

	@Override
	public UserDto signinUser(UserDto user) {
		// TODO Auto-generated method stub
		return null;
	}

	@Override
	public UserDto updateUser(UserDto userDto, Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundExceptions("User","id",userId));
		user.setName(userDto.getName());
		user.setEmail(userDto.getEmail());
		user.setPassword(userDto.getPassword());
		User updatedUser=this.userRepo.save(user);
		UserDto userDto1=this.userToDto(updatedUser);
		return userDto1 ;
		
	}

	@Override
	public UserDto getUserById(Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()->new ResourceNotFoundExceptions("User","Id",userId));
		UserDto getUser=this.userToDto(user);
		return getUser;
	}

	@Override
	public void deleteUser(Integer userId) {
		User user=this.userRepo.findById(userId).orElseThrow(()-> new ResourceNotFoundExceptions("User","Id",userId));
		this.userRepo.delete(user);

	}
	
	private User dtoToUser(UserDto userDto)
	{
		User user=this.modelMapper.map(userDto,User.class);
		return user;
		
	}
	private UserDto userToDto (User user)
	{
		UserDto userDto=this.modelMapper.map(user, UserDto.class);
		return userDto;
	}

}
