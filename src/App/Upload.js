import React,{useRef} from 'react';
import {addressLoading} from "../setup/loading";
import {validateUploadFile} from "./__action/validateUploadFile";
import {addNameToAddress} from "./__action/addNameToAddress";


function Upload({setData,upload,setUpload}){
    const ref = useRef(null);
    const overDragFile = (e) => {
        e.preventDefault();
        if(ref !== null){
            ref.current.style.backgroundColor = '#d1d7d7';
        }
    }

    const enterDragFile = (e) => {
        e.preventDefault();
    }

    const exitDragFile = (e) => {
        e.preventDefault();
        if(ref !== null){
            ref.current.style.backgroundColor = '#e3e8f1';
        }
    }

    const getDragFile = (e) => {
        e.preventDefault();
        setData(addressLoading)
        if(ref !== null){
            ref.current.style.backgroundColor = '#e3e8f1';
        }
        const file = e.dataTransfer.files[0];
        if(file!== undefined){
            setUpload(true);
        }
        if(validateUploadFile(file)){
            const reader = new FileReader();
            reader.readAsText(file);
            reader.onload = (event) => {
                addNameToAddress(JSON.parse(event.target.result),setData,setUpload);
            };
        }
    }
    return(
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
                                    <p><strong>Drag JSON files</strong>  here and waiting for uploading</p>
                                </> :    <p><strong>Done</strong> </p>

                        }
                    </div>
                </div>
            </div>
        </>
    )
}


export default Upload;
