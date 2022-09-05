package com.tdp.cms.payloads;

public class ChartData {
	
	private String city;
	private String count;
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public String getCount() {
		return count;
	}
	public void setCount(String count) {
		this.count = count;
	}
	public ChartData(String city, String count) {
		super();
		this.city = city;
		this.count = count;
	}
	public ChartData() {
		super();
		// TODO Auto-generated constructor stub
	}
	

}
