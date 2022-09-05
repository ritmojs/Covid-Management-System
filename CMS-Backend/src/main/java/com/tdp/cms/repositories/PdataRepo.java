package com.tdp.cms.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdp.cms.entities.Pdata;
import com.tdp.cms.entities.User;

public interface PdataRepo extends JpaRepository<Pdata,Integer>{
	
	List<Pdata> findByUser(User user);
	List<Pdata> findByVaccinationStatus(String vaccinationStatus);
	List<Pdata> findBycurrentHealth(String currentHealth);

}
