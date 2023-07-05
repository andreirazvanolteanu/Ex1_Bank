package com.example.Bank.controller;

import com.example.Bank.model.user.user;
import com.example.Bank.model.user.userDao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class userController {

    @Autowired
    private userDao userDao;

    @GetMapping("/user/get-all")
    public List<user> getAllusers() {
        return userDao.getAlluser();
    }

    @PostMapping("/user/save")
    public user save(@RequestBody user pT) {
        return userDao.save(pT);
    }

    @PostMapping("/user/delete")
    public ResponseEntity delete(@RequestBody int id_X) {
         userDao.delete(id_X);
         return ResponseEntity.ok("Project with Id = {id} deleted");
        //Ok($"Project with Id = {id} deleted");
    }


}
