import 'Home.css'
import { useState, useEffect } from 'react'
import { getAllPics, uploadPic, editPicById, deletePicById } from '../services/services.js';

export function Home() {
    const [pic, setPic] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')

    const handleEditPic =async(id)=>{
        await editPicById(id);
    }

    const handleDeletePic =async(id)=>{
        await deletePicById(id);
    }

    const handleUploadPic = async(file) => {
        await uploadPic(file);
    };
    const handleGetAllPics = async () => {
        const pictures = await getAllPics();
        setPic(pictures);
    };

    useEffect(() => {
        handleGetAllPics()
    }, [pic])

    return (
        <>
            <div>
                <label htmlFor="title"></label>
                <input id='title' type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <label htmlFor="description"></label>
                <input id='description' type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />

                <label htmlFor="upload"></label>
                <input id='upload' type="file" accept="image/*" value={selectedImage} onChange={(event) => { setSelectedImage(event.target.files[0]) }} />
                <button onClick={() => { handleUploadPic(file) }}>upload picture</button>
            </div>
            <div>
                <button onClick={handleGetAllPics}> see pictures</button>
            </div>
            <div className="homepage">
                {pic.map((p) => {
                    <div key={p.id}>
                        <p>{p.title}</p>
                        <p>{p.description}</p>
                        <img src={pic.picUrl} alt={p.title} />
                        <button onClick={() => { handleEditPic(p.id) }}>edit</button>
                        <button onClick={() => { handleDeletePic(p.id) }}>delete</button>

                    </div>
                })}
            </div>
        </>
    )
}
