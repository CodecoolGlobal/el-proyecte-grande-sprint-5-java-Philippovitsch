package com.codecool.umbrella.logic;

import com.codecool.umbrella.model.User;
import com.codecool.umbrella.model.WeatherCard;
import com.codecool.umbrella.model.repository.UserRepository;
import com.codecool.umbrella.model.repository.WeatherCardRepository;
import com.codecool.umbrella.security.services.UserDetailsImpl;
import org.hibernate.ObjectNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
public class CardService {

    @Autowired
    private WeatherCardRepository cardRepository;

    @Autowired
    private UserRepository userRepository;

    public List<WeatherCard> getAllWeatherCards() {
        Optional<User> user = getCurrentUser();
        return user.map(User::getWeatherCards).orElse(null);
    }

    public void saveWeatherCard(WeatherCard newCard) {
        Optional<User> user = getCurrentUser();
        if (user.isPresent()) {
            boolean alreadyExists = user.get().getWeatherCards().stream().anyMatch(weatherCard ->
                    weatherCard.getLatitude() == newCard.getLatitude() &&
                            weatherCard.getLongitude() == newCard.getLongitude());
            if (alreadyExists) {
                return;
            }
            user.get().getWeatherCards().add(newCard);
            cardRepository.save(newCard);
            userRepository.save(user.get());
        }
        else {
            throw new ObjectNotFoundException(User.class, "User");
        }
    }

    public void removeWeatherCard(double latitude, double longitude) {
        Optional<User> user = getCurrentUser();
        if (user.isPresent()) {
            Optional<WeatherCard> card = user.get().getWeatherCards()
                    .stream()
                    .filter(weatherCard -> weatherCard.getLatitude() == latitude
                                        && weatherCard.getLongitude() == longitude)
                    .findFirst();
            if (card.isPresent()) {
                Long cardId = card.get().getId();
                user.get().getWeatherCards().removeIf(weatherCard ->
                        Objects.equals(weatherCard.getId(), cardId));
                userRepository.save(user.get());
                if (cardRepository.findById(cardId).isPresent()) {
                    cardRepository.deleteById(cardId);
                }
            }
        }
    }

    private Optional<User> getCurrentUser() {
        UserDetailsImpl userDetails = (UserDetailsImpl) SecurityContextHolder
                .getContext()
                .getAuthentication()
                .getPrincipal();
        return userRepository.findById(userDetails.getId());
    }

}
