package com.solera.bankingapp;

import java.util.ArrayList;
import java.util.List;

import com.solera.bankingapp.models.User;

public class DataManager {
	
	private static List<User> users = new ArrayList<User>();
	
	static {
		users.add(new User("Becario", "Soleriano", "solera@solera.com", "bootcamp2", 10000));
		users.add(new User("Adrian", "Botello", "adrianvaso", "1234", 200));
		users.add(new User("Felipe", "Giro", "girod360", "4321", 36000));
		
	}

}
