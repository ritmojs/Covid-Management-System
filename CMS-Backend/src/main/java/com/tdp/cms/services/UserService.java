package com.tdp.cms.services;


import com.tdp.cms.payloads.UserDto;

public interface UserService {
	
	UserDto signupUser(UserDto user);
	UserDto signinUser(UserDto user);
	UserDto updateUser(UserDto user,Integer userId);
	UserDto getUserById(Integer userId);
	void deleteUser(Integer userId);
	

}
