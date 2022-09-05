package com.tdp.cms.payloads;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

public class AdminAuthRequest {

	@NotEmpty
	@Email
	private String email;
	@Size(min=8 ,max=14)
	private String password;
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public AdminAuthRequest(@NotEmpty @Email String email, @Size(min = 8, max = 14) String password) {
		super();
		this.email = email;
		this.password = password;
	}
	public AdminAuthRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	
}
