package com.example.Bank.model.transaction;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.sql.Date;

//import javax.persistence.Entity;

@Entity
public class transaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String numberT;

    private String From_Name;
    private String To_Name;

    public void setId(int id) {
        this.id = id;
    }

    public void setNumberT(String numberT) {
        this.numberT = numberT;
    }

    public void setFrom_Name(String from_Name) {
        From_Name = from_Name;
    }

    public void setTo_Name(String to_Name) {
        To_Name = to_Name;
    }

    public int getId() {
        return id;
    }

    public String getNumberT() {
        return numberT;
    }

    public String getFrom_Name() {
        return From_Name;
    }

    public String getTo_Name() {
        return To_Name;
    }
}
