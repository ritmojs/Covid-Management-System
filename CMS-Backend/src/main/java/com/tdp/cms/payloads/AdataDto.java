package com.tdp.cms.payloads;
import javax.validation.constraints.NotEmpty;

import com.tdp.cms.entities.Admin;
import com.tdp.cms.entities.Hcode;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter

public class AdataDto {
	
	private Integer id;
	
	private Integer bed;
	
	private Integer Oxy;
	private Hcode hcode;
	@NotEmpty
	private String city;
	@NotEmpty
	private String country;
	@NotEmpty
	private String pincode;
	private Admin admin;
	@NotEmpty
	private String address;
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public Integer getBed() {
		return bed;
	}
	public void setBed(Integer bed) {
		this.bed = bed;
	}
	public Integer getOxy() {
		return Oxy;
	}
	public void setOxy(Integer oxy) {
		Oxy = oxy;
	}
	public Hcode getHcode() {
		return hcode;
	}
	public void setHcode(Hcode hcode) {
		this.hcode = hcode;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCountry() {
		return country;
	}
	public void setCountry(String country) {
		this.country = country;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public AdataDto(Integer id, @NotEmpty Integer bed, @NotEmpty Integer oxy, Hcode hcode, @NotEmpty String city,
			@NotEmpty String country, @NotEmpty String pincode, Admin admin,@NotEmpty String address) {
		super();
		this.id = id;
		this.bed = bed;
		Oxy = oxy;
		this.hcode = hcode;
		this.city = city;
		this.country = country;
		this.pincode = pincode;
		this.admin = admin;
		this.address=address;
	}
	public AdataDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
