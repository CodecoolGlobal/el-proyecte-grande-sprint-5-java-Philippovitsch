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
		WeatherCard myCard = new WeatherCard();
		myCard.setName("Vienna");
		myCard.setLatitude(123);
		myCard.setLongitude(1234);
		repo.save(myCard);
	}

}
