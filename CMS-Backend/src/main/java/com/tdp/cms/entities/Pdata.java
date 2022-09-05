package com.tdp.cms.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table (name="Pdata",uniqueConstraints= {@UniqueConstraint(columnNames= {"aadharNo"})})

public class Pdata {
	
	
	
	@Id
	@Column(name="pid")
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer pid;
	private String aadharNo;
	private String name;
	private String gender;
	private String vaccinationStatus;
	private String city;
	private String country;
	private String address;
	private String pincode;
	private String currentHealth;
	@ManyToOne
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
	public Pdata(Integer pid, String aadharNo, String name, String gender, String vaccinationStatus, String city,
			String country, String address, String pincode, String currentHealth, User user) {
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
	public Pdata() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
	
	
	

}
