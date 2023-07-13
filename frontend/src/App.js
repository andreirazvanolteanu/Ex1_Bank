import logo from "./logo.svg"
import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom';


import Home from './Content/Home/Home';
import NoPage from './Content/NoPage/NoPage';
import User from './Content/User/User';
import UserPage from './Content/UserPage/UserPage';
import Bank from './Content/Bank/Bank';
import LogIn from './Content/LogIn/LogIn';
import SignUp from './Content/SignUp/SignUp';
import Transaction from './Content/Transaction/Transaction';
import TransactionDetail from './Content/TransactionDetail/TransactionDetail';
import useToken from './Content/auth-tu/useToken';
import { useState, React } from "react";



function App() {

  

  const [token, setToken] = useState(() => {
    // getting stored value
    const tok = localStorage.getItem("Token");
    console.log("kk" + tok);
    if (tok == "")
    {
      console.log("kk2" );
      return null;
    }
    else
    {
      const initialValue = JSON.parse(tok);
      return initialValue || "";
    }
    
  });


  /*
  if(!token) {
    return <LogIn  />
  }
  */

  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/404" element={<NoPage />} />
          <Route path="/User" element={<User />} />
          <Route path="/UserPage" element={<UserPage />} />
          <Route path="/Bank" element={<Bank />} />
          <Route path="/LogIn" element={<LogIn />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/TransactionD" element={<TransactionDetail />} />
      </Routes>
    </BrowserRouter>

    
    </div>
  );
}

export default App;
