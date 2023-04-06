FROM openjdk:17-alpine@sha256:a996cdcc040704ec6badaf5fecf1e144c096e00231a29188596c784bcf858d05 AS build
RUN mkdir /backend
COPY backend/ backend/
WORKDIR /backend
RUN ./mvnw dependency:resolve
RUN ./mvnw clean package -DskipTests

FROM eclipse-temurin:17-jre-alpine@sha256:d69f8cf3526fd75992366d2e96348682dfbc04c5d321c08d084e1fc26980d81d
RUN apk add dumb-init
RUN mkdir /app
RUN addgroup --system umbrellaUser && adduser -S -s /bin/false -G umbrellaUser umbrellaUser
COPY --from=build /backend/target/umbrella-0.0.1-SNAPSHOT.jar /app/umbrella-0.0.1-SNAPSHOT.jar
WORKDIR /app
RUN chown -R umbrellaUser:umbrellaUser /app
USER umbrellaUser
EXPOSE 8080
CMD ["java", "-jar", "umbrella-0.0.1-SNAPSHOT.jar"]

### Build Image ###
# docker build -t umbrella-backend:v5.0 -f backend.dockerfile .

### Run Image ###
# docker run --name umbrella-backend --rm -d -p 8080:8080 umbrella-backend:v5.0
