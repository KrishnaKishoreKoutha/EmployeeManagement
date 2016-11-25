package com.kishore.controller;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.kishore.beans.Employee;
import com.kishore.service.EmployeeService;

@RestController
public class EmployeeController {
	
	static Logger log = Logger.getLogger(EmployeeController.class.getName());
	
	@Autowired
	EmployeeService employeeService;
	
	
	//Getting employee by ID - Start
	@RequestMapping(value="/employee/{id}", method = RequestMethod.GET, produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Employee> getEmployeeById(@PathVariable("id") long id) {
		log.debug("Getting employee by ID: "+ id);
		ResponseEntity<Employee> responseEntity = null;
		Employee employee = employeeService.getEmployeeById(id);
		
		if(employee==null){
			log.error("Employee with ID-"+ id +" is not found.");
			responseEntity = new ResponseEntity<Employee>(HttpStatus.NOT_FOUND);
		} else{
			log.debug("Employee ID: "+ id +" is found. "+ employee);
			responseEntity = new ResponseEntity<Employee>(employee, HttpStatus.OK);
		}
		return responseEntity;
	}
	//Getting employee by ID - end
	
	//Updating employee - start
	@RequestMapping(value = "/employee/{id}", method = RequestMethod.PUT)
    public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long id, @RequestBody Employee employee) {
        log.debug("Updating Employee " + id);
        employeeService.updateEmployee(employee);
        return new ResponseEntity<Employee>(employee, HttpStatus.OK);
    }
	//Updating employee - end

}
