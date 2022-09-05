package com.tdp.cms.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotEmpty;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
@Table(name="Admin_Data")
public class Adata {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Integer id;
	
	private Integer bed;
	
	private Integer Oxy;
	private String city;
	private String country;
	private String pincode;
	@OneToOne
	private Hcode hcode;
	@OneToOne
	private Admin admin;
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
	public Hcode getHcode() {
		return hcode;
	}
	public void setHcode(Hcode hcode) {
		this.hcode = hcode;
	}
	public Admin getAdmin() {
		return admin;
	}
	public void setAdmin(Admin admin) {
		this.admin = admin;
	}
	public Adata(Integer id, Integer bed, Integer oxy, String city, String country, String pincode, Hcode hcode,
			Admin admin,String address) {
		super();
		this.id = id;
		this.bed = bed;
		Oxy = oxy;
		this.city = city;
		this.country = country;
		this.pincode = pincode;
		this.hcode = hcode;
		this.admin = admin;
		this.address=address;
	}
	public Adata() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
