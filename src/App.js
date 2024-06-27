import React, { Component } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [
        {
          title: 'Inception',
          description: 'A thief who steals corporate secrets through the use of dream-sharing technology.',
          posterURL: 'https://via.placeholder.com/150',
          rating: 8.8,
        },
        {
          title: 'Interstellar',
          description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
          posterURL: 'https://via.placeholder.com/150',
          rating: 8.6,
        },
      ],
      newMovie: {
        title: '',
        description: '',
        posterURL: '',
        rating: '',
      },
      filterTitle: '',
      filterRating: '',
    };
  }

  handleTitleChange = (filterTitle) => {
    this.setState({ filterTitle });
  };

  handleRatingChange = (filterRating) => {
    this.setState({ filterRating });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newMovie: {
        ...prevState.newMovie,
        [name]: value,
      },
    }));
  };

  addMovie = () => {
    this.setState((prevState) => ({
      movies: [...prevState.movies, prevState.newMovie],
      newMovie: { title: '', description: '', posterURL: '', rating: '' },
    }));
  };

  getFilteredMovies = () => {
    const { movies, filterTitle, filterRating } = this.state;
    return movies.filter((movie) => {
      return (
        (filterTitle === '' || movie.title.toLowerCase().includes(filterTitle.toLowerCase())) &&
        (filterRating === '' || movie.rating >= parseFloat(filterRating))
      );
    });
  };

  render() {
    const { newMovie, filterTitle, filterRating } = this.state;
    const filteredMovies = this.getFilteredMovies();

    return (
      <div className="App">
        <h1>Movie App</h1>
        <Filter
          title={filterTitle}
          rating={filterRating}
          onTitleChange={this.handleTitleChange}
          onRatingChange={this.handleRatingChange}
        />
        <MovieList movies={filteredMovies} />
        <div className="add-movie">
          <h2>Add a New Movie</h2>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={newMovie.title}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newMovie.description}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="posterURL"
            placeholder="Poster URL"
            value={newMovie.posterURL}
            onChange={this.handleInputChange}
          />
          <input
            type="number"
            name="rating"
            placeholder="Rating"
            value={newMovie.rating}
            onChange={this.handleInputChange}
          />
          <button onClick={this.addMovie}>Add Movie</button>
        </div>
      </div>
    );
  }
}

export default App;
