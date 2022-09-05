package com.tdp.cms.services;

import java.util.List;

import com.tdp.cms.entities.Hcode;

public interface HcodeService {
	
	Hcode addHcode(Hcode hcode);
	List<Hcode> getHcode(String hcode);
	List<Hcode> getAllHcode();

}
