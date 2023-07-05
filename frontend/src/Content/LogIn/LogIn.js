import './LogIn.css';

function LogIn() {
  return (
    <div className="LogIn">
      <h1 id='titleSignUp'><em>Real World App</em></h1>
      <p> Login</p>

       <form action="/">

              <input type="text" id="fname" className="inputLogin" name="fname" placeholder='Username*'/> 
          <br/><br/>
              <input type="password" id="lpassword" className="inputLogin" name="lpassword" placeholder='Password*'/>
          <br/><br/>

          <button id='btnLogin' type="submit" value="Submit" >Login</button>
        </form>


    </div>
  );
}

export default LogIn;
