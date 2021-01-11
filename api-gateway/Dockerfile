FROM openjdk:11 as build

COPY . .

RUN ./gradlew build --parallel

FROM openjdk:11-jre-slim as runtime

COPY --from=build /build/libs/api-gateway-0.0.1-SNAPSHOT.jar /usr/app/

WORKDIR /usr/app

ENTRYPOINT ["java", "-jar", "-Dspring.profiles.active=docker", "api-gateway-0.0.1-SNAPSHOT.jar"]
