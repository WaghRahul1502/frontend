import React from 'react';

function Hero() {
    return (  
        <section className='container-fluid' id="supportHero">
            <div className='p-5  ' id="supportWrapper">
               <h5 >Support Portal</h5>
               <a href=""> Track Ticket</a> 
        </div>
        <div className=' row p-1 mx-5' >
        <div className=' col-6 p-5 mb-4'>
        <h5 className='mb-3'>Search for an answer or browse help topics to create a ticket</h5>
            <input placeholder='Eg. how do i activate F&O,why is my order getting rejected...'/>
            <br></br>
            <a href=''>Track account opening</a>
           <a href=''> Track segment activation</a>
            <a href=''> Intraday margins</a>
            <a href=''> Kite user manual</a>
            </div> 
        <div className=' col-6 p-5  mt-3'>
        <h5>Featured</h5>
        <ol>
            <li>
            <a href=''>1.Surveillance measure on scrips - March 2025</a>
            </li>
            <li>
            <a href='' className='mt-3'>2.Latest Intraday leverages and Square-off timings</a>
            </li>
        </ol>
        
        </div>       
        </div>
        </section>
    );
}

export default Hero;