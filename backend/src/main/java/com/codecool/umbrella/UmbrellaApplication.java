package com.codecool.umbrella;

import com.codecool.umbrella.model.WeatherCard;
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
	}

}
