package com.tdp.cms.services.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdp.cms.entities.Hcode;
import com.tdp.cms.repositories.HcodeRepo;
import com.tdp.cms.services.HcodeService;
@Service
public class HcodeServiceImpl implements HcodeService {

	@Autowired
	private HcodeRepo hcodeRepo;
	@Override
	public Hcode addHcode(Hcode hcode) {
		Hcode g_hcode=this.hcodeRepo.save(hcode);
	
		return g_hcode;
	}

	@Override
	public List<Hcode> getAllHcode() {
		List<Hcode> gt_hcode=this.hcodeRepo.findAll();
		return gt_hcode;
	}

	@Override
	public List<Hcode> getHcode(String hcode) {
		List<Hcode> got_hcode=this.hcodeRepo.findByhcode(hcode);
		return got_hcode;
	}

	

}
