package com.eventease.DTO;




public class SigninResponse {
	private String jwt;
	private String role;
	private Long Id;
	
	
	
	
	public Long getId() {
		return Id;
	}



	public void setId(Long id) {
		Id = id;
	}



	public SigninResponse(String jwt, String role, Long Id) {
		this.jwt=jwt;
		this.role=role;
		this.Id=Id;
	}




    
	

	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	public String getJwt() {
		return jwt;
	}


	public void setJwt(String jwt) {
		this.jwt = jwt;
	}


	
	
	
	
}
