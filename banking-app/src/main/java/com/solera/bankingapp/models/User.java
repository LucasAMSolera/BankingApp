package com.solera.bankingapp.models;
import java.util.List;

public class User {
	private String firstName;
	private String lastName;
	private String username;
	private String password;
	private int balance;
	private List<BankAccount> banks;
	
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public int getBalance() {
		return balance;
	}
	public void setBalance(int balance) {
		this.balance = balance;
	}
	public List<BankAccount> getBanks() {
		return banks;
	}
	public void setBanks(List<BankAccount> banks) {
		this.banks = banks;
	}
	
	
	public User(String firstName, String lastName, String username, String password, int balance,
			List<BankAccount> banks) {
		super();
		this.firstName = firstName;
		this.lastName = lastName;
		this.username = username;
		this.password = password;
		this.balance = balance;
		this.banks = banks;
	}
	@Override
	public String toString() {
		return "User firstName=" + firstName + ", lastName=" + lastName + ", username=" + username + ", password="
				+ password + ", balance=" + balance + ", banks=" + banks;
	}
	
}
