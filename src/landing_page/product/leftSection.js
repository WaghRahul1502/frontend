import React from 'react';

function LeftSection({imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appStore}) {
    return ( 
        <div className='container '>
            <div className='row'>
                <div className='col-6 p-3'>
                <img src={imageURL} style={{width:"100%"}}/>
                </div>
                <div className='col-6 p-3 mt-3'style={{textAlign:"left"}}>
                 <h1 className='fs-3 text-muted p-3'>{productName} </h1>
                 <p className='px-3' style={{textAlign:"left"}}>{productDescription}</p> 
                 <div>
                 <a href={tryDemo} className='px-3' style={{textDecoration:"none"}}>Try Demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 <a href={learnMore} style={{marginLeft:"50px",textDecoration:"none"}}>LearnMore <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                 </div>
                 <div className='mt-3'>
                 <a href={googlePlay} className='px-3'><img src='media/googlePlayBadge.svg'/></a>
                 <a href={appStore} ><img src='media/appstoreBadge.svg' style={{marginLeft:"50px"}}/></a> 
                
                 </div>
                 </div>
            </div>
        </div>
     );
}

export default LeftSection;