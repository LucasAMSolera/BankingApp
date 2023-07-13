package com.solera.bankingapp.models;

import java.util.Random;

public class Transaction {
	private String emitter;
	private String receptor;
	private int origin;
	private int destination;
	private int id;
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	private int value;
	
	public String getEmitter() {
		return emitter;
	}
	public void setEmitter(String emitter) {
		this.emitter = emitter;
	}
	public String getReceptor() {
		return receptor;
	}
	public void setReceptor(String receptor) {
		this.receptor = receptor;
	}
	public int getOrigin() {
		return origin;
	}
	public void setOrigin(int origin) {
		this.origin = origin;
	}
	public int getDestination() {
		return destination;
	}
	public void setDestination(int destination) {
		this.destination = destination;
	}
	public int getValue() {
		return value;
	}
	public void setValue(int value) {
		this.value = value;
	}
	
	public Transaction(String emitter, String receptor, int origin, int destination, int value) {
		super();
		this.emitter = emitter;
		this.receptor = receptor;
		this.origin = origin;
		this.destination = destination;
		this.id = RandomId();
		this.value = value;
	}
	
	private int RandomId() {
		Random rnd = new Random();
		return rnd.nextInt(99999999-10000000+1)+10000000;
	}
	@Override
	public String toString() {
		return "{\"emitter\":\"" + emitter + "\", \"receptor\":\"" + receptor + "\", \"origin\":" + origin + ", \"destination\":"
				+ destination +", \"id\":" +id+ ", \"value\":" + value+"}";
	}
	
	
}
