package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.User;
import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

}
