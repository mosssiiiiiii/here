import React from 'react';
import './address.scss';
import {route} from "../../../setup/route";
import {Link} from 'react-router-dom';
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

                                <Link to={route.map(item.position.lat,item.position.lng,item.name)} >
                                    <img src="/asset/marker.svg" alt=""/>
                                    <p>Go to map</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}


export default Address;
