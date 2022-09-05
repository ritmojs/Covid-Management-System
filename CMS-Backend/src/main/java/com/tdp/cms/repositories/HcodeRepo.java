package com.tdp.cms.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdp.cms.entities.Hcode;

public interface HcodeRepo extends JpaRepository<Hcode,Integer>{
	
	List<Hcode> findByhcode(String hcode);
	
}
