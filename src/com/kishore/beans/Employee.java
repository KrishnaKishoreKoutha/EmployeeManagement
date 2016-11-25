package com.kishore.beans;

public class Employee {
	
	private long id;
	private String title;
	private String name;
	private String department;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDepartment() {
		return department;
	}
	public void setDepartment(String department) {
		this.department = department;
	}
	
	public Employee(){}
	
	public Employee(long id, String title, String name, String department) {
		super();
		this.id = id;
		this.title = title;
		this.name = name;
		this.department = department;
	}
	
	@Override
	public String toString() {
		return "Employee [id=" + id + ", title=" + title + ", name=" + name
				+ ", department=" + department + "]";
	}
	
}
