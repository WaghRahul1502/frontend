import React from 'react';

function Brokerage() {
    return ( 
        <div className='container'>   
        <div className='row p-5 mt-5 border-top'>
            <div className='col-8 p-5'>
            <a href=''style={{textDecoration:"none"}}><h3 className='fs-5 px-3'>Brokerage Calculator</h3></a>   
            <ul style={{textAlign:"left" ,lineHeight:"2"}} className=' text-muted fs-6'>
            <li>Additional charges of ₹50 per order for orders placed through a dealer at Zerodha including auto square off orders.</li>
            <li>Stamp charges by the Government of India as per the Indian Stamp Act of 1899 for transacting in instruments on the stock exchanges and depositories.</li>
            <li> ₹100 per order for futures and options.</li>
            <li>For a non-PIS account, 0.5% or ₹100 per executed order for equity (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            <li>Equity and Futures - ₹10 per crore + GST of the traded value.</li>
            <li>Options - ₹50 per crore + GST traded value (premium value).</li>
            <li>Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2 per lakh + GST of premium for Options.</li>
            </ul>
            </div>
            <div className='col-4 p-5'> 
            <a href=''style={{textDecoration:"none"}}><h3 className='fs-5'>List Of Charges</h3></a>    
            </div>
          
        </div>
      </div>
     );
}

export default Brokerage;