package com.example.Bank;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.Bank.model.user.userDao;
import com.example.Bank.model.user.user;

import java.sql.Date;

@SpringBootTest
class BankApplicationTests {

	@Autowired
	private userDao userDao;

	@Test
	void adduserTest() {
		user pT = new user();
//pT.setId(2);
		pT.setFirstName("Flaunder" );
		pT.setLastName("The Fish");
		pT.setUsername("Flaunder1");
		pT.setPhone("UnderTheSea");
		userDao.save(pT);

	}

}
