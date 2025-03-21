import React from 'react';

function Hero() {
    return ( 
        <div className='container'>
          
            <div className='row p-5 mt-5 '>
                <h1 className='text-center'>Charges</h1>
                <p className='text-center fs-5 text-muted mt-2 mb-5 pb-5'>List of all charges and taxes</p>
                </div>
                <div className='row '>
                <div className='col-4 p-5'>
                    <img src="media/pricing0.svg "/>
                    <h1 className='fs-4'>Free equity delivery</h1>
                    <p className='text-muted mt-3'>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className='col-4 p-5'>
                <img src="media/other-trades.svg"/>
                    <h1 className='fs-4'>Intraday and F&O trades</h1>
                    <p className='text-muted'>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className='col-4 p-5'>
                <img src="media/pricingMF.svg"/>
                    <h1 className='fs-4'>Free direct MF</h1>
                    <p className='text-muted mt-3'>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
          </div>
        
        
     );
}

export default Hero;