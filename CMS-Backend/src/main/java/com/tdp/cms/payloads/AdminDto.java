package com.tdp.cms.payloads;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

public class AdminDto {
	private Integer id;
	@NotEmpty
	private String Hcode;
	@NotEmpty
	@Email
	private String email;
	@NotEmpty
	@Size(min=8,max=14)
	private String password;
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getHcode() {
		return Hcode;
	}
	public void setHcode(String hcode) {
		Hcode = hcode;
	}
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
	public AdminDto(Integer id, @NotEmpty String hcode, @NotEmpty @Email String email,
			@NotEmpty @Size(min = 8) String password) {
		super();
		this.id = id;
		Hcode = hcode;
		this.email = email;
		this.password = password;
	}
	public AdminDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
