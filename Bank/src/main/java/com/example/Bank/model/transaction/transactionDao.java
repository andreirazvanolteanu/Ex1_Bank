package com.example.Bank.model.transaction;

import org.springframework.beans.factory.annotation.Autowire;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;


@Service
public class transactionDao {
    @Autowired
    private transactionRepository transaction_R;

    public transaction save(transaction pT) {
        transaction_R.save(pT);
        return pT;
    }

    public transaction gettransaction(int pT_id){
        transaction pR = transaction_R.findById(pT_id).get();
        return pR;
    }

    public List<transaction> getAlltransaction(){
        List<transaction> transactionX = new ArrayList<>();
        Streamable.of(transaction_R.findAll()).forEach(transactionX::add);

        return transactionX;
    }



    public void delete(int pT_id)
    {
        transaction_R.deleteById(pT_id);
    }
}
