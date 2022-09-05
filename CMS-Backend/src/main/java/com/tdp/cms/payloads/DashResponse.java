package com.tdp.cms.payloads;

import lombok.Data;

@Data
public class DashResponse {
	
	
private String oxygen;
private String bed;
private String vaccinated;
private String positive;
private String total;
public String getOxygen() {
	return oxygen;
}
public void setOxygen(String oxygen) {
	this.oxygen = oxygen;
}
public String getBed() {
	return bed;
}
public void setBed(String bed) {
	this.bed = bed;
}
public String getVaccinated() {
	return vaccinated;
}
public void setVaccinated(String vaccinated) {
	this.vaccinated = vaccinated;
}
public String getPositive() {
	return positive;
}
public void setPositive(String positive) {
	this.positive = positive;
}
public String getTotal() {
	return total;
}
public void setTotal(String total) {
	this.total = total;
}
public DashResponse(String oxygen, String bed, String vaccinated, String positive, String total) {
	super();
	this.oxygen = oxygen;
	this.bed = bed;
	this.vaccinated = vaccinated;
	this.positive = positive;
	this.total = total;
}
public DashResponse() {
	super();
	// TODO Auto-generated constructor stub
}



}
