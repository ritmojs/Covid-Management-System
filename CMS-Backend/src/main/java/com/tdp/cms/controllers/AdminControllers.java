package com.tdp.cms.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdp.cms.entities.Adata;
import com.tdp.cms.payloads.AdataDto;
import com.tdp.cms.payloads.AdminAuthRequest;
import com.tdp.cms.payloads.AdminDto;
import com.tdp.cms.payloads.AdminRequest;
import com.tdp.cms.payloads.DashResponse;
import com.tdp.cms.payloads.PdataDto;
import com.tdp.cms.services.AdataService;
import com.tdp.cms.services.AdminService;
import com.tdp.cms.services.PdataService;

@RestController
@RequestMapping("/api/admin")
public class AdminControllers {

	@Autowired
	private AdminService adminService;
	@Autowired
	private PdataService pdataService;
	@Autowired
	private AdataService aDataService;
	@PostMapping("/signup")
	public ResponseEntity<?> signUpAdmin(@Valid @RequestBody AdminDto adminDto)
	{
		AdminDto ad=this.adminService.signUpAdmin(adminDto);
		if(ad==null)
		{
			HashMap <String,String> msg=new HashMap<>();
			msg.put("error","Hospital Code Not Found Please Enter Correct Code");
			return new ResponseEntity<>(msg,HttpStatus.BAD_REQUEST);
		}
			
		return new ResponseEntity<>(ad,HttpStatus.CREATED);
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> signInAdmin(@Valid @RequestBody AdminAuthRequest adminDto)
	{
		
		AdminDto ad=this.adminService.signInAdmin(adminDto);
		if(ad==null)
		{
			Map<String,String> m=new HashMap<>();
			m.put("error", "Either Password or Email is incorrect");
			return new ResponseEntity<>(m,HttpStatus.BAD_REQUEST);
		}
		
			
		return new ResponseEntity<>(ad,HttpStatus.OK);
	}
	
	
	@PostMapping("/addMember")
	public ResponseEntity<PdataDto> addMember(@Valid @RequestBody PdataDto pdataDto)
	{
		PdataDto pDto=this.pdataService.addPaitent(pdataDto);
		
		return ResponseEntity.ok(pDto);
	}
	
	@GetMapping("/getAllmembers")
	public ResponseEntity<List<PdataDto>> getAllmemebrs(  )
	{
		List<PdataDto> pDto=this.pdataService.getAllPaitent();
		return ResponseEntity.ok(pDto);
	}
	
	@GetMapping("/dashdata/{userId}")
	public ResponseEntity<DashResponse> getDashdata(@PathVariable Integer userId )
	{
		DashResponse pd=this.pdataService.getAdminData(userId);
		return ResponseEntity.ok(pd);
	}
	
	@PostMapping("/adddetails/{userId}")
	public ResponseEntity<?> addDetails(@Valid @PathVariable Integer userId ,@RequestBody AdminRequest adata)
	{
		AdataDto adataDto=this.aDataService.addAdminDetails(adata,userId);
		if(adataDto.getHcode()==null)
		{
			HashMap<String,String> error=new HashMap<>();
			error.put("error", "Hcode Not Found");
			return new  ResponseEntity<>(error,HttpStatus.BAD_REQUEST);
		}
		return  ResponseEntity.ok(adataDto);
		
	}
	@GetMapping("/getdetails/{userId}")
	public ResponseEntity<AdataDto> getDetails(@PathVariable Integer userId)
	{
		AdataDto adataDto=this.aDataService.getAdminDetails(userId);
		return ResponseEntity.ok(adataDto);
	}
	@GetMapping("/getpaitent/{pid}")
	public ResponseEntity<PdataDto>getMember(@PathVariable Integer pid)
	{
		PdataDto pdto=this.pdataService.getFamilyMember(pid);
		return ResponseEntity.ok(pdto);
	}
	
	@PutMapping("/update/{pid}")
	public ResponseEntity<PdataDto>updatePaitent(@Valid @PathVariable Integer pid, @RequestBody PdataDto pdto)
	{
		PdataDto pdato=this.pdataService.updatePaitent(pid,pdto);
		return ResponseEntity.ok(pdato);
	}
	
	@PutMapping("/updatedetails/{adminId}")
	public ResponseEntity<AdataDto>updateData(@PathVariable Integer adminId,@RequestBody AdataDto adto)
	{
		AdataDto ad=this.aDataService.updateAdminDetails(adto,adminId);
		return ResponseEntity.ok(ad);
		
	}
	
	@GetMapping("/getchartdata")
	public ResponseEntity<?> getChart()
	{
		HashMap<String,Integer> chart=new HashMap<>();
		chart=this.pdataService.getChartData();
		return ResponseEntity.ok(chart);
	}
	
	
	
	
}
