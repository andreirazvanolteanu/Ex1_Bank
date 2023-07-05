package com.example.Bank.model.user;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends CrudRepository<user, Integer>{
}
