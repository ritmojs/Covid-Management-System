package com.tdp.cms.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.tdp.cms.entities.Adata;
import com.tdp.cms.entities.Admin;

public interface AdataRepo extends JpaRepository<Adata,Integer> {
	
	List<Adata> findByAdmin(Admin admin);
	List<Adata> findByAdminId(Integer adminId);

}
