package com.springrest.Assignment07.dao;

import com.springrest.Assignment07.entities.Order;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepo extends MongoRepository<Order, Integer> {

    public Order findById(int id);

    public Order findByName(String name);
