import './UserPage.css';
import axios from "axios";
import { useState, React } from "react";

const baseURL = "/user/get-all";


function UserPage() {
  
  const initialvalues = {
    "id": "2",
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
          //console.log(i + ": " + myJson[i].username + " and " + myJson[i].password );
          if((myJson[i].id == data.id)  )
          {
            //console.log("User Exist");
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
      
      <div className='User_SideBar'>
            <p> {data.firstName} {data.lastName}</p>
            <p> {data.username} </p>
            <h3>$1,678.21</h3>
            <p>Account Balance</p>
            <div className='links'>
       <a href='/'>Home</a>
       <br />
       <br />
       <a href='/user'>My Account</a>
       <br />
       <br />
       <a href='/user'>Bank Accounts</a>
       <br />
       <br />
       <a href='/'>Notifications</a>
       <br />
       <br />
       <a href='/login'>Logout</a>

      </div>
      </div>
      <div className='User_SetBar'>
            <em className='titleBar'>Real World App</em>
      </div>
     

    </div>
  );
}

export default UserPage;