package com.tdp.cms.services;

import java.util.HashMap;
import java.util.List;

import com.tdp.cms.entities.Pdata;
import com.tdp.cms.payloads.DashResponse;
import com.tdp.cms.payloads.PdataDto;

public interface PdataService {
	
	//For User Services
	
	//To add Family Members
	PdataDto addFamilyMember (PdataDto pDto,Integer userId);
	//TODO
	// To get Family member by id
	PdataDto getFamilyMember (Integer pid);
	//To get List of All Members
	List<PdataDto> getAllFamilyMembers (Integer userid);
	//Done in UserController for profile tab
	PdataDto getUserData (Integer userid);
	//TODO
	List<PdataDto> getPaitentInYourCity(Integer userid);
	PdataDto getCurrentHealthStatus(Integer pid);
	
	Integer getPid(Integer userid);
	
	DashResponse getDashData();
	DashResponse getAdminData(Integer userId);
	PdataDto updatePaitentByUser(Integer pid,PdataDto dto);
	HashMap getChartData();
	
	
	//ADMIN
	//TODO add Patient to DB By ADMIN
	PdataDto addPaitent (PdataDto pDto);
	//TODO To get all COVID patient
	List<PdataDto> getAllPaitent ();
	//TODO getPaitent Details
	PdataDto getPaitent (Integer pid);
	//TODO updatePaitent Data
	PdataDto updatePaitent (Integer pid , PdataDto pdto);
	
	
	
	

}
