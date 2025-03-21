import React from 'react';

function Education() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
            <div className='col-6'>
            <img src='media/education.svg'style={{width:"75%"}} alt='varsity'/>
            </div>
        
            <div className='col-6 mt-3'>
           <h2 className='fs-3 mb-3'>Free and open market education</h2>
           <p>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
           <a href='www.google' className='mx-0' style={{textDecoration:"none"}}>Varsity <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
           <p className='mt-3'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
           <a href='www.google' className='mx-0' style={{textDecoration:"none"}}>TradingQ&A<i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
         </div>
         </div>
        
     );
}

export default Education;