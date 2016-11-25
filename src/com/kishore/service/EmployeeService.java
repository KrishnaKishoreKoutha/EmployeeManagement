package com.kishore.service;

import com.kishore.beans.Employee;

public interface EmployeeService {

	Employee getEmployeeById(long id);

	void updateEmployee(Employee employee);

}
