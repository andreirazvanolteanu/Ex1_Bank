
import './SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
        <h1 id='titleSignUp'><em>Real World App</em></h1>
        <p> Sign Up</p>
          <form action="/">
                    <input type="text" id="fname" name="fname" className='inputSignUp' placeholder='First Name*'/> 
                <br/><br/>

                    <input type="text" id="fname" name="fname" className='inputSignUp' placeholder='Last Name* '/> 
                <br/><br/>

                    <input type="text" id="fname" name="fname" className='inputSignUp' placeholder='Username*'/> 
                <br/><br/>

                    <input type="password" id="lpassword" name="lpassword" className='inputSignUp' placeholder='Password*'/>
                <br/><br/>

                    <input type="password" id="lpassword" name="lpassword" className='inputSignUp' placeholder='Confirm Password*' />
                <br/><br/>

                <button type="submit" value="Submit" id='btnSignUp'>SIGN UP</button> 
          </form>

    </div>
  );
}

export default SignUp;
