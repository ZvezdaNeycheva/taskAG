import express from 'express';
const app = express();
app.use(express.json());
const port = 3000;

let uuid= ()=>{ self.crypto.randomUUID()};

const pics = [{
    id: uuid,
    picUrl: '',
    title: 'title',
    description: 'description',
  }];

  
app.get('/pics', (req, res) => {
    if (req.query.search) {
      res.json(pics.filter((pic) => pic.id.includes(req.query.search)));
    }
  
    res.json(pics);
  });
  
  app.get('/pics/:id', (req, res) => {
    const pic = pics.find((pic) => pic.id === req.params.id);
    if (!pic) {
      res.sendStatus(404);
      return;
    }
  
    setTimeout(() => {
    res.json(pic);
    }, 1000);
  });
  
  app.post('/pics', (req, res) => {
    const pic = {
      id: req.body.uuid,
      picUrl: req.body.picUrl,
      title: req.body.title,
      description: req.body.description,
    };
    pics.push(pic);
  
    res.json(pic);
  });
  
  app.put('/pics/:id', (req, res) => {
    const pic = pics.find((pic) => pic.id === req.params.id);
  
    if (!pic) {
      res.sendStatus(404);
      return;
    }
    
    pic.picUrl= req.body.picUrl,
    pic.title= req.body.title
    pic.description= req.body.description,

    res.json(pic);
  });
  
  app.delete('/pics/:id', (req, res) => {
    const index = pics.findIndex((pic) => pic.id === req.params.id);
  
    if (index === -1) {
      res.sendStatus(404);
      return;
    }
    pics.splice(index, 1);
  
    res.sendStatus(204);
  });
  
  app.listen(3000, () => {
    console.log(`Server listening on port ${port}`);
  });
