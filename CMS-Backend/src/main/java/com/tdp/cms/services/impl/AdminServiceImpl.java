package com.tdp.cms.services.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.tdp.cms.entities.Admin;
import com.tdp.cms.entities.Hcode;
import com.tdp.cms.entities.User;
import com.tdp.cms.exceptions.ResourceNotFoundExceptions;
import com.tdp.cms.payloads.AdminAuthRequest;
import com.tdp.cms.payloads.AdminDto;
import com.tdp.cms.payloads.UserDto;
import com.tdp.cms.repositories.AdminRepo;
import com.tdp.cms.services.AdminService;
import com.tdp.cms.services.HcodeService;

@Service
public class AdminServiceImpl implements AdminService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private AdminRepo adminRepo;
	@Autowired
	private HcodeService hcodeService;
	@Autowired
	private PasswordEncoder passwordEncoder;
	
	@Override
	public AdminDto signUpAdmin(AdminDto adminDto) {
		String hcode=adminDto.getHcode();
		Admin saveAdmin=null;AdminDto saveDto=null;
		List<Hcode> lh=this.hcodeService.getHcode(hcode);
		System.out.print("HHHHHH");
		if(!lh.isEmpty())
		{
			Admin admin=this.dtoToAdmin(adminDto);
			
			
			saveAdmin=this.adminRepo.save(admin);
			 saveDto=this.adminToDto(saveAdmin);
		}
		
		return saveDto;
		
		
		
	}

	@Override
	public AdminDto signInAdmin(AdminAuthRequest adminDto) {
		Admin admin=new Admin();
		admin.setEmail(adminDto.getEmail());
		admin.setPassword(adminDto.getPassword());
		String pass=admin.getPassword();
		
		List<Admin> gadmin=this.adminRepo.findByEmail(admin.getEmail());
		AdminDto adto=null;
	
		
		
		if(!gadmin.isEmpty())
		if(gadmin.get(0).getPassword().equals(pass))
		{
			
			adto=this.adminToDto(gadmin.get(0));
			return adto;
		}
		
			return null;
		
		
		
	}
	
	private Admin dtoToAdmin(AdminDto adminDto)
	{
		Admin admin=this.modelMapper.map(adminDto,Admin.class);
		return admin;
		
	}
	private AdminDto adminToDto (Admin admin)
	{
		AdminDto adminDto=this.modelMapper.map(admin, AdminDto.class);
		return adminDto;
	}

}
