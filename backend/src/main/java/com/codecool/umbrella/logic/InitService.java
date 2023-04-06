package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.*;
import com.codecool.umbrella.model.repository.EventRepository;
import com.codecool.umbrella.model.repository.RoleRepository;
import com.codecool.umbrella.model.repository.UserRepository;
import com.codecool.umbrella.model.repository.WeatherCardRepository;
import org.springframework.context.annotation.Lazy;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.sql.Timestamp;
import java.util.Optional;
import java.util.Set;

@Service
public class InitService {

    private final RoleRepository roleRepository;
    private final UserRepository userRepo;
    private final WeatherCardRepository weatherCardRepo;
    private final PasswordEncoder passwordEncoder;
    private final EventRepository eventRepo;

    public InitService(RoleRepository roleRepository, WeatherCardRepository weatherCardRepo, UserRepository userRepo,
                       PasswordEncoder passwordEncoder, EventRepository eventRepo) {
        this.roleRepository = roleRepository;
        this.userRepo = userRepo;
        this.weatherCardRepo = weatherCardRepo;
        this.passwordEncoder = passwordEncoder;
        this.eventRepo = eventRepo;
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

        // Presentation stuff
        User hackerman = new User("MisterHackerman", "hackerman@umbrella.cool", passwordEncoder.encode("hackerman"));
        hackerman.setRoles(Set.of(userRole));
        userRepo.save(hackerman);
    }

    @Lazy
    public void createWeatherCards() {
        WeatherCard vienna = new WeatherCard();
        vienna.setName("Vienna");
        vienna.setCountry("Austria");
        vienna.setLatitude(48.20849);
        vienna.setLongitude(16.37208);
        weatherCardRepo.save(vienna);

        WeatherCard newYork = new WeatherCard();
        newYork.setName("New York");
        newYork.setCountry("United States");
        newYork.setLatitude(40.71427);
        newYork.setLongitude(-74.00597);
        weatherCardRepo.save(newYork);

        WeatherCard sydney = new WeatherCard();
        sydney.setName("Sydney");
        sydney.setCountry("Australia");
        sydney.setLatitude(-33.86785);
        sydney.setLongitude(151.20732);
        weatherCardRepo.save(sydney);

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

        WeatherCard hello = new WeatherCard();
        hello.setName("Hello");
        hello.setCountry("Norway");
        hello.setLatitude(61.62417);
        hello.setLongitude(4.83296);
        weatherCardRepo.save(hello);

        WeatherCard how = new WeatherCard();
        how.setName("How");
        how.setCountry("United Kingdom");
        how.setLatitude(54.90025);
        how.setLongitude(-2.76874);
        weatherCardRepo.save(how);

        WeatherCard are = new WeatherCard();
        are.setName("Are");
        are.setCountry("Italy");
        are.setLatitude(45.28528);
        are.setLongitude(7.89337);
        weatherCardRepo.save(are);

        Optional<User> optionalUser = userRepo.findByUsername("User");
        Optional<User> optionalPremium = userRepo.findByUsername("Premium");
        Optional<User> optionalAdmin = userRepo.findByUsername("Admin");

        if (optionalUser.isPresent()) {
            optionalUser.get().getWeatherCards().add(vienna);
            optionalUser.get().getWeatherCards().add(newYork);
            optionalUser.get().getWeatherCards().add(sydney);
            userRepo.save(optionalUser.get());
        }

        if (optionalPremium.isPresent()) {
            optionalPremium.get().getWeatherCards().add(paris);
            optionalPremium.get().getWeatherCards().add(amsterdam);
            userRepo.save(optionalPremium.get());
        }

        if (optionalAdmin.isPresent()) {
            optionalAdmin.get().getWeatherCards().add(hello);
            optionalAdmin.get().getWeatherCards().add(how);
            optionalAdmin.get().getWeatherCards().add(are);
            userRepo.save(optionalAdmin.get());
        }
    }

    public void createUserEvents() {
        EventCard hiking = new EventCard();
        hiking.setName("Hiking");
        hiking.setCountry("Austria");
        hiking.setLocation("Vienna");
        hiking.setTimestamp(Timestamp.valueOf("2023-04-08 10:00:00.0"));
        hiking.setTemperature_2m_max(7.6f);
        hiking.setTemperature_2m_min(4.0f);
        hiking.setWeathercode(61);
        hiking.setWindspeed_10m_max(9.9f);
        eventRepo.save(hiking);

        EventCard easterEggs = new EventCard();
        easterEggs.setName("Search easter eggs");
        easterEggs.setCountry("Austria");
        easterEggs.setLocation("Vienna");
        easterEggs.setTimestamp(Timestamp.valueOf("2023-04-09 13:00:00.0"));
        easterEggs.setTemperature_2m_max(10.7f);
        easterEggs.setTemperature_2m_min(2.8f);
        easterEggs.setWeathercode(80);
        easterEggs.setWindspeed_10m_max(10.0f);
        eventRepo.save(easterEggs);
    }

}
