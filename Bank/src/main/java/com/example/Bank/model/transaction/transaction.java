package com.example.Bank.model.transaction;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import javax.xml.stream.events.Comment;
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

    private double money_count;

    private int Likes;

    private int comments;


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

    public void setMoney_count(double money_count) {this.money_count = money_count;}

    public void setLikes(int likes) {Likes = likes;}

    public void setComments(int comments) {this.comments = comments;}

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

    public double getMoney_count() {return money_count;}

    public int getLikes() {return Likes;}

    public int getComments() {return comments;}

    public void incr_Likes() {  Likes = Likes+1;  }

    public void incr_Comments() { comments=comments+1; }
}
