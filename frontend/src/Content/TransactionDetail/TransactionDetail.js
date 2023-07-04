import './TransactionDetail.css';

function TransactionDetail() {
  return (
    <div className="TransactionDetail">
      <h1> Transaction Detail  </h1>

      <div className='Transaction_Card'>
          <div className='TransactionD_Container'> 
              <p> <b> Jonh Doe </b> paid <b> Edward Jone</b> </p>
              <p> Payment: <em>jfgbnjgdstsjphjbsvvr56</em> </p>
              <p> Likes: <em> 0 </em> </p>
              <textarea name='comment' form='usrform' placeholder='Write a comment...' rows={1} />
              <br/><br/>
          </div>
                  
      </div>
    </div>
  );
}

export default TransactionDetail;
