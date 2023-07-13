package com.solera.bankingapp;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import com.solera.bankingapp.models.User;

public class DataManager {
	
	private static List<User> users = new ArrayList<User>();
	
	static {
		users.add(new User("Becario", "Soleriano", "solera@solera.com", "bootcamp2", 10000));
		users.add(new User("Adrian", "Botello", "adrianvaso", "1234", 200));
		users.add(new User("Felipe", "Giro", "girod360", "4321", 36000));
	}
	
	public List<User> getAll(){
		return users;
	}
	
	public User getOne(String id){
		Predicate<? super User> predicate = user -> user.getUsername().equals(id);
		return users.stream().filter(predicate).findFirst().orElse(null);
	}
	
	public User updateOne(String id, String name, String surname, String pass, String newPass) {
		Predicate<? super User> predicate = user -> user.getUsername().equals(id);
		User theUser = users.stream().filter(predicate).findFirst().orElse(null);
		System.out.println(theUser);
		if(!theUser.getPassword().equals(pass)) {
			return null;
		}
		if(theUser != null) {
			int position = users.indexOf(theUser);
			theUser.setFirstName(name);
			theUser.setLastName(surname);
			if(!newPass.equals("")) {
				theUser.setPassword(newPass);
			}
			users.set(position, theUser);
		}
		return theUser;
	}
	
	public User saveOne(User myUser) {
		users.add(myUser);
		return myUser;
	}
	
	public void deleteOne(String id) {
		Predicate<? super User> predicate = user -> user.getUsername().equals(id);
		users.removeIf(predicate);
	}
}
