package uk.co.tissueinc.awardsservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Primary;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;

@SpringBootApplication
public class AwardsServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(AwardsServiceApplication.class, args);
		System.out.println("========================Application Started Successfully========================");
	}

}
