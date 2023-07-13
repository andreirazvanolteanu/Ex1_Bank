import './User.css';
import axios from "axios";
import { useState, React } from "react";


const baseURL = "/user/get-all";
axios.defaults.withCredentials = true;

function User() {
  const initialvalues = {
    "id": "8",
    "firstName": "",
    "lastName": "",
    "username": "",
    "phone": "",
    "password": ""
  };
  const [data, setData] = useState(initialvalues);

  

    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      //setUserF(event.target.value);
    };
   

    const handleClick = async (e) => {
      e.preventDefault();
      console.log(data);

      var bareURL_PUT = "/" + data.id;

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
  
  

  return (
    <div className="User">

      <div className='Card'>
        <p id='userSettingsTitle'>User Settings</p>

        <div className='Container'>
        <form action="/">
            <input type='text' className='userSettingsInput' 
            name = "firstName" onChange={handleChange}  placeholder='Edgar'/>
            <br/>
            <input type='text' className='userSettingsInput' name = "lastName" onChange={handleChange}
            placeholder='Jonhs'/>
            <br/>
            <input type='text' className='userSettingsInput' name = "username" onChange={handleChange} 
            placeholder='Norene39@yahoo.com'/>
            <br/>
            <input type='text' className='userSettingsInput' name = "phone" onChange={handleChange} 
            placeholder=' 625-316-9882'/>
            <br/>
             <button type='submit' className='userSettingsBtn' onClick={handleClick} >SAVE</button>
             </form>
        </div>


      </div>
    </div>
  );
}

export default User;
