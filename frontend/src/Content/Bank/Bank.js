import './Bank.css';
import UserPage from '../UserPage/UserPage';

function Bank() {
  return (
    <div className="Bank">
<UserPage></UserPage>
<div className='Card'>
  <div className='Container'>
  <form action="/">
      <h2>   Bank Accounts</h2>
      <h5>John Doe</h5>
      <button type='submit'className='buttonC'> CREATE</button>
      <button type='button'className='buttonD'> DELETE</button>
</form>

  </div>


</div>
    </div>
  );
}

export default Bank;
