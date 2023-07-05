package com.example.Bank.model.user;
import com.example.Bank.model.transaction.transaction;
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

    public user save(user pT) {
        repository.save(pT);
        return pT;
    }

    public user getuser(int pT_id){
        user pR = repository.findById(pT_id).get();
        return pR;
    }

    public List<user> getAlluser(){
        List<user> userX = new ArrayList<>();
        Streamable.of(repository.findAll()).forEach(userX::add);

        return userX;
    }

    public void delete(int pT_id)
    {
        repository.deleteById(pT_id);
    }
}
