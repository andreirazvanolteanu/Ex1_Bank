import './Transaction.css';
import { BiLike } from 'react-icons/bi';
import {MdComment} from 'react-icons/md';


function Transaction() {
  return (
    <div className="Transaction">
      <div className='TransactionContainer'>
            <div className='TransactionControl'>
          
              <div className="transactionOp">
                  <select  className='select'>
                    <option >Date: ALL</option>
                    <option >Date: 7 days</option>
                    <option >Date: 15 days</option>
                    <option >Date: 30 days</option>
                  </select>
              </div>

              <div className="transactionOp">
                      <select className='select'>
                        <option >Amount: $0-$1,000</option>
                        <option >Amount: $1,000-$5,000</option>
                        <option >Amount: $5,000-$10,000</option>
                        <option >Amount: $10,000-$20,000</option>
                      </select>
              </div>
            </div>

            
            <div className='Transaction_Users'>
              <div className='Transaction_Card'>
                  <div className='Transaction_Card_Container'>
                  <p>Personal</p>
                      <p> <b> Jonh Doe </b> paid <b> Edward Jone</b> </p>
                      <p> Payment:jfgbnjgdstsjphjbsvvr56 </p>
                      <p> <BiLike /> 0 </p>
                      <p><MdComment /> 0  </p>
                      <h3 className='Transaction_money'> -$239,42 </h3>
                  </div>


              </div>
            </div>
        
        
      </div>
    </div>
  );
}

export default Transaction;
