
export const getAllPics = async(search) => {
      const result = await fetch(`http://localhost:3000/pics?search=${search}`)
      
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    
      return result.json();
    };
    
    export const getPicById = async(id) => {
      const result = await fetch(`http://localhost:3000/pics/${id}`)
      
      if (!result.ok) {
        return console.log('Something went wrong');
      }
    
      return result.json();
    };
    
    export const uploadPic = async(pic) => {
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
    
    export const editPicById = async(pic) => {
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
    export const deletePicById = async(pic) => {
        const result = await fetch(`http://localhost:3000/pics/${pic.id}`, {
          method: "DELETE",
          body: JSON.stringify(pic)
        });
      
        if (!result.ok) {
          return console.log('Something went wrong');
        }
      };
