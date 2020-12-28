import React, {useState, useEffect} from 'react';
import "../setup/style/styles.scss";
import Logo from "./component/Logo";
import Address from "./component/Address";
import Upload from "./component/Upload";

function App() {
    const [data, setData] = useState([]);
    const [upload, setUpload] = useState(false);
    const [loading,setLoading] = useState(false);


    useEffect(() => {
    }, [data])

    console.log(data);
    return (
        <div className="wrap">
            <Logo/>
            <Upload setLoading={setLoading} setData={setData} setUpload={setUpload} upload={upload}/>
            <Address loading={loading} data={data}/>
        </div>
    );
}


export default App;
