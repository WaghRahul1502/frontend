import React from 'react';

function Awards() {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-6 p-2 ms-0 auto'>
                <img src='media/largestBroker.svg' alt='largestBrokerImg'/>
                </div>
            <div className='col-6 p-2'>
                <h1>Largest stock broker in India </h1>
                <p className='mb-4'>2+ million Zerodha clients contribute to over 15% of all retail order volumes in india daily by trading and investing in:</p>
                <div className='row'>
                    <div className='col-6 p-2'>
                    <ul>
                        <li>
                            <p>Future and Options</p>
                        </li>
                        <li>
                            <p>Commodity derivatives</p>
                        </li>
                        <li>
                            <p>Currency derivatives</p>
                        </li>
                    </ul>
                    </div>
                    <div className='col-6 p-2'>
                    <ul>
                        <li>
                            <p>Stocks & IPOs</p>
                        </li>
                        <li>
                            <p>Direct mutual funds</p>
                        </li>
                        <li>
                            <p>Bonds and Govt. Securitiest </p>
                        </li>
                    </ul>
                    </div>
                </div>
            </div>
            </div>
        </div>
     );
}

export default Awards;