import 'Home.css'
import { useState, useEffect } from 'react'
import { getAllPics } from '../services/services.js';

export function Home(){
    const [pic, setPic] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    const handleUploadPic = (file)=>{

    };
    const handleGetAllPics = async()=>{
        const pictures = await getAllPics();
        setPic(pictures);
    };

    useEffect(()=>{
        handleGetAllPics()
    },[pic])

    return(
        <>
        <div>
            <label htmlFor="upload"></label>
            <input type="file" accept="image/*" value={selectedImage} onChange={(event) => {setSelectedImage(event.target.files[0]) }}/>
            <button onClick={()=>{handleUploadPic(file)}}>upload picture</button>
        </div>
        <div>
            <button onClick={handleGetAllPics}> see pictures</button>
        </div>
        <div className="homepage">
        {pic.map((p)=>{
            <div key={p.id}> 
            
            <img src={pic.picUrl} alt="pic" />
            <button onClick={()=>{handleEditPic(idPic)}}>edit</button>
            <button onClick={()=>{handleDeletePic(idPic)}}>delete</button>
            
            </div>
        })}
        </div>
        </>
    )
}