const mongoose = require('mongoose');
const Movie = require('../models/Movie.model');

const movies = [
  {
    title: 'A Wrinkle in Time',
    director: 'Ava DuVernay',
    stars: ['Storm Reid', 'Oprah Winfrey', 'Reese Witherspoon'],
    image: 'https://example.com/cinema1.jpg',
    description: 'Movie 1 description',
    showtimes: ['13:00', '15:30', '18:00', '20:10', '22:40']
  },
  // Agrega aquí las otras películas
];

const seedMovies = async () => {
  try {
    await Movie.deleteMany(); // Eliminar películas existentes
    await Movie.create(movies); // Crear nuevas películas
    console.log('Movies seeded successfully');
    mongoose.connection.close();
  } catch (error) {
    console.log('Error seeding movies:', error);
    mongoose.connection.close();
  }
};

seedMovies();