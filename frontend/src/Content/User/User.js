import './User.css';
import funny from "../../Img/IamRich.png"
import axios from "axios";
import React,{useState,useEffect} from 'react';

//const baseURL = "http://localhost:8090/user/get-all";
const baseURL = "/user/get-all";
//axios.defaults.withCredentials = true;

function User() {

  

  /*
    React.useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(baseURL
          ).then(res => console.log(res.data))
          .catch(err => console.log(err))
    });
   
fetch(baseURL, )
    .then(response => console.log(response.data))
    .then(data => console.log(data));

      
    */
    
    fetch(baseURL, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}
       )
       .then(function(response){
        console.log(response)
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });



  return (
    <div className="User">
      <h1>User </h1>

      <div className='Card'>
        <img src={funny} alt="Avatar" style={{width:"100px" }}/>
        <div className='Container'>
            <h4> <b> Jonh Doe </b></h4>
            <p> Fresh man Engineer </p>

        </div>


      </div>
    </div>
  );
}

export default User;
