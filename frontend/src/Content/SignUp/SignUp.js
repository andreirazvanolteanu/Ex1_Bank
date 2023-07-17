
import './SignUp.css';
import axios from "axios";
import { useState, React } from "react";

const baseURL = "/user/get-all";
const baseURLPost = "/user/save";
axios.defaults.withCredentials = true;

function SignUp() {
  const initialvalues = {
    "firstName": "",
    "lastName": "",
    "username": "",
    "phone": "",
    "password": ""
  };
  const [data, setData] = useState(initialvalues);
  const [isLoading, setIsLoading] = useState(false);
  const [err, setErr] = useState('');


  const handleClickPost = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch(baseURLPost, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
      },
            
            body: JSON.stringify(data),

      });

      if (!response.ok) {
        throw new Error(`Error! status: ${response.status}`);
      }

      const result = await response.json();

    console.log('result is: ', JSON.stringify(result, null, 4));

    setData(result);
  } catch (err) {
    setErr(err.message);
  } finally {
    setIsLoading(false);
  }

    //e.preventDefault();
    //console.log(data);
    //console.log(userL);
  };

  /*
   React.useEffect(() => {
    axios.defaults.withCredentials = true;
    axios.get(baseURL
          ).then(res => console.log(res.data))
          .catch(err => console.log(err))
    });
    */


    const handleChange = (e) => {
      setData({ ...data, [e.target.name]: e.target.value });
      //setUserF(event.target.value);
    };


    const handleClick = async (e) => {
      e.preventDefault();
      console.log(data);
      //console.log(userL);
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
      });

  console.log(baseURL);




  return (
    <div className="SignUp">
        <h1 id='titleSignUp'><em>Real World App</em></h1>
        <p> Sign Up</p>
          <form action="/">
                    <input type="text" id="signup_firstName" name = "firstName" onChange={handleChange}  className='inputSignUp' placeholder='First Name*'/> 
                <br/><br/>

                    <input type="text" id="signup_lastName" name = "lastName" onChange={handleChange} className='inputSignUp' placeholder='Last Name* '/> 
                <br/><br/>

                    <input type="text" id="signup_username" name = "username" onChange={handleChange} className='inputSignUp' placeholder='Username*'/> 
                <br/><br/>

                <input type="text" id="signup_phone" name = "phone" onChange={handleChange} className='inputSignUp' placeholder='Phone*'/>
                <br/><br/>

                    <input type="password" id="signup_lpassword" name = "password" onChange={handleChange} className='inputSignUp' placeholder='Password*'/>
                <br/><br/>

                    <input type="password" id="signup_lpassword2" name = "password" onChange={handleChange} className='inputSignUp' placeholder='Confirm Password*' />
                <br/><br/>

                <button type="submit" value="Submit" name = "signup_submit" onClick={handleClickPost}  id='btnSignUp'>SIGN UP</button> 
          </form>
          
    </div>
  );
}

export default SignUp;
