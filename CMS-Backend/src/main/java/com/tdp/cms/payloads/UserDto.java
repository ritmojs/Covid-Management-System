package com.tdp.cms.payloads;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter


public class UserDto {
	
	private int id;
	@NotEmpty
	@Size(min = 4, message="Username Must be Min of 4 characters")
	private String name;
	@Email (message="Email address is not valid!!")
	private String email;
	@NotEmpty
	@Size(min= 8  , message="password must be min of 8 characters")
	private String password;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
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
	public UserDto(int id, @NotEmpty @Size(min = 4, message = "Username Must be Min of 4 characters") String name,
			@Email(message = "Email address is not valid!!") String email,
			@NotEmpty @Size(min = 8, message = "password must be min of 8 characters") String password) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
	}
	public UserDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
