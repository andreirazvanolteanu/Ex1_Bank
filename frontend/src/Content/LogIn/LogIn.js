import './LogIn.css';

function LogIn() {
  return (
    <div className="LogIn">
       <h1> LogIn </h1>

       <form action="/home">

          <label for="fname">Username: </label>
              <input type="text" id="fname" name="fname" /> 
          <br/><br/>


          <label for="lpassword">Password: </label>
              <input type="password" id="lpassword" name="lpassword" />
          <br/><br/>

          <input type="submit" value="Submit" />
        </form>


    </div>
  );
}

export default LogIn;
