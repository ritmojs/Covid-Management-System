package com.tdp.cms.payloads;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;

import com.tdp.cms.entities.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter

public class PdataDto {
	
	
	private Integer pid;
	@NotEmpty
	//@Column (Length=12)
	@Size(min=12,max=12)
	private String aadharNo;
	@NotEmpty
	private String name;
	private String gender;
	private String vaccinationStatus;
	@NotEmpty(message="City must not be empty")
	private String city;
	@NotEmpty(message="Country must not be empty")
	private String country;

	private String address;
	@NotEmpty(message="Pincode must not be empty")
	@Size(min=6,max=6)
	private String pincode;
	private String currentHealth;
	private User user;
	public Integer getPid() {
		return pid;
	}
	public void setPid(Integer pid) {
		this.pid = pid;
	}
	public String getAadharNo() {
		return aadharNo;
	}
	public void setAadharNo(String aadharNo) {
		this.aadharNo = aadharNo;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	public String getVaccinationStatus() {
		return vaccinationStatus;
	}
	public void setVaccinationStatus(String vaccinationStatus) {
		this.vaccinationStatus = vaccinationStatus;
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
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	public String getPincode() {
		return pincode;
	}
	public void setPincode(String pincode) {
		this.pincode = pincode;
	}
	public String getCurrentHealth() {
		return currentHealth;
	}
	public void setCurrentHealth(String currentHealth) {
		this.currentHealth = currentHealth;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public PdataDto(Integer pid, @NotEmpty @Size(min = 12, max = 12) String aadharNo, String name, String gender,
			String vaccinationStatus, @NotEmpty(message = "City must not be empty") String city,
			@NotEmpty(message = "Country must not be empty") String country, String address,
			@NotEmpty(message = "Pincode must not be empty") @Size(min = 6, max = 6) String pincode,
			String currentHealth, User user) {
		super();
		this.pid = pid;
		this.aadharNo = aadharNo;
		this.name = name;
		this.gender = gender;
		this.vaccinationStatus = vaccinationStatus;
		this.city = city;
		this.country = country;
		this.address = address;
		this.pincode = pincode;
		this.currentHealth = currentHealth;
		this.user = user;
	}
	public PdataDto() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
