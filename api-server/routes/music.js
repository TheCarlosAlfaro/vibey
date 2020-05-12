const router = require('express').Router();
let Music = require('../models/music.model');

router.route('/').get((req, res) => {
  Music.find()
    .then((music) => res.json(music))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const favoriteSong = req.body.favoriteSong;

  const newMusic = new Music({
    username,
    favoriteSong,
  });

  newMusic
    .save()
    .then(() => res.json('Music added!'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Music.findById(req.params.id)
    .then((music) => res.json(music))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Music.findByIdAndDelete(req.params.id)
    .then(() => res.json('Music deleted.'))
    .catch((err) => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Music.findById(req.params.id)
    .then((music) => {
      music.username = req.body.username;
      music.favoriteSong = req.body.favoriteSong;

      music
        .save()
        .then(() => res.json('Music Updated!'))
        .catch((err) => res.status(400).json('Error: ' + err));
    })
    .catch((err) => res.status(400).json('Error: ' + err));
});

module.exports = router;
