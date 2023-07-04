package com.solera.bankingapp.models;
import java.util.List;

public class BankAccount {
	private String nombre;
	private int id;
	private List<Transaction> transactions;
	public String getNombre() {
		return nombre;
	}
	public void setNombre(String nombre) {
		this.nombre = nombre;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public List<Transaction> getTransactions() {
		return transactions;
	}
	public void setTransactions(List<Transaction> transactions) {
		this.transactions = transactions;
	}
	public BankAccount(String nombre, int id, List<Transaction> transactions) {
		super();
		this.nombre = nombre;
		this.id = id;
		this.transactions = transactions;
	}
	
	
	
	@Override
	public String toString() {
		return "BankAccount nombre=" + nombre + ", id=" + id + ", transactions=" + transactions;
	}
	
}
