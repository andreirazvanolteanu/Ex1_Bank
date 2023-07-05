import './UserPage.css';

function UserPage() {
  return (
    <div className="UserPage">
      
      <div className='User_SideBar'>
            <p>Edgar J</p>
            <p>@Katharina_Bemier</p>
            <h3>$1,678.21</h3>
            <p>Account Balance</p>
            <div className='links'>
       <a href='/'>Home</a>
       <br />
       <br />
       <a href='/user'>My Account</a>
       <br />
       <br />
       <a href='/user'>Bank Accounts</a>
       <br />
       <br />
       <a href='/'>Notifications</a>
       <br />
       <br />
       <a href='/login'>Logout</a>

      </div>
      </div>
      <div className='User_SetBar'>
            <em className='titleBar'>Real World App</em>
      </div>
     

    </div>
  );
}

export default UserPage;