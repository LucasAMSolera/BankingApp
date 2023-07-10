package com.solera.bankingapp;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity.BodyBuilder;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.solera.bankingapp.models.User;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;
import java.util.HashMap;

@RestController
@CrossOrigin
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
	public String/*ResponseEntity<Object>*/ createUser(@RequestBody String myJson){
		System.out.println("Post Called");
		System.out.println(myJson);
		
		HashMap<String,String> data = parseString(myJson);
		System.out.println(data);
		User myUser = new User(data);
		System.out.println(myUser.toString());
		
		User userInList = dataM.getOne(myUser.getUsername());
		User userCreated = null;
		Boolean exists = false;
		Boolean passwordCorrect = false;
		
		if(userInList==null){
			System.out.println("User created");
			userCreated = dataM.saveOne(myUser);
			exists = false;
		}
		else {
			System.out.println("User loaded");
			exists = true;
			
			System.out.println("User loade Password = "+ userInList.getPassword()+", and new user password = "+ myUser.getPassword());
			if(userInList.getPassword().equals(myUser.getPassword())) {
				userCreated = userInList;	
				passwordCorrect = true;
			}
			else {
				passwordCorrect = false;
			}
		}
		
		System.out.println(dataM.getAll().toString());
		
		if(!exists || (exists && passwordCorrect)) {
			return "{\"user\":"+userCreated.toString()+", \"status\":"+true+"}";
		}
		else {
			return "{\"user\":"+null+", \"status\":"+false+"}";
		}
	}
	
	public HashMap<String,String> parseString(String data){
		data = data.substring(1, data.length()-1);           //remove curly brackets
		data = data.replace("\"", "");
		String[] keyValuePairs = data.split(",");              //split the string to creat key-value pairs
		HashMap<String,String> map = new HashMap<>();               

		for(String pair : keyValuePairs)                        //iterate over the pairs
		{
		    String[] entry = pair.split(":");
		    map.put(entry[0].trim(), entry[1].trim());          //add them to the hashmap and trim whitespaces
		}
		return map;
	}
}
