import { db } from "./firebase";
import { ref, push, get, query, equalTo, orderByChild, update } from 'firebase/database';

const refPic = db.ref('pictures');


// export const uploadPic =async(file)=>{
//     refPic.push().set({
//         id: '',
//         picUrl: '',
//         title: ,
//         description: ,
//       });
// }

export const getAllPics = async (search) => {
    const snapshot = await get(query(ref(db, 'pictures'), orderByChild('createdOn')));
    if (!snapshot.exists()) {
      return [];
    }
  
    const pic = Object.keys(snapshot.val()).map(key => ({
      id: key,
      ...snapshot.val()[key],
      createdOn: new Date(snapshot.val()[key].createdOn).toString(),
      likedBy: snapshot.val()[key].likedBy ? Object.keys(snapshot.val()[key].likedBy) : [],
    }))
      .filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
  
    return pic;
  };
export const findPicById =async(id)=>{

}
export const editPicById =async(id)=>{

}
export const deletePicById =async(id)=>{

}

export const getAllpics = async(search) => {
      const result = await fetch(`http://localhost:3000/pics?search=${search}`)
      
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    
      return result.json();
    };
    
    export const getpicById = async(id) => {
      const result = await fetch(`http://localhost:3000/pics/${id}`)
      
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    
      return result.json();
    };
    
    export const addpic = async(pic) => {
      const result = await fetch("http://localhost:3000/pics", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pic)
      });
    
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    };
    
    export const updatepic = async(pic) => {
      const result = await fetch(`http://localhost:3000/pics/${pic.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(pic)
      });
    
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    };
