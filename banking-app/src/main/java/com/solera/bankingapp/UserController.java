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
		
		//JSONDeserializer<User> deserializer = new JSONDeserializer<User>();
		//System.out.println(deserializer.deserialize(myJson));
		//User myUser = deserializer.deserialize(myJson);
		HashMap<String,String> data = parseString(myJson);
		System.out.println(data);
		User myUser = new User(data);
		System.out.println(myUser.toString());
		
		User userCreated = dataM.saveOne(myUser);
		/*URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(userCreated.getUsername()).toUri();
		return ResponseEntity.created(location).build();*/
		return userCreated.toString();
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
