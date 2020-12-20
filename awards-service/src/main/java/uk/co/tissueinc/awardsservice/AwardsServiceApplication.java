package uk.co.tissueinc.awardsservice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import uk.co.tissueinc.awardsservice.infrastructure.XForwardedForPreInterceptor;

@SpringBootApplication
public class AwardsServiceApplication implements WebMvcConfigurer {

    @Autowired
    private XForwardedForPreInterceptor xForwardedForPreInterceptor;

    public static void main(String[] args) {
        SpringApplication.run(AwardsServiceApplication.class, args);
        System.out.println("========================Application Started Successfully========================");
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(xForwardedForPreInterceptor)
                .addPathPatterns("/api/**");
    }
}
