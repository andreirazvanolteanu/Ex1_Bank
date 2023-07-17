import './User.css';
import axios from "axios";
import { useState, React } from "react";
import UserPage from '../UserPage/UserPage';


const baseURL = "/user/get-all";
axios.defaults.withCredentials = true;

function User() {
  const initialvalues = {
    "id": "9",
    "firstName": "",
    "lastName": "",
    "username": "",
    "phone": "",
    "password": ""
  };
  const [data, setData] = useState(initialvalues);
  const [Id, SetId] = useState(localStorage.getItem("Token"));

  

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      //setUserF(event.target.value);
    };
   

    const handleClick = async (e) => {
      e.preventDefault();
      console.log(data);

      var bareURL_PUT = "/" + Id;

      try {
      fetch(bareURL_PUT, {
        method: 'PUT',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(data),
        }
        )
        .then(function(response){console.log(response)
            return response.json();
        })

        .then(function(myJson) {
          console.log(myJson);

        });
          
      }
      catch (err) {
        console.log(err.message);
      } 

      
    };

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
            if((myJson[i].id == Id)  )
            {
              setData( prevState => ( {
                "firstName": myJson[i].firstName,
                "lastName": myJson[i].lastName,
                "username": myJson[i].username,
                "phone": myJson[i].phone
              }))
              console.log("pa"+data)
              break;
            }
        }
  
      });
  


  return (
    <div className="User">
      <UserPage></UserPage>
      <div className='Card'>
        <p id='userSettingsTitle'>User Settings</p>

        <div className='Container'>
        <form action="/">
            <input type='text' className='userSettingsInput' 
            name = "firstName" onChange={handleChange} value={data.firstName}/>
            <br/>
            <input type='text' className='userSettingsInput' name = "lastName" onChange={handleChange}
            value={data.lastName}/>
            <br/>
            <input type='text' className='userSettingsInput' name = "username" onChange={handleChange} 
            value={data.username}/>
            <br/>
            <input type='text' className='userSettingsInput' name = "phone" onChange={handleChange} 
           value={data.phone}/>
            <br/>
             <button type='submit' className='userSettingsBtn' onClick={handleClick} >SAVE</button>
             </form>
        </div>


      </div>
    </div>
  );
}

export default User;
