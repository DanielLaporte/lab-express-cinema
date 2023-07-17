const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model');

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));

router.get('/movies', (req, res, next) => {
  Movie.find()
    .then((movies) => {
      res.render('movies', { movies, isMoviesPage: true });
    })
    .catch((err) => {
      res.send(`Error in /movies: ${err}`);
    });
});

router.get('/movies/:id', (req, res, next) => {
  Movie.findById(req.params.id)
    .then((movie) => {
      res.render('movie-details', { movie, isIdPage: true });
    })
    .catch((err) => next(err));
});

module.exports = router;