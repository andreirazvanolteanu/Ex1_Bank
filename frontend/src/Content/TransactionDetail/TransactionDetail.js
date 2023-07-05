import './TransactionDetail.css';
import { BiLike } from 'react-icons/bi';
import UserPage from '../UserPage/UserPage';


function TransactionDetail() {
  return (
    <div className="TransactionDetail">
      <UserPage></UserPage>
      <div className='Transaction_Card'>
      <p className='transactionDTitle'> Transaction Detail  </p>
          <div className='TransactionD_Container'> 
              <p> <b> Jonh Doe </b> paid <b> Edward Jone</b> </p>
              <p> Payment: jfgbnjgdstsjphjbsvvr56 </p>
              <p id='likes'>0 <BiLike className='icon'/> </p>
              <textarea name='comment' form='usrform' placeholder='Write a comment...' rows={1} />
              <br/><br/>
          </div>
                  
      </div>
    </div>
  );
}

export default TransactionDetail;
