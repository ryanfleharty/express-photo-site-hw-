const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');

router.get('/', (req,res) => {
  Photos.find((err, foundPhotos)=>{
    res.render('photos/index.ejs', {
      Photos: foundPhotos
    });
  });
});

router.get('/new', (req,res) => {
  res.render('photos/new.ejs');
});

router.get('/:id', (req,res) => {
  Photos.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs',
      {Photo: foundPhoto}
    )
  });
});

router.post('/new', (req,res) => {
  Photos.create(req.body, (err, createdPhoto) => {
    if(err){
      console.log(err);
    }else{
      res.redirect('/photos');
    }
  });
});
router.delete('/:id', (req,res) => {
  Photos.findByIdAndRemove(req.params.id, () => {
    res.redirect('/photos');
  });
});
module.exports = router;
