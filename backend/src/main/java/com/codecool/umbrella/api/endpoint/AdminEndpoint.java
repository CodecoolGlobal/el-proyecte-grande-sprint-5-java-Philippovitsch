package com.codecool.umbrella.api.endpoint;

import com.codecool.umbrella.logic.AdminService;
import com.codecool.umbrella.model.User;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
@RequiredArgsConstructor
public class AdminEndpoint {

    private final AdminService adminService;

    @GetMapping
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @DeleteMapping("/{username}/delete")
    public void deleteUser(@PathVariable("username") String username) {
        adminService.removeUser(username);
    }

    @PutMapping("/{username}/role/{newRole}")
    public void changeUserRole(@PathVariable("username") String username,
                               @PathVariable("newRole") String newRole) {
        adminService.changeUserRole(username, newRole);
    }

}
