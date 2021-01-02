import React, {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import {Helmet} from "react-helmet-async";
import "../../../setup/style/styles.scss";
import Address from "./Address";
import Upload from "./Upload";

function Home() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
    }, [data])


    return (
        <>
            <Helmet defaultTitle="HERE Technologies | The world & #1 location platform"/>
            <Upload setLoading={setLoading} loading={loading} setData={setData}/>
            <Address loading={loading} data={data}/>
            <ToastContainer/>

        </>
    );
}


export default Home;
