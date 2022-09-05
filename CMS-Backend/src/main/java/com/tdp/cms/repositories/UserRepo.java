package com.tdp.cms.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdp.cms.entities.User;

public interface UserRepo extends JpaRepository<User,Integer> {
	
	Optional<User> findByEmail(String email);

}
