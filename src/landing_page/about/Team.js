import React from 'react';

function Team() {
    return ( 
        <div className='container'>
            <div className='row p-5 border-top'>
                <h1 className=' text-center mt-5 '>People</h1>
            </div>
            <div className='row p-3 mt-3  text-muted' style={{lineHeight:"1.3em",fontSize:"1em"}}>
                <div className="col-6 ">
                  <img src="media/nithinKamath.jpg" style={{borderRadius:"100%",width:"60%"}}/>
                <h5 className='mt-3 mx-3 px-5' >Nithin Kamath</h5>
                <p className='fs-6 text-muted mx-5 px-4'>Founder, CEO</p>
              </div>
                <div className="col-6 ">
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <a href=''style={{textDecoration:"none"}}> Homepage /</a>
                <a href=''style={{textDecoration:"none"}}> TradingQnA/ </a>
                <a href=''style={{textDecoration:"none"}}> Twitter </a>
                </p>
                </div>
            </div>

        </div>
        
     );
}

export default Team;