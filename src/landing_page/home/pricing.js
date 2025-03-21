import React from 'react';

function Pricing() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                
            <div className='col-4'>
                <h1 className='mb-3 fs-3'>Unbeatable pricing</h1>
                <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                <a href='www.google' className='mx-0' style={{textDecoration:"none"}}>See Pricing <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
            </div>
            <div className='col-2'></div>
            <div className='col-6'>
                <div className='row text-center'>
                    <div className='col p-3 border'>
                        <h1 className='mb3'>0</h1>
                        <p>Free equity delievery and <br/> direct mutual funds</p>
                    </div>
                    <div className='col p-3 border'>
                    <h1  className='mb3'>20</h1>
                    <p>Intraday and F&0</p>
 
                    </div>

                </div>
            </div>
        
            </div>
         </div>
        
   );
}

export default Pricing;