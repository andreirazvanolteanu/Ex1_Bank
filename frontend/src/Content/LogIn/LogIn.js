import './LogIn.css';

import axios from "axios";
import { useState, React } from "react";
import PropTypes from 'prop-types';


const baseURL = "/user/get-all";


async function loginUser(credentials) {
  return fetch('http://localhost:3000/LogIn', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }




function LogIn() {

  const initialvalues = {
    "username": "",
    "password": ""
  };
  const [data, setData] = useState(initialvalues);
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    console.log(data);
    //console.log(userL);

    var bob;
    try {
    fetch(baseURL, {
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }}
       )
       .then(function(response){console.log(response)
          return response.json();
      })

      .then(function(myJson) {
        console.log(myJson);


        for (let i=0; i < myJson.length; i++)
        {
            console.log(i + ": " + myJson[i].username + " and " + myJson[i].password );
            if((myJson[i].username == data.username) && (myJson[i].password == data.password) )
            {
              console.log("User Exist");
              setId(myJson[i].id)
              localStorage.setItem("Token", JSON.stringify(myJson[i].id));

              break;
            }
        }
      });
        
    }
    catch (err) {
      console.log(err.message);
    } 

  };

  const handleClick2 =  (e) => {
    e.preventDefault();
    console.log(id);
    console.log();
  }


  return (
    <div className="LogIn">
      <h1 id='titleSignUp'><em>Real World App</em></h1>
      <p> Login</p>

       <form action="/">

              <input type="text" id="fname" className="inputLogin" name = "username" 
              onChange={handleChange}  placeholder='Username*'/> 
          <br/><br/>
              <input type="password" id="lpassword" className="inputLogin" name = "password" 
              onChange={handleChange}  placeholder='Password*'/>
          <br/><br/>

          <button id='btnLogin' type="submit" onClick={handleClick} value="Submit" >Login</button>
          <button id='btnLogin' type="submit2" onClick={handleClick2} value="Submit" >Verifier</button>
        </form>


    </div>
  );
}


LogIn.propTypes = {
  setToken: PropTypes.func.isRequired
}

export default LogIn;

