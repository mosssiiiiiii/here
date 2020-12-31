import React, {useState, useEffect} from 'react';
import { ToastContainer } from 'react-toastify';
import "../setup/style/styles.scss";
import Logo from "./component/Logo";
import Address from "./component/Address";
import Upload from "./component/Upload";

function App() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
    }, [data])


    return (
        <>
            <Logo/>
            <Upload setLoading={setLoading} loading={loading} setData={setData}/>
            <Address loading={loading} data={data}/>
            <ToastContainer/>
        </>
    );
}


export default App;
