package com.tdp.cms.services.impl;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.stream.Collectors;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.tdp.cms.entities.Adata;
import com.tdp.cms.entities.Admin;
import com.tdp.cms.entities.Pdata;
import com.tdp.cms.entities.User;
import com.tdp.cms.exceptions.ResourceNotFoundExceptions;
import com.tdp.cms.payloads.DashResponse;
import com.tdp.cms.payloads.PdataDto;
import com.tdp.cms.payloads.UserDto;
import com.tdp.cms.repositories.AdataRepo;
import com.tdp.cms.repositories.AdminRepo;
import com.tdp.cms.repositories.PdataRepo;
import com.tdp.cms.repositories.UserRepo;
import com.tdp.cms.services.PdataService;
import com.tdp.cms.services.UserService;

@Service
public class PdataServiceImpl implements PdataService {

	@Autowired
	private ModelMapper modelMapper;
	@Autowired
	private PdataRepo pRepo;
	@Autowired
	private UserService userService;
	@Autowired
	private UserRepo userRepo;
	@Autowired
	private AdataRepo adataRepo;
	@Autowired
	private AdminRepo adminRepo;
	
	

	@Override
	public PdataDto addFamilyMember(PdataDto pDto,Integer userId) {
		Pdata pdata=this.dtoToPdata(pDto);
		UserDto userDto=this.userService.getUserById(userId);
		System.out.print(userDto.getName());
		User user=this.dtoToUser(userDto);
		pdata.setUser(user);
		PdataDto pdataDto=this.pdataToDto(this.pRepo.save(pdata));
		return pdataDto;
	}

	

	@Override
	public PdataDto getFamilyMember(Integer pid) {
		Pdata pdata=this.pRepo.findById(pid).orElseThrow(()->new ResourceNotFoundExceptions("Pdata","pid",pid));
		PdataDto pdataDto=this.pdataToDto(pdata);
		return pdataDto;
	}



	@Override
	public List<PdataDto> getAllFamilyMembers(Integer userid) {
		
		User user=this.userRepo.findById(userid).orElseThrow(()-> new ResourceNotFoundExceptions("User","userid",userid));
		List<Pdata> pdatas =this.pRepo.findByUser(user);
		List<PdataDto> pd=pdatas.stream().map((pdata)-> this.modelMapper.map(pdata,PdataDto.class)).collect(Collectors.toList())	;	
		return pd;
	}

	
	@Override
	public Integer getPid(Integer userid) {
		User user=this.userRepo.findById(userid).orElseThrow(()-> new ResourceNotFoundExceptions("User","userid",userid));
		List<Pdata> pdatas =this.pRepo.findByUser(user);
		List<PdataDto> pd=pdatas.stream().map((pdata)-> this.modelMapper.map(pdata,PdataDto.class)).collect(Collectors.toList());
		Integer pid=pd.get(0).getPid();
		return pid;
	}
	
	@Override
	public DashResponse getDashData() {
		List<Pdata> pds=this.pRepo.findByVaccinationStatus("2");
		List<PdataDto> pdto=pds.stream().map((pd)->this.modelMapper.map(pd,PdataDto.class)).collect(Collectors.toList());
		int countOfFully=pdto.size();
		List<Pdata> pdPosiv=this.pRepo.findBycurrentHealth("Positive");
		List<PdataDto> pdtoPosiv=pdPosiv.stream().map((pd)->this.modelMapper.map(pd,PdataDto.class)).collect(Collectors.toList());
		int countPosiv=pdtoPosiv.size();
		DashResponse dr = new DashResponse();
		int totalcount=(int) this.pRepo.count();
		System.out.print(totalcount);
		
		
		
		
		dr.setOxygen("12300");
		dr.setBed("147");
		dr.setTotal(totalcount+"");
		dr.setPositive(countPosiv+"");
		dr.setVaccinated(countOfFully+"");
		return dr;
	}
	
	
	
	

	@Override
	public PdataDto getUserData(Integer userid) {
		
		return null;
	}

	@Override
	public List<PdataDto> getPaitentInYourCity(Integer userid) {
		
		return null;
	}

	@Override
	public PdataDto addPaitent(PdataDto pDto) {
		Pdata pdata=this.dtoToPdata(pDto);
		PdataDto pdataDto=this.pdataToDto(this.pRepo.save(pdata));
		return pdataDto;
	}

	@Override
	public List<PdataDto> getAllPaitent() {
		List<Pdata> pds=this.pRepo.findAll();
		List<PdataDto> pdata=pds.stream().map((pd)-> this.modelMapper.map(pd,PdataDto.class)).collect(Collectors.toList());
		return pdata;
	}

	@Override
	public PdataDto getPaitent(Integer pid) {
		Pdata pdata=this.pRepo.findById(pid).orElseThrow(()->new ResourceNotFoundExceptions("Pdata","pid",pid));
		PdataDto pdataDto=this.pdataToDto(pdata);
		pdataDto.setUser(null);
		return pdataDto;
	}

	@Override
	public PdataDto updatePaitent(Integer pid,PdataDto pdto) {
		Pdata pdata=this.pRepo.findById(pid).orElseThrow(()->new ResourceNotFoundExceptions("Pdata","pid",pid));
		Pdata gotPdata=this.dtoToPdata(pdto);
		pdata.setAadharNo(gotPdata.getAadharNo());
		pdata.setAddress(gotPdata.getAddress());
		pdata.setName(gotPdata.getName());
		pdata.setVaccinationStatus(gotPdata.getVaccinationStatus());
		pdata.setCurrentHealth(gotPdata.getCurrentHealth());
		pdata.setCity(gotPdata.getCity());
		pdata.setPincode(gotPdata.getPincode());
		pdata.setCountry(gotPdata.getCountry());
		pdata.setGender(gotPdata.getGender());
		Pdata pd=this.pRepo.save(pdata);
		PdataDto pdato=this.pdataToDto(pd);
		return pdato;
	}
	
	
	@Override
	public PdataDto updatePaitentByUser(Integer pid,PdataDto pdto) {
		Pdata pdata=this.pRepo.findById(pid).orElseThrow(()->new ResourceNotFoundExceptions("Pdata","pid",pid));
		Pdata gotPdata=this.dtoToPdata(pdto);
		pdata.setAddress(gotPdata.getAddress());
		pdata.setCity(gotPdata.getCity());
		pdata.setPincode(gotPdata.getPincode());
		pdata.setCountry(gotPdata.getCountry());
		Pdata pd=this.pRepo.save(pdata);
		PdataDto pdato=this.pdataToDto(pd);
		return pdato;
	}
	
	
	@Override
	public PdataDto getCurrentHealthStatus(Integer pid) {
		
		return null;
	}

	private Pdata dtoToPdata(PdataDto  pdataDto)
	{
		Pdata pdata=this.modelMapper.map(pdataDto,Pdata.class);
		return pdata;
		
	}
	private PdataDto pdataToDto (Pdata pdata)
	{
		PdataDto pdataDto=this.modelMapper.map(pdata, PdataDto.class);
		return pdataDto;
	}
	private User dtoToUser(UserDto userDto)
	{
		User user=this.modelMapper.map(userDto,User.class);
		return user;
		
	}
	private UserDto userToDto (User user)
	{
		UserDto userDto=this.modelMapper.map(user, UserDto.class);
		return userDto;
	}



	@Override
	public DashResponse getAdminData(Integer userId) {
		List<Pdata> pds=this.pRepo.findByVaccinationStatus("2");
		List<PdataDto> pdto=pds.stream().map((pd)->this.modelMapper.map(pd,PdataDto.class)).collect(Collectors.toList());
		int countOfFully=pdto.size();
		List<Pdata> pdPosiv=this.pRepo.findBycurrentHealth("Positive");
		List<PdataDto> pdtoPosiv=pdPosiv.stream().map((pd)->this.modelMapper.map(pd,PdataDto.class)).collect(Collectors.toList());
		int countPosiv=pdtoPosiv.size();
		DashResponse dr = new DashResponse();
		int totalcount=(int) this.pRepo.count();
		for(int i=0;i<countPosiv;i++)
		System.out.println(pdtoPosiv.get(i).getName());
		
		
         
          Admin admin=this.adminRepo.findById(userId).orElseThrow(()->new ResourceNotFoundExceptions("Admin","Id",userId));
		List<Adata> adata=this.adataRepo.findByAdmin(admin);
		
		dr.setOxygen(adata.get(0).getOxy()+"");
		dr.setBed(adata.get(0).getBed()+"");
		dr.setTotal(totalcount+"");
		dr.setPositive(countPosiv+"");
		dr.setVaccinated(countOfFully+"");
		return dr;
		
	}



	@Override
	public HashMap getChartData() {
		
		List<Pdata> pd=this.pRepo.findAll();
		HashMap<String,Integer> chart=new HashMap<>();
		for(int i=0;i<pd.size();i++)
		{
			if(pd.get(i).getCurrentHealth().equals("Positive"))
			{
				
				chart.put(pd.get(i).getCity(),chart.getOrDefault(pd.get(i).getCity(),0)+1);
			}
				
			
		}
		
		return chart;
	}
	
	
	
	



	



	

}
