import React from 'react';
import './address.scss';

function Address({data,loading}) {
    return (
        <div className="limited list-wrap">
            {
                data !== null &&
                data.map((item, index) =>
                    <div className='address-wrap ' key={index}>
                        <div className='item-wrap'>
                            <div className={`item ${loading && 'loading'}`}>
                                <h2>{item.name}</h2>
                                <span>{item.title}</span>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Address;
