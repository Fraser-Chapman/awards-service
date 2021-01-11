package uk.co.tissueinc.awardsservice;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

import static org.assertj.core.api.Assertions.assertThat;

@SpringBootTest
class AwardsServiceApplicationTests {

	@Test
	void contextLoads() {
	}

	@Test
	public void apiShouldFail() {
		assertThat(true).isFalse();
	}

}
