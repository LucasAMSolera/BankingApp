package com.solera.bankingapp.models;

public class Transaction {
	private String emitter;
	private String receptor;
	private int origin;
	private int destination;
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
		this.value = value;
	}
	@Override
	public String toString() {
		return "{\"emitter\":\"" + emitter + "\", \"receptor\":\"" + receptor + "\", \"origin\":" + origin + ", \"destination\":"
				+ destination + ", \"value\":" + value+"}";
	}
	
	
}
