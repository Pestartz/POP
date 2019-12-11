/* eslint-disable no-unused-vars */
const express = require("express");
const router = express.Router();

// Song model
const Song = require("../../models/Song");

// route GET api/songs
router.get("/", (req, res) =>{
  Song.find()
    .then(songs => res.json(songs))
});

// route POST api/songs
router.post("/", (req, res) =>{
  const newSong = new Song({
    label: req.body.label,
    author: req.body.author,
    src: req.body.src
  })
  newSong.save().then(song => res.json(song));
});

// route DELETE api/songs
router.delete('/:id', (req, res) => {
  Song.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});


module.exports = router;