package com.tdp.cms.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdp.cms.entities.Admin;

public interface AdminRepo extends JpaRepository<Admin,Integer>{
	List<Admin> findByEmail(String email);

	
}
