FROM openjdk:17
LABEL authors="zwang"
RUN mkdir app
WORKDIR /app
COPY target/*.jar /app/paga-ai.jar
EXPOSE 8080

CMD ["java", "-Dspring.profiles.active=prod", "-jar", "/app/paga-ai.jar"]