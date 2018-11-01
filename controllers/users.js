const express = require('express');
const router = express.Router();
const Users = require('../models/users');
const Photos = require('../models/photos')

router.get('/new', (req,res) => {
  res.render('users/new.ejs');
});
router.post('/new', (req, res) => {
  Users.create(req.body, (err) => {
    res.redirect('/users');
  });
});
router.get('/:id', async (req,res) => {
  try{
    const user = await Users.findById(req.params.id);
    const photos = await Photos.find({user: user._id});
    console.log(photos[0].url);
    const context = {
      User: user,
      Photos: []
    }
    console.log(context.Photos);
    photos.map((photoses, i) => {
      console.log(photoses);
      context.Photos.push(photos[i].url);
    });
    res.render('users/show.ejs', context);
  }catch(err){
    console.log(err);
  }
});
router.delete('/:id', (req,res) => {
  Users.findByIdAndDelete(req.params.id, () => {
    res.redirect('/users');
  });
});
router.get('/', (req, res) => {
  Users.find((err, foundUsers) => {
    res.render('users/index.ejs', {
      Users: foundUsers
    });
  });
});


module.exports = router;
