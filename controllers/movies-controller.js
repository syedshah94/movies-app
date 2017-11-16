const Movie = require('../models/Movie');

const movieController = {};

movieController.index = (req, res, next) => {
  Movie.findAll()
    .then(movies => {
      res.json({
        message: 'ok',
        data: { movies },
      });
    }).catch(next)
};

movieController.show = (req, res, next) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.json({
        message: 'ok',
        data: { movie },
      });
    }).catch(next);
};

movieController.create = (req, res, next) => {
  Movie.create({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, req.user.id).then(movie => {
    res.json({
      message: 'Movie added successfully!',
      data: { movie },
    });
  }).catch(next);
};

movieController.update = (req, res, next) => {
  Movie.update({
    title: req.body.title,
    description: req.body.description,
    genre: req.body.genre,
  }, req.params.id).then(movie => {
    res.json({
      message: 'Movie updated successfully!',
      data: { movie },
    });
  }).catch(next);
};

movieController.delete = (req, res, next) => {
  Movie.destroy(req.params.id)
    .then(() => {
      res.json({
        message: 'Movie deleted successfully!',
      });
    }).catch(next);
}

module.exports = movieController;
