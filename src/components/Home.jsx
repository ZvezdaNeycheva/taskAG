import './Home.css'
import { useState, useEffect } from 'react'
import { getAllPics, uploadPic, editPicById, deletePicById, getPicById } from '../services/services.js';
import { useSearchParams } from "react-router-dom";

export function Home() {
    const [pic, setPic] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [searchParams, setSearchParams] = useSearchParams();

    const search = searchParams.get('search') || '';

    const setSearch = (value) => {
      setSearchParams({search: value});
    };

    const handleSearch =async(value)=>{
        setSearchParams({search: value});

        // await getPicById(value);
    } 
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
        const pics = await getAllPics();
        setPic(pics);
    };

    useEffect(() => {
        handleGetAllPics(search).then(setPic)
    }, [search])
e => setSearch(e.target.value)
    return (
        <>
        <div>
        <label htmlFor="search">search</label>
                <input id='search' type="text" value={search} onChange={(event) => { setSearch(event.target.value) }} /> 
                <button onClick={()=>{handleSearch(search)}}></button>
        </div>
            <div>
                <label htmlFor="title">title</label>
                <input id='title' type="text" value={title} onChange={(event) => { setTitle(event.target.value) }} />
                <label htmlFor="description">description</label>
                <input id='description' type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} />

                <label htmlFor="upload">upload</label>
                <input id='upload' type="file" accept="image/*" value={selectedImage} onChange={(event) => { setSelectedImage(event.target.files[0]) }} />
                <button onClick={() => { handleUploadPic(file) }}>upload picture</button>
            </div>
            <div>
                <button onClick={handleGetAllPics}> see pics</button>
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