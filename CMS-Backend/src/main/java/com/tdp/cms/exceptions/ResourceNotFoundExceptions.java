package com.tdp.cms.exceptions;

import lombok.Getter;
import lombok.Setter;

@SuppressWarnings("serial")
@Getter
@Setter
public class ResourceNotFoundExceptions extends RuntimeException{

	String resourceName;
	String fieldName;
	long fieldValue;
	String message;
	public ResourceNotFoundExceptions(String resourceName, String fieldName, long fieldValue) {
		super(String.format("%s not found with %s: %s", resourceName,fieldName,fieldValue));
		this.resourceName = resourceName;
		this.fieldName = fieldName;
		this.fieldValue = fieldValue;
	}
	public ResourceNotFoundExceptions(String message) {
		super();
		this.message=message;
	}
	

}
