import React from 'react';

function Stats() {
    return ( 
       <div className='container p-5'>
         <div className='row'>
            <div className='col-6 p-5 mt-2'>
                <h2 className='mb-5 '>Trust with confidence</h2>
                <h4 className='fs-5 '>Customer-first always</h4>
                <p className='mb-4 text-muted'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

                <h4 className='fs-5'>No spam or gimmicks</h4>
                <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>
                
                <h4 className='fs-5'>The Zerodha universe</h4>
                <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

                <h4 className='fs-5'>Do better with money</h4>
                <p className='text-muted'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
            </div>
            <div className='col-6 p-5'>
                <img src='media/ecosystem.png'style={{width:"140%"}} alt='ecosystem'/>
                <div className='text-center'>
                    <a href='' className='mx-4' style={{textDecoration:"none"}}>explore our product <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='' style={{textDecoration:"none"}}> try kit demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <img src='media\pressLogos.png'style={{width:"70%"}} alt='Presslogo.png' className='ps-4 ms-5 mt-4'/>
         </div>
         
       </div> 
       
     );
}

export default Stats;