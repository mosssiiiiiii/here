import React from 'react';


function Address({data}){
    return(
        <div className="limited list-wrap">
            {
                data !== null &&
                data.map((item,index)=>
                    <div className='item-wrap' key={index}>
                        <div className='item'>
                            <div>{item.name}</div>
                            <span>{item.title}</span>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Address;
