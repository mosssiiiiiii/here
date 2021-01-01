import React from 'react';
import {toast} from 'react-toastify';
import {validateUploadFile} from "../action/validateUploadFile";
import {createNewData} from "../action/createNewData";
//styles
import './upload.scss';
import 'react-toastify/dist/ReactToastify.css';

function Upload({setData, loading, setLoading}) {
    const overDragFile = (e) => {
        e.preventDefault();
    }

    const enterDragFile = (e) => {
        e.preventDefault();
    }

    const exitDragFile = (e) => {
        e.preventDefault();

    }

    const getDragFile = (e, upload) => {
        e.preventDefault();
        setLoading(true);
        const file = upload ? e.target.files[0] : e.dataTransfer.files[0];

        if (!validateUploadFile(file)) {
            toast.error(` ${file.type} is not valid file. you are just allowed to input JSON files`)
            setLoading(false);
            return null;
        }


        const reader = new FileReader();
        reader.readAsText(file);



        reader.onload = (event) => {
            createNewData(event.target.result, setData, setLoading)
        };
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
                    >

                        {
                            !loading ?
                                <>
                                    <img src="/asset/download.svg" alt=""/>

                                    <p>
                                        <input onChange={(e) => getDragFile(e, true)} type="file"
                                               accept="application/JSON" id="file"
                                               className="inputfile"/>
                                        <label htmlFor="file">Choose a file </label>
                                        or drag JSON files here and waiting for uploading
                                    </p>
                                </> : <p><strong>Uploading...</strong></p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Upload;
