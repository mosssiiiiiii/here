import React, {useState, useEffect} from 'react';
import "./styles.scss";
import Logo from "./Logo";
import Address from "./Address";
import Upload from "./Upload";

function App() {
    const [data, setData] = useState([]);
    const [upload, setUpload] = useState(false);


    useEffect(() => {
    }, [data])

    return (
        <div className="wrap">
            <Logo/>
            <Upload setData={setData} setUpload={setUpload} upload={upload}/>
            <Address data={data}/>
        </div>
    );
}


export default App;
