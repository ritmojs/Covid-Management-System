package com.tdp.cms.payloads;

import javax.validation.constraints.NotEmpty;
import com.tdp.cms.entities.Hcode;

public class AdminRequest {

	
	@NotEmpty
	private Integer bed;
	@NotEmpty
	private Integer Oxy;
	@NotEmpty
	private String hcode;
	@NotEmpty
	private String city;
	@NotEmpty
	private String country;
	@NotEmpty
	private String pincode;
	private @NotEmpty String address;
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
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
	public String getHcode() {
		return hcode;
	}
	public void setHcode(String hcode) {
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
	public AdminRequest() {
		super();
		// TODO Auto-generated constructor stub
	}
	public AdminRequest(@NotEmpty Integer bed, @NotEmpty Integer oxy, @NotEmpty String hcode, @NotEmpty String city,
			@NotEmpty String country, @NotEmpty String pincode,@NotEmpty String address) {
		super();
		this.bed = bed;
		Oxy = oxy;
		this.hcode = hcode;
		this.city = city;
		this.country = country;
		this.pincode = pincode;
		this.address=address;
	}
	
	
	
}
