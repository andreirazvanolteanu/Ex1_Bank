import './TransactionDetail.css';
import { BiLike } from 'react-icons/bi';
import {MdComment} from 'react-icons/md';
import UserPage from '../UserPage/UserPage';
import axios from "axios";
import { useState, React } from "react";

const baseURL = "/transaction/get-all";

function TransactionDetail() {
  const initialvalues = {
    "id": "4",
    "numberT": "",
    "money_count": 0.0,
    "comments": 0,
    "to_Name": "",
    "likes": 0,
    "from_Name": ""
  };
  const [data, setData] = useState(initialvalues);
  const [Id, SetId] = useState(localStorage.getItem("Token"));
  
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
          if((myJson[i].id == Id)  )
          {
            //console.log("User Exist");
            setData( prevState => ( {
              "numberT": myJson[i].firstName,
              "money_count": myJson[i].money_count,
              "numberT": myJson[i].numberT,
              "comments": myJson[i].comments,
              "to_Name": myJson[i].to_Name,
              "likes": myJson[i].likes,
              "from_Name": myJson[i].from_Name
            }))
            break;
          }
      }

    });

    const handleLinkes = async (e) => {
      
      console.log("Hello");

      var bareURL_PUT = "/transaction/likes/4" ;

      try {
      fetch(bareURL_PUT, {
        method: 'PUT',
        headers : {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        }
        )
        .then(function(response){console.log(response)
            return response.json();
        })
        .then(function(myJson) {
          console.log(myJson);
          window.location.reload(true);
        });
          
      }
      catch (err) {
        console.log(err.message);
      } 

      
    }

  return (
    <div className="TransactionDetail">
      <UserPage></UserPage>
      <div className='Transaction_Card'>
      <p className='transactionDTitle'> Transaction Detail  </p>
          <div className='TransactionD_Container'> 
              <p> <b> {data.from_Name} </b> paid <b> {data.to_Name} </b> </p>
              <p> Payment: {data.numberT} </p>
              <p id='likes' name="transD_L"> {data.likes} <BiLike className='icon' onClick ={handleLinkes} name="transD_Like" /> </p>
              <p id='comments'> {data.comments} <MdComment className='comment'/> </p>
              <textarea name='comment' form='usrform' placeholder='Write a comment...' rows={1} />
             
              <br/><br/>
          </div>
                  
      </div>
    </div>
  );
}

export default TransactionDetail;
