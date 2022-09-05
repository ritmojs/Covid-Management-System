package com.tdp.cms.services.impl;

import java.util.List;
import java.util.Optional;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdp.cms.entities.Adata;
import com.tdp.cms.entities.Admin;
import com.tdp.cms.entities.Hcode;
import com.tdp.cms.entities.Pdata;
import com.tdp.cms.entities.User;
import com.tdp.cms.exceptions.ResourceNotFoundExceptions;
import com.tdp.cms.payloads.AdataDto;
import com.tdp.cms.payloads.AdminDto;
import com.tdp.cms.payloads.AdminRequest;
import com.tdp.cms.payloads.PdataDto;
import com.tdp.cms.payloads.UserDto;
import com.tdp.cms.repositories.AdataRepo;
import com.tdp.cms.repositories.AdminRepo;
import com.tdp.cms.repositories.HcodeRepo;
import com.tdp.cms.services.AdataService;



@Service
public class AdataServiceImpl implements AdataService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private AdataRepo adataRepo;
	@Autowired
	private AdminRepo aRepo;
	@Autowired
	private HcodeRepo hRepo;
	
	@Override
	public AdataDto addAdminDetails(AdminRequest adto,Integer adminId) {
		Adata adata=new Adata();
		adata.setBed(adto.getBed());
		adata.setCity(adto.getCity());
		adata.setOxy(adto.getOxy());
		adata.setCountry(adto.getCountry());
		adata.setPincode(adto.getPincode());
		adata.setAddress(adto.getAddress());
		Admin admin=this.aRepo.findById(adminId).orElseThrow(()->new ResourceNotFoundExceptions("User","Id",adminId));
		adata.setAdmin(admin);
		List<Hcode> hc= this.hRepo.findByhcode(adto.getHcode());
		if(!hc.isEmpty())
			adata.setHcode(hc.get(0));
		Adata savedata=this.adataRepo.save(adata);
		AdataDto adataDto=this.adataToDto(savedata);
		return adataDto;
		
	}

	@Override
	public AdataDto updateAdminDetails(AdataDto adto,Integer adminId) {
		Adata adata=this.dtoToAdata(adto);
		List<Adata> gdata=this.adataRepo.findByAdminId(adminId);
		Adata sdata=gdata.get(0);
		sdata.setOxy(adata.getOxy());
		sdata.setBed(adata.getBed());
		Adata sgdata=this.adataRepo.save(sdata);
		AdataDto dto=this.adataToDto(sgdata);
		
		return dto;
	}
	private Adata dtoToAdata(AdataDto  adataDto)
	{
		Adata adata=this.modelMapper.map(adataDto,Adata.class);
		return adata;
		
	}
	private AdataDto adataToDto (Adata adata)
	{
		AdataDto adataDto=this.modelMapper.map(adata, AdataDto.class);
		return adataDto;
	}

	@Override
	public AdataDto getAdminDetails(Integer adminId) {
		List <Adata> adata= this.adataRepo.findByAdminId(adminId);
		Adata ad=adata.get(0);
		AdataDto ato=this.adataToDto(ad);
		return ato;
	}

}
