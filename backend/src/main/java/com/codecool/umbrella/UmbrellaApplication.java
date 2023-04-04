package com.codecool.umbrella;

import com.codecool.umbrella.logic.InitService;
import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UmbrellaApplication {

	private final InitService initService;

	@Autowired
	public UmbrellaApplication(InitService initService) {
		this.initService = initService;
	}

	@PostConstruct
	public void createUserEntries() {
		initService.createUserEntries();
		initService.createWeatherCards();
	}

	public static void main(String[] args) {
		SpringApplication.run(UmbrellaApplication.class, args);

	}

}
