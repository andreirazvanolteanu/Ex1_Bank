package com.example.Bank.model.user;
import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class userDao {
    @Autowired
    private userRepository repository;

    public void save(user pT) {
        repository.save(pT);
    }

    public List<user> getAlluser(){
        List<user> userX = new ArrayList<>();
        Streamable.of(repository.findAll()).forEach(userX::add);

        return userX;
    }

    public void delete(user pT)
    {
        repository.delete(pT);
    }
}
