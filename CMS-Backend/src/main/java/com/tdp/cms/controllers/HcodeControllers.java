package com.tdp.cms.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.tdp.cms.entities.Hcode;
import com.tdp.cms.services.HcodeService;



@RestController
@RequestMapping("/hcode")
public class HcodeControllers {
	
	@Autowired
	private HcodeService hcodeService;
	
	@GetMapping("/get/{hcode}")
	public ResponseEntity<List<Hcode>> getHcode(@PathVariable String hcode)
	{
		List <Hcode> hcode_data=this.hcodeService.getHcode(hcode);
		return ResponseEntity.ok(hcode_data);
	}
	
    @GetMapping("/get")
	public ResponseEntity<List<Hcode>> getAllHcode()
	{
		List<Hcode> hcode_data=this.hcodeService.getAllHcode();
		return new ResponseEntity<>(hcode_data,HttpStatus.OK);
	}
    @PostMapping("/add")
    public ResponseEntity<Hcode> addHcode(@RequestBody Hcode hcode)
    {
    	Hcode g_hcode=this.hcodeService.addHcode(hcode);
    	return new ResponseEntity<>(g_hcode,HttpStatus.CREATED);
    }

}