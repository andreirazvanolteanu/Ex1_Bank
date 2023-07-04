import './Transaction.css';


function Transaction() {
  return (
    <div className="Transaction">
      <h1>Transaction</h1>
      <div className='TransactionContainer'>
            <div className='TransactionControl'>
          
              <div className="transactionOp">
                  <label  for="transactionOp">Date:</label>
                  <select  >
                    <option >All</option>
                    <option >7 days</option>
                    <option >15 days</option>
                    <option >30 days</option>
                  </select>
              </div>

              <div className="transactionOp">
                      <label for="transactionOp">Amount:</label>
                      <select >
                        <option >$0-$1,000</option>
                        <option >$1,000-$5,000</option>
                        <option >$5,000-$10,000</option>
                        <option >$10,000-$20,000</option>
                      </select>
              </div>
            </div>

            
            <div className='Transaction_Users'>
              Personal
              <div className='Transaction_Card'>
                  <div className='Transaction_Card_Container'>
                      <p> <b> Jonh Doe </b> paid <b> Edward Jone</b> </p>
                      <p> Payment: <em>jfgbnjgdstsjphjbsvvr56</em> </p>
                      <p> Likes: <em> 0 </em> </p>
                      <p> Comments: <em> 0 </em> </p>
                      <h3 className='Transaction_money'> -$239,42 </h3>
                  </div>


              </div>
            </div>
        
        
      </div>
    </div>
  );
}

export default Transaction;
