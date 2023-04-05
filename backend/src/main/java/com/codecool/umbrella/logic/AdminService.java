package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.User;
import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {

    @Autowired // remove
    private UserRepository userRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void removeUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        user.ifPresent(presentUser -> userRepository.delete(presentUser));
    }

}
