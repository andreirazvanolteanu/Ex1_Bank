package com.example.Bank;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.beans.factory.annotation.Autowired;
import com.example.Bank.model.user.userDao;
import com.example.Bank.model.user.user;
import com.example.Bank.model.transaction.transactionDao;
import com.example.Bank.model.transaction.transaction;
import java.sql.Date;

@SpringBootTest
class BankApplicationTests {

	@Autowired
	private userDao userDao;
	@Autowired
	private transactionDao  tran_Dao;

	@Test
	void adduserTest() {
		user pT0 = new user();
		pT0.setFirstName("Flaunder" );
		pT0.setLastName("The Fish");
		pT0.setUsername("FOR_DINNER");
		pT0.setPhone("OH_MY!!!");
		pT0.setPassword("FOR_DINNER");
		userDao.save(pT0);

		user pT1 = new user();
		pT1.setFirstName("Bambi" );
		pT1.setLastName("The Orphange");
		pT1.setUsername("MAMA_NOOO");
		pT1.setPhone("UNAVAILABLE");
		pT1.setPassword("MAMA_NOOO");
		userDao.save(pT1);



		user pT = new user();
		pT.setFirstName("Bat" );
		pT.setLastName("man");
		pT.setUsername("Bruce Wayne");
		pT.setPhone("I_AM_BATMAN");
		pT.setPassword("I_AM_BATMAN");
		userDao.save(pT);

	}
	@Test
	void DeleteuserTest() {
		int pT = 7;
		userDao.delete(pT);

	}

	@Test
	void addtransactionTest() {
		transaction pT0 = new transaction();
		pT0.setNumberT("APp098");
		pT0.setFrom_Name("Flaunder");
		pT0.setTo_Name("Bat");
		pT0.setMoney_count(-400);
		pT0.setComments(0);
		pT0.setLikes(0);
		tran_Dao.save(pT0);
	}


}
