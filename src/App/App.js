import React, {useState,useRef} from 'react';
import "./styles.scss";

 function App(){
    const [data,setData] = useState(null);
     const ref = useRef(null);
     const [upload,setUpload] = useState(false);
     const overDragFile = (e) => {
         e.preventDefault();
         console.log('dragOver');
         if(ref !== null){
             ref.current.style.backgroundColor = '#d1d7d7';
         }
     }

     const enterDragFile = (e) => {
         e.preventDefault();
     }

     const exitDragFile = (e) => {
         e.preventDefault();
         console.log('dragLeave');
         if(ref !== null){
             ref.current.style.backgroundColor = '#e3e8f1';
         }
     }

     const getDragFile = (e) => {
         e.preventDefault();
         if(ref !== null){
             ref.current.style.backgroundColor = '#e3e8f1';
         }
         const file = e.dataTransfer.files[0];
         console.log(file);
         if(file!== undefined){
            setUpload(true);
         }
         if(validate(file)){
             const reader = new FileReader();
             reader.readAsText(file);
             reader.onload = (event) => {

                 setData(JSON.parse(event.target.result));
             };
         }
     }

     const validate  = (file) =>{
         const validTypes = 'application/json';
         if(validTypes.indexOf(file.type) === -1) {
             return false;
         }
         return true;
     }

        return (
            <div className="wrap">
                    <div className='logo'>
                        <div className='limited'>
                            <img src="/asset/logo.svg" alt=""/>
                        </div>
                    </div>
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
                    <div className="limited list-wrap">
                        {
                            data !== null &&
                            data.map((item,index)=>
                                <div className='item-wrap' key={index}>
                                    <div className='item'>
                                        {item.Name}
                                    </div>
                                </div>
                            )
                        }
                    </div>
            </div>
        );
}


export default App;
