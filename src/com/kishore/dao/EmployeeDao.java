package com.kishore.dao;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.kishore.beans.Employee;

public interface EmployeeDao extends MongoRepository<Employee, String> {

    public Employee findEmployeeById(long id);

}
