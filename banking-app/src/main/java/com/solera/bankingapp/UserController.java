package com.solera.bankingapp;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity.BodyBuilder;
import com.solera.bankingapp.models.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class UserController {
	private DataManager dataM;
	public UserController () {
		
		dataM = new DataManager();
	}
	
	@GetMapping("/users/{id}")
	public String listOneUser (@PathVariable String id)
	{
		return dataM.getOne(id).toString();
	}
	@GetMapping("/users")
	public String listAllUsers ()
	{
		return dataM.getAll().toString();
	}
	@PostMapping("/users/create")
	public ResponseEntity<Object> createUser(@RequestBody User MyUser){
		User userCreated = dataM.saveOne(MyUser);
		URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userCreated.getUsername()).toUri();
		return ResponseEntity.created(location).build();
	}
	
	
}
