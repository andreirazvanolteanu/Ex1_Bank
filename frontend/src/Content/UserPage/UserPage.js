import './UserPage.css';
import axios from "axios";
import { useState, React } from "react";

const baseURL = "/user/get-all";

<script src='https://kit.fontawesome.com/a076d05399.js'></script>

function UserPage() {
  
  const initialvalues = {
    "id": "9",
    "firstName": "",
    "lastName": "",
    "username": "",
    "phone": "",
    "password": ""
  };
  const [data, setData] = useState(initialvalues);
  
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
      //console.log(myJson);
      for (let i=0; i < myJson.length; i++)
      {
          if((myJson[i].id == data.id)  )
          {
            setData( prevState => ( {
              "firstName": myJson[i].firstName,
              "lastName": myJson[i].lastName,
              "username": myJson[i].username,
              "phone": myJson[i].phone
            }))
            
            break;
          }
      }

    });

  return (
    <div className="UserPage">
      <input type='checkbox' id='check' />
      <label for='check'>
      
      <i class="fas fa-times" id='cancel'>&times;</i>
      </label>
  
      <div className='User_SideBar'>
            <p id='firstname'> {data.firstName} {data.lastName}</p>
            <p id='username'> {data.username} </p>
            <h3>$1,000.00</h3>
            <p>Account Balance</p>
            <ul>
       <li><a href='/'>Home</a></li>
       <li><a href='/user'>My Account</a></li>
       <li><a href='/user'>Bank Accounts</a></li>
       <li><a href='/'>Notifications</a></li>
       <li><a href='/login'>Logout</a></li>
      </ul>
      </div>
      
      <div className='User_SetBar' id='User_SetBar'>
      <label for='check'>
      <i className='fas fa-bars' id='btn1'>☰</i>
      </label>
            <em className='titleBar'>Real World App</em>
            <button className='newBtn'>$ NEW</button>
      </div>

    </div>
  );
}

export default UserPage;