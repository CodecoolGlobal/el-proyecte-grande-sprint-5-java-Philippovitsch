package com.codecool.umbrella.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.*;

import java.sql.Timestamp;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="events")
@JsonIgnoreProperties(ignoreUnknown=true)
public class EventCard {

    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private Long id;

    private String name;
    private String country;
    private String location;
    private Timestamp timestamp;
    private float temperature_2m_max;
    private float temperature_2m_min;
    private int weathercode;
    private float windspeed_10m_max;

}
