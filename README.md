# Weather Tracker by Umbrella Corporation

This is the final team project from the `Advanced - Java Spring` module of the Codecool curriculum, which lasted over 5 Sprints.

It is a weather application with some unique features, founded by the Umbrella Corporation, a fictional company consisting of the developers Jurij, Lukas and Philipp.

The frontend is a Single Page Application built with React, serving dynamic content and the backend is a REST API built with the Java Spring Framework.

## Project description *(by Codecool)*

> As your Codecool Journey comes closer to its conclusion, the time has come for a final Teamwork Project that will put
> to test all of the programming skills you've obtained so far (and some new ones you will learn on the way)!
>
> You have the freedom of choosing your teammates (assemble a team of 3-4 students) and the project's topic this time.
> Think of an app that you would find useful in your daily activities, a tool that an employee of a certain industry might
> crave, a fun game or something completely out of the box.
>
> This project is meant for 4 sprints at least, but it may keep you company until the end of the course, or even much
> longer. Who knows? Although we will not give you any direct tasks to fulfill, there will be some technical requirements
> for each sprint. You are expected to make incremental changes in a Scrum way, developing the project further and further,
> adding new features, technologies, etc.
>
> ***¡Comience El Proyecte Grande!***

> ### What are you going to learn?
> - Work in a Scrum team on a real project.
> - Grow your project iteratively.
> - Deliver increments each sprint.

## Features

- User registration/ login/ logout
- Weather overview
- Weather details
- Event calendar
- User details
- User management for admins

## Technologies

Frontend:
- HTML/ CSS/ JavaScript
- React
- MaterialUI
- Axios
- Chart.js

Backend:
- Java
- Spring & Spring Boot (Spring Web, Spring Data, Spring Security)
- Lombok
- H2 Database Engine
- JJWT (JSON Web Token Support For The JVM)

General:
- IntelliJ IDEA
- Visual Studio Code
- Postman
- Docker

## Run locally

In order to start both, the frontend and the backend server we need two terminals. This commands are tested in a Linux (Debian) environment.

Open a terminal and clone the project:

```
git clone git@github.com:CodecoolGlobal/el-proyecte-grande-sprint-5-java-Philippovitsch.git
```

Navigate to the `backend` directory to start the backend:

```
mvn spring-boot:run
```

In a second terminal navigate to the `frontend` folder to install the dependencies and to start the frontend:

```
npm install && npm start
```

## Authors

[@jurijkreutz](https://github.com/jurijkreutz)

[@LukasJandl](https://github.com/LukasJandl)

[@Philippovitsch](https://github.com/Philippovitsch)

## Screenshots

Landing page:
![1-landing](https://raw.githubusercontent.com/CodecoolGlobal/el-proyecte-grande-sprint-5-java-Philippovitsch/development/screenshots/1-landing.jpg)

Weather cards:
![2-weather-cards](https://raw.githubusercontent.com/CodecoolGlobal/el-proyecte-grande-sprint-5-java-Philippovitsch/development/screenshots/2-weather-cards.jpg)

Location details:
![3-location-details](https://raw.githubusercontent.com/CodecoolGlobal/el-proyecte-grande-sprint-5-java-Philippovitsch/development/screenshots/3-location-details.jpg)

Events:
![4-events](https://raw.githubusercontent.com/CodecoolGlobal/el-proyecte-grande-sprint-5-java-Philippovitsch/development/screenshots/4-events.jpg)

More screenshots are available in the `screenshots` folder...
