package com.tdp.cms.payloads;

import com.tdp.cms.entities.Admin;

public class JwtAdminResponse {
	
	
	private String token;
	private Admin admin;
	public String getToken() {
		return token;
	}
	public void setToken(String token) {
		this.token = token;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public JwtAdminResponse(String token, Admin admin) {
		super();
		this.token = token;
		this.admin = admin;
	}
	public JwtAdminResponse() {
		super();
		// TODO Auto-generated constructor stub
	}

}
