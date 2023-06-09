package com.codecool.umbrella;

import com.codecool.umbrella.logic.InitService;
import jakarta.annotation.PostConstruct;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class UmbrellaApplication {

	private final InitService initService;

	public UmbrellaApplication(InitService initService) {
		this.initService = initService;
	}

	@PostConstruct
	public void createUserEntries() {
		initService.createUserEntries();
		initService.createWeatherCards();
		initService.createUserEvents();
	}

	public static void main(String[] args) {
		SpringApplication.run(UmbrellaApplication.class, args);
	}

}
