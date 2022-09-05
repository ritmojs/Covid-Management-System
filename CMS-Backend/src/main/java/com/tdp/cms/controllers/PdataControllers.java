package com.tdp.cms.controllers;

import java.util.HashMap;
import java.util.List;

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

import com.tdp.cms.payloads.DashResponse;
import com.tdp.cms.payloads.PdataDto;
import com.tdp.cms.services.PdataService;

@RestController
@RequestMapping("/api/{userId}/dashboard")
public class PdataControllers {
	@Autowired
	private PdataService pdataService;
	@PostMapping("/add/members")
	public ResponseEntity<PdataDto> addFamilyMember(@Valid @RequestBody PdataDto pdataDto, @PathVariable Integer userId)
	{
	
		PdataDto pDto=this.pdataService.addFamilyMember(pdataDto,userId);
		
		return ResponseEntity.ok(pDto);
	}
	
	@PostMapping("/create")
	public ResponseEntity<PdataDto> addcreateMember(@Valid @RequestBody PdataDto pdataDto, @PathVariable Integer userId)
	{
	
		PdataDto pDto=this.pdataService.addFamilyMember(pdataDto,userId);
		
		return ResponseEntity.ok(pDto);
	}
	@GetMapping("/getAllmembers")
	public ResponseEntity<List<PdataDto>> getAllmemebrs( @PathVariable Integer userId )
	{
		List<PdataDto> pDto=this.pdataService.getAllFamilyMembers(userId);
		return ResponseEntity.ok(pDto);
	}
	@GetMapping("/getMember/{pid}")
	public ResponseEntity<PdataDto>getMember(@PathVariable Integer pid)
	{
		PdataDto pdto=this.pdataService.getFamilyMember(pid);
		return ResponseEntity.ok(pdto);
	}
	
	@GetMapping("/getpid")
	public ResponseEntity<Integer> getpid( @PathVariable Integer userId )
	{
		Integer pid=this.pdataService.getPid(userId);
		return ResponseEntity.ok(pid);
	}
	@GetMapping("/dashdata")
	public ResponseEntity<DashResponse> getDashdata()
	{
		DashResponse pd=this.pdataService.getDashData();
		return ResponseEntity.ok(pd);
	}
	@PutMapping("/update")
	public ResponseEntity<PdataDto>updatePaitent(@Valid @PathVariable Integer userId, @RequestBody PdataDto pdto)
	{
		PdataDto pdato=this.pdataService.updatePaitentByUser(userId,pdto);
		return ResponseEntity.ok(pdato);
	}
	
	
	

}
