const express = require('express');
const router = express.Router();
const Photos = require('../models/photos');
const Users = require('../models/users');

router.get('/', (req,res) => {
  Photos.find((err, foundPhotos)=>{
    res.render('photos/index.ejs', {
      Photos: foundPhotos
    });
  });
});

router.get('/new', async (req,res) => {
  const foundUsers = await Users.find({});
  res.render('photos/new.ejs', {Users: foundUsers});
});

router.get('/:id', (req,res) => {
  Photos.findById(req.params.id, (err, foundPhoto) => {
    res.render('photos/show.ejs',
      {Photo: foundPhoto}
    )
  });
});

router.post('/new', async (req,res) => {
  console.log(req.body)
  try{
    let user = req.body.user;
    user = await Users.findById(user);
    const photo = await Photos.create(req.body)
    user.photos.push(photo._id);
    await user.save();
    res.redirect('/photos');
  }catch(err){
    console.log(err);
  }
});

router.delete('/:id', (req,res) => {
  Photos.findByIdAndRemove(req.params.id, () => {
    res.redirect('/photos');
  });
});
module.exports = router;
