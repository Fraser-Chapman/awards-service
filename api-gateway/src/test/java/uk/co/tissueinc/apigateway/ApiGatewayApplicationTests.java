package uk.co.tissueinc.apigateway;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class ApiGatewayApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void gatewayShouldFail() {
		assertThat(true).isFalse();
	}
}
