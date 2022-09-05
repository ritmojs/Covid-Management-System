package com.tdp.cms.services;

import com.tdp.cms.payloads.AdminAuthRequest;
import com.tdp.cms.payloads.AdminDto;

public interface AdminService {
	
	AdminDto signUpAdmin(AdminDto adminDto);
	AdminDto signInAdmin(AdminAuthRequest adminDto);

}
