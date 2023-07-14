import './Transaction.css';
import { BiLike } from 'react-icons/bi';
import {MdComment} from 'react-icons/md';
import axios from "axios";
import { useState, React } from "react";
import UserPage from '../UserPage/UserPage';

const baseURL = "/transaction/get-all";


function Transaction() {

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


  return (
    <div className="Transaction">
      <UserPage></UserPage>
      <div className='TransactionContainer'>
            <div className='TransactionControl'>
          
              <div className="transactionOp">
                  <select  className='select'>
                    <option >Date: ALL</option>
                    <option >Date: 7 days</option>
                    <option >Date: 15 days</option>
                    <option >Date: 30 days</option>
                  </select>
              </div>

              <div className="transactionOp">
                      <select className='select'>
                        <option >Amount: $0-$1,000</option>
                        <option >Amount: $1,000-$5,000</option>
                        <option >Amount: $5,000-$10,000</option>
                        <option >Amount: $10,000-$20,000</option>
                      </select>
              </div>
            </div>

            
            <div className='Transaction_Users'>
          
              <div className='Transaction_Card' >
                  <div className='Transaction_Card_Container'>
                  <p>Personal</p>
                      <p> <b> 
                        {data.from_Name} </b> paid <b> {data.to_Name} </b> </p>
                      <p> Payment: {data.numberT} </p>
                      <p> <BiLike /> {data.likes} </p>
                      <p><MdComment /> {data.comments}  </p>
                      <h3 className='Transaction_money'> {data.money_count} </h3>
                  </div>


              </div>

            </div>

        
      </div>
    </div>
  );
}

export default Transaction;
