package com.example5.com.example.assignment5.dao;

import com.example5.com.example.assignment5.entities.Employee;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepo extends JpaRepository<Employee, Integer> {
    public Employee findById(int id);
}
