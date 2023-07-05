package com.example.Bank.controller;

import com.example.Bank.model.transaction.transaction;
import com.example.Bank.model.transaction.transactionDao;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class transactionController {

    @Autowired
    private transactionDao tran_Dao;
    @GetMapping("/transaction/get")
    public transaction getbyId(@RequestBody int id_X) {
        return tran_Dao.gettransaction(id_X);
    }
    @GetMapping("/transaction/get-all")
    public List<transaction> getAllusers() {
        return tran_Dao.getAlltransaction();
    }

    @PostMapping("/transaction/save")
    public transaction save(@RequestBody transaction pT) {
        return tran_Dao.save(pT);
    }

    @PostMapping("/transaction/delete")
    public ResponseEntity delete(@RequestBody int id_X) {
        tran_Dao.delete(id_X);
        return ResponseEntity.ok("Project with Id = {id} deleted");
        //Ok($"Project with Id = {id} deleted");
    }


}