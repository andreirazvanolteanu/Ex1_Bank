
import './Home.css';

function Home() {
  return (
    <div className="Home">
      <h1>Home </h1>


      {/*
      if(localStorage.token `{'>'}` -1){
        <h1>{localStorage.token}</h1>
      }
      {localStorage.token != "-1" &&         }
      */
      }

      

      <h1>{localStorage.getItem("Token")}</h1>    

      <a href="/SignUp" name="home_link1" > SignUp </a>
      <br /><br />

      <a href="/LogIn" name="home_link2"> LogIn </a>
      <br /><br />

      <a href="/404" name="home_link3"> NoPage </a>
      <br /><br />

      <a href="/User" name="home_link4"> User </a>
      <br /><br />

      <a href="/UserPage" name="home_link5"> Userpage </a>
      <br /><br />

      <a href="/Bank" name="home_link6"> Bank </a>
      <br /><br />

      <a href="/Transaction" name="home_link7"> Transaction </a>
      <br /><br />

      <a href="/TransactionD" name="home_link8"> Transaction Details </a>
      <br /><br />
      

    </div>
  );
}

export default Home;
