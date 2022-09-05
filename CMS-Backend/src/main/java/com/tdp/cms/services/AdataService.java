package com.tdp.cms.services;

import com.tdp.cms.payloads.AdataDto;
import com.tdp.cms.payloads.AdminRequest;

public interface AdataService {
	
	AdataDto addAdminDetails (AdminRequest adto,Integer adminId);
	AdataDto updateAdminDetails(AdataDto adto,Integer adminId);
	AdataDto getAdminDetails(Integer adminId);
}
