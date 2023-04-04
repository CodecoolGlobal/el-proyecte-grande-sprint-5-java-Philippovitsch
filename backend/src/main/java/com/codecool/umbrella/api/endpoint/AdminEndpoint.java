package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.AdminService;
import com.codecool.umbrella.model.EventCard;
import com.codecool.umbrella.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(originPatterns = {"*"}, maxAge = 3600, allowCredentials = "true")
@RestController
@RequestMapping("/api/admin")
public class AdminEndpoint {

    @Autowired
    AdminService adminService;

    @GetMapping
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/delete/{username}")
    public void deleteUser(@PathVariable("username") String username) {
        adminService.removeUser(username);
    }

}
