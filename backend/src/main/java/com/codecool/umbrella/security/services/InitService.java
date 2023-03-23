package com.codecool.umbrella.security.services;

import com.codecool.umbrella.model.ERole;
import com.codecool.umbrella.model.Role;
import com.codecool.umbrella.model.User;
import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.RoleRepository;
import com.codecool.umbrella.model.repository.UserRepository;
import com.codecool.umbrella.model.repository.WeatherCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class InitService {

    private final RoleRepository roleRepository;
    private final UserRepository userRepo;
    private final WeatherCardRepository weatherCardRepo;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public InitService(RoleRepository roleRepository, WeatherCardRepository weatherCardRepo,
                       UserRepository userRepo, PasswordEncoder passwordEncoder) {
        this.roleRepository = roleRepository;
        this.userRepo = userRepo;
        this.weatherCardRepo = weatherCardRepo;
        this.passwordEncoder = passwordEncoder;
    }

    public void createUserEntries() {
        Role userRole = new Role(1, ERole.ROLE_USER);
        Role premiumUserRole = new Role(2, ERole.ROLE_PREMIUM_USER);
        Role adminRole = new Role(3, ERole.ROLE_ADMIN);
        User user = new User("User", "user@umbrella.cool", passwordEncoder.encode("user"));
        User premiumUser = new User("Premium", "premium@umbrella.cool", passwordEncoder.encode("premium"));
        User admin = new User("Admin", "admin@umbrella.cool", passwordEncoder.encode("admin"));

        user.setRoles(Set.of(userRole));
        premiumUser.setRoles(Set.of(premiumUserRole));
        admin.setRoles(Set.of(adminRole));

        roleRepository.save(userRole);
        roleRepository.save(premiumUserRole);
        roleRepository.save(adminRole);
        userRepo.save(user);
        userRepo.save(premiumUser);
        userRepo.save(admin);
    }

    public void createWeatherCards() {
        WeatherCard vienna = new WeatherCard();
        vienna.setName("Vienna");
        vienna.setCountry("Austria");
        vienna.setLatitude(48.20849);
        vienna.setLongitude(16.37208);
        weatherCardRepo.save(vienna);

        WeatherCard paris = new WeatherCard();
        paris.setName("Paris");
        paris.setCountry("France");
        paris.setLatitude(48.85341);
        paris.setLongitude(2.3488);
        weatherCardRepo.save(paris);

        WeatherCard amsterdam = new WeatherCard();
        amsterdam.setName("Amsterdam");
        amsterdam.setCountry("Netherlands");
        amsterdam.setLatitude(52.37403);
        amsterdam.setLongitude(4.88969);
        weatherCardRepo.save(amsterdam);
    }

}
