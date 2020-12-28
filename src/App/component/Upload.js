import React, {useRef} from 'react';
import {addressLoading} from "../../setup/loading";
import {validateUploadFile} from "../action/validateUploadFile";
import {addNameToAddress} from "../action/addNameToAddress";
import './upload.scss';

function Upload({setData, upload, setUpload,setLoading}) {
    const ref = useRef(null);
    const overDragFile = (e) => {
        e.preventDefault();
        if (ref !== null) {
            ref.current.style.backgroundColor = '#d1d7d7';
        }
    }

    const enterDragFile = (e) => {
        e.preventDefault();
    }

    const exitDragFile = (e) => {
        e.preventDefault();
        if (ref !== null) {
            ref.current.style.backgroundColor = '#e3e8f1';
        }
    }

    const getDragFile = (e, upload) => {
        e.preventDefault();
        setData(addressLoading)
        if (ref !== null) {
            ref.current.style.backgroundColor = '#e3e8f1';
        }
        const file = upload ? e.target.files[0] : e.dataTransfer.files[0];
        if (file !== undefined) {
            setUpload(true);
        }
        if (validateUploadFile(file)) {
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (event) => {
                addNameToAddress(JSON.parse(event.target.result), setData, setUpload,setLoading);
            };
        }else{
            setLoading(false);
        }
    }


    return (
        <>
            <div className="bg"></div>
            <div className="limited upload-wrap">
                <div className="upload-box-wrap">
                    <span>HERE TECHNOLOGY</span>
                    <div className='title'>Pioneers of location technology</div>
                    <span>This project is just for HERE company front end job position challenge</span>
                    <div className="upload-box"
                         onDragOver={overDragFile}
                         onDragEnter={enterDragFile}
                         onDragLeave={exitDragFile}
                         onDrop={getDragFile}
                         ref={ref}
                    >

                        {
                            !upload ?
                                <>
                                    <img src="/asset/download.svg" alt=""/>

                                    <p>
                                        <input onChange={(e) => getDragFile(e, true)} type="file" name="file" id="file"
                                               className="inputfile"/>
                                        <label htmlFor="file">Choose a file </label>
                                        or drag JSON files here and waiting for uploading
                                    </p>
                                </> : <p><strong>Uploading</strong></p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Upload;
