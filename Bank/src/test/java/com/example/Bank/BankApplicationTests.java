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
		pT.setFirstName("Bat" );
		pT.setLastName("man");
		pT.setUsername("Bruce Wayne");
		pT.setPhone("I_AM_BATMAN");
		userDao.save(pT);

	}
	@Test
	void DeleteuserTest() {
		int pT = 7;
		userDao.delete(pT);

	}


}
