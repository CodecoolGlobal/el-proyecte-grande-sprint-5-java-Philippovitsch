package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.ERole;
import com.codecool.umbrella.model.Role;
import com.codecool.umbrella.model.User;
import com.codecool.umbrella.model.repository.RoleRepository;
import com.codecool.umbrella.model.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.hibernate.ObjectNotFoundException;
import org.springframework.stereotype.Service;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AdminService {

    private final UserRepository userRepository;
    private final RoleRepository roleRepository;

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public void removeUser(String username) {
        Optional<User> user = userRepository.findByUsername(username);
        user.ifPresent(userRepository::delete);
    }

    public void changeUserRole(String username, String newRole) {
        if (userRepository.existsByUsername(username)) {
            String roleWithPrefix = "ROLE_" + newRole;
            Optional<Role> role = roleRepository.findByName(ERole.valueOf(roleWithPrefix));
            if (role.isPresent()) {
                Optional<User> user = userRepository.findByUsername(username);
                user.get().setRoles(new HashSet<>());
                user.get().getRoles().add(role.get());
                userRepository.save(user.get());
            }
        }
        else {
            throw new ObjectNotFoundException(User.class, "User");
        }
    }

}
