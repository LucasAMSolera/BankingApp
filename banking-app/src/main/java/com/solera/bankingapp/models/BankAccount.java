package com.solera.bankingapp.models;
import java.util.ArrayList;
import java.util.List;
import java.util.Random;

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
	public BankAccount(String nombre, List<Transaction> transactions) {
		super();
		this.nombre = nombre;
		this.id = RandomId();
		this.transactions = transactions;
	}
	public BankAccount(String nombre, String emitter) {
		super();
		this.nombre = nombre;
		this.id = RandomId();
		this.transactions = FillTransactions(emitter);
	}
	
	private List<Transaction> FillTransactions(String emitter){
		List<Transaction> transactions = new ArrayList<Transaction>();
		transactions.add(new Transaction(emitter, "jonathan", this.id, 12345678, -200));
		return transactions;
	}
	
	private int RandomId() {
		Random rnd = new Random();
		return rnd.nextInt(99999999-10000000+1)+10000000;
	}
	@Override
	public String toString() {
		return "BankAccount nombre=" + nombre + ", id=" + id + ", transactions=" + transactions;
	}
	
}
