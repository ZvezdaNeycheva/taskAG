 export const getAllPics = (req, res) => {
    res.status(200).json({
      id: req.id,
      picUrl:''
    })
};

export const findPicById = (req, res) => {
    
};

export const editPicById = (req, res) => {
    res.status(200).json({
      id:'',
      picUrl:''
    })
};

export const deletePicById = (req, res) => {
    res.status(200).json({
      id:'',
      picUrl:''
    })
};
