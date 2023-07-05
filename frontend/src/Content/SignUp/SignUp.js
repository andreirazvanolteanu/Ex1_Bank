
import './SignUp.css';

function SignUp() {
  return (
    <div className="SignUp">
        <h1> Sign Up</h1>
          <form action="/home">

                <label for="fname">First Name: </label>
                    <input type="text" id="fname" name="fname" placeholder='First Name'/> 
                <br/><br/>

                <label for="fname">Last Name: </label>
                    <input type="text" id="fname" name="fname" placeholder='Last Name* '/> 
                <br/><br/>



                <label for="fname">Username: </label>
                    <input type="text" id="fname" name="fname" placeholder='Username'/> 
                <br/><br/>


                <label for="lpassword">Password: </label>
                    <input type="password" id="lpassword" name="lpassword" placeholder='Password'/>
                <br/><br/>

                <label for="lpassword">Confirm Password: </label>
                    <input type="password" id="lpassword" name="lpassword" placeholder='Confirm Password' />
                <br/><br/>

                <input type="submit" value="Submit" placeholder='Sign Up' />
          </form>

    </div>
  );
}

export default SignUp;
