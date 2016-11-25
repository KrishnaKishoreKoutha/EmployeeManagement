package com.kishore.service;

import javax.annotation.PostConstruct;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kishore.beans.Employee;
import com.kishore.dao.EmployeeDao;

@Service("employeeService")
public class EmployeeServiceImpl implements EmployeeService {
	
	static Logger log = Logger.getLogger(EmployeeServiceImpl.class.getName());
	
	@Autowired
	private EmployeeDao employeeDao;
	
	@PostConstruct
	public void seedEmployees(){
		log.debug("Deleting existing employees...");
		employeeDao.deleteAll();
		log.debug("Seeding employees data...");
		employeeDao.save(new Employee(1, "Mr", "Kishore", "R&D"));
		employeeDao.save(new Employee(2, "Mrs", "Harika", "Finance"));
		employeeDao.save(new Employee(3, "Ms", "Madhurima", "Sales"));
		employeeDao.save(new Employee(4, "Mr", "Chiranjeevi", "R&D"));
		employeeDao.save(new Employee(5, "Mr", "Sowmithri", "Marketing"));
		employeeDao.save(new Employee(6, "Mrs", "Vasantha", "Marketing"));
		employeeDao.save(new Employee(7, "Mr", "Krishna", "Production"));
		employeeDao.save(new Employee(8, "Mr", "Ajay", "HR"));
		employeeDao.save(new Employee(9, "Mr", "Sriram", "Sales"));
		employeeDao.save(new Employee(10, "Mr", "Deepak", "HR"));
		
		for(Employee e: employeeDao.findAll()){
			log.debug(e);
		}
	}

	@Override
	public Employee getEmployeeById(long id) {
		Employee employee = employeeDao.findEmployeeById(id);
		return employee;
	}

	@Override
	public void updateEmployee(Employee employee) {
		employeeDao.save(employee);
	}
	
	

}
