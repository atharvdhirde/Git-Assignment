package com.example.Assignment2.controller;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.Assignment2.entities.User;

@RestController
public class HomeController {

    User user = new User("Atharvd", "Atharv@123");

    @PostMapping("/login")
    @ResponseBody
    public String login(@RequestBody User user) {

        System.out.println(user);
        if (this.user.getUsername().equals(user.getUsername()) && this.user.getPassword().equals(user.getPassword())) {
            return "Valid User";
        }
        return "Invalid User";
    }
}
