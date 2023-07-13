package com.example.Bank.controller;

import com.example.Bank.model.transaction.transaction;
import com.example.Bank.model.user.user;
import com.example.Bank.model.user.userDao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
public class userController {

    @Autowired
    private userDao userDao;

    @GetMapping("/user/get")
    public user getbyId(@RequestBody int id_X) {
        return userDao.getuser(id_X);
    }
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

    @PutMapping("{id}")
    public ResponseEntity<user> updateuser(@PathVariable int id, @RequestBody user userDetails) {
        user up_user = userDao.getuser(id);
                //.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id: " + id));

        up_user.setFirstName(userDetails.getFirstName());
        up_user.setLastName(userDetails.getLastName());
        up_user.setUsername(userDetails.getUsername());
        up_user.setPhone(userDetails.getPhone());

        userDao.save(up_user);

        return ResponseEntity.ok(up_user);
    }


}
