import './User.css';
import funny from "../../Img/IamRich.png"

function User() {
  return (
    <div className="User">
      <h1>User </h1>

      <div className='Card'>
        <img src={funny} alt="Avatar" style={{width:"100px" }}/>
        <div className='Container'>
            <h4> <b> Jonh Doe </b></h4>
            <p> Fresh man Engineer </p>

        </div>


      </div>
    </div>
  );
}

export default User;
