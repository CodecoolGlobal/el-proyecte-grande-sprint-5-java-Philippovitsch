package com.codecool.umbrella;

import com.codecool.umbrella.model.ERole;
import com.codecool.umbrella.model.Role;
import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.RoleRepository;
import com.codecool.umbrella.model.repository.WeatherCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UmbrellaApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(UmbrellaApplication.class, args);

	}

	@Autowired
	WeatherCardRepository repo;

	@Autowired
	RoleRepository roleRepository;

	@Override
	public void run(String... args) throws Exception {
		WeatherCard vienna = new WeatherCard();
		vienna.setName("Vienna");
		vienna.setCountry("Austria");
		vienna.setLatitude(48.20849);
		vienna.setLongitude(16.37208);
		repo.save(vienna);
		WeatherCard paris = new WeatherCard();
		paris.setName("Paris");
		paris.setCountry("France");
		paris.setLatitude(48.85341);
		paris.setLongitude(2.3488);
		repo.save(paris);
		WeatherCard amsterdam = new WeatherCard();
		amsterdam.setName("Amsterdam");
		amsterdam.setCountry("Netherlands");
		amsterdam.setLatitude(52.37403);
		amsterdam.setLongitude(4.88969);
		repo.save(amsterdam);
		roleRepository.save(new Role(1, ERole.ROLE_USER));
		roleRepository.save(new Role(2, ERole.ROLE_PREMIUM_USER));
		roleRepository.save(new Role(3, ERole.ROLE_ADMIN));
	}

}
