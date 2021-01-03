import React, {useState, useRef, useEffect} from 'react';
import {isClient} from "../../../../provider/setup/constant";
import {mapAdapter} from "./action/mapAdapter";
import {getAddressListFromApi} from "../Home/action/getAddressListFromApi";
import './map.scss'

function Map({match}) {
    const [map, setMap] = useState(null);
    const [data, setData] = useState([]);
    const refContainer = useRef();

    useEffect(() => {
        const H = isClient && window.H;
        console.log('h',H);
        let platform = mapAdapter(H);
        console.log('platform',platform);
        const defaultLayers = platform.createDefaultLayers();
        const maps = new H.Map(
            refContainer.current,
            defaultLayers.vector.normal.map,
            {
                // This map is centered over Europe
                center: {lat: match.params.lat, lng: match.params.long},
                zoom: 15,
                pixelRatio: window.devicePixelRatio || 1
            }
        );

        getAddressListFromApi(match.params.lat, match.params.long)
            .then((item) => {
                setData(item.items[0]);
            })

        let icon = new H.map.Icon('/asset/marker.svg'),
            coords = {lat: match.params.lat, lng: match.params.long},
            marker = new H.map.Marker(coords, {icon: icon});

        maps.addObject(marker);
        maps.setCenter(coords);

        var behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(maps));
        var ui = H.ui.UI.createDefault(maps, defaultLayers);

        setMap(maps);
    }, [])

    useEffect(() => {
    }, [data])

    return (
        <>
            <div className="limited address-title">
                <h1>{match.params.name}</h1>
                <p>{data.title}</p>
            </div>
            <div className="limited map-wrap">
                <div ref={refContainer} className='limited map'>

                </div>
            </div>
        </>
    )
}

export default Map;
