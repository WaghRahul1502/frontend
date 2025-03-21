import React from 'react';

function RightSection({imageURL,productName,productDescription,tryDemo,learnMore}) {
    return ( 
        <div className='container '>
        <div className='row'>
            <div className='col-6 p-3 mt-3'style={{textAlign:"left"}}>
             <h1 className='fs-3 text-muted p-3'>{productName} </h1>
             <p className='px-3' style={{textAlign:"left"}}>{productDescription}</p> 
             <div>
             <a href={learnMore} style={{marginLeft:"18px",textDecoration:"none"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
             </div>
             </div>
             <div className='col-6 p-3'>
            <img src={imageURL} style={{width:"100%"}}/>
            </div>
        </div>
    </div>
     );
}

export default RightSection;