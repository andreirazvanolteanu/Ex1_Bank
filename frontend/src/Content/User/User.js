import './User.css';
import axios from "axios";
import React from "react";


const baseURL = "/user/get-all";
axios.defaults.withCredentials = true;

function User() {

  

  /*
   React.useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(baseURL
          ).then(res => console.log(res.data))
          .catch(err => console.log(err))
    });
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

  console.log(baseURL);

  return (
    <div className="User">

      <div className='Card'>
        <p id='userSettingsTitle'>User Settings</p>

        <div className='Container'>
        <form action="/">
            <input type='text' className='userSettingsInput' placeholder='Edgar'/>
            <br/>
            <input type='text' className='userSettingsInput' placeholder='Jonhs'/>
            <br/>
            <input type='text' className='userSettingsInput' placeholder='Norene39@yahoo.com'/>
            <br/>
            <input type='text' className='userSettingsInput' placeholder=' 625-316-9882'/>
            <br/>
             <button type='submit' className='userSettingsBtn'>SAVE</button>
             </form>
        </div>


      </div>
    </div>
  );
}

export default User;
