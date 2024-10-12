import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMovies = createAsyncThunk(
  "movies/fetchMovies",
  async (searchTerm) => {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const response = await axios.get(
      `http://www.omdbapi.com/?s=${searchTerm}&apikey=${API_KEY}`
    );
    return response.data.Search.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
      type: movie.Type,
    }));
  }
);

const initialState = {
  movies: [],
  watchlists: {},
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    loadUserWatchlists: (state, action) => {
      const userEmail = action.payload;
      const storedWatchlists = JSON.parse(localStorage.getItem(userEmail));
      state.watchlists = storedWatchlists || {};
    },

    saveUserWatchlists: (state, action) => {
      const userEmail = action.payload;
      localStorage.setItem(userEmail, JSON.stringify(state.watchlists));
    },

    addMovieToList: (state, action) => {
      const { listId, movie } = action.payload;

      if (state.watchlists[listId]) {
        const movieExists = state.watchlists[listId].movies.some(
          (m) => m.id === movie.id
        );

        if (!movieExists) {
          state.watchlists[listId].movies.push({ ...movie, seen: false });
        }
      }
    },

    markMovieAsSeen: (state, action) => {
      const { listId, movieId } = action.payload;
      const movie = state.watchlists[listId]?.movies.find(
        (m) => m.id === movieId
      );
      if (movie) {
        movie.seen = true;
      }
    },

    createList: (state, action) => {
      const { listId, listName, description } = action.payload;
      state.watchlists[listId] = {
        listName,
        description,
        movies: [],
      };
    },

    editList: (state, action) => {
      const { listId, listName, description } = action.payload;
      if (state.watchlists[listId]) {
        state.watchlists[listId].listName = listName;
        state.watchlists[listId].description = description;
      }
    },

    removeMovieFromList: (state, action) => {
      const { listId, movieId } = action.payload;
      if (state.watchlists[listId]) {
        state.watchlists[listId].movies = state.watchlists[
          listId
        ].movies.filter((movie) => movie.id !== movieId);
      }
    },

    removeList: (state, action) => {
      delete state.watchlists[action.payload];
    },

    toggleSeenStatus: (state, action) => {
      const { listId, movieId, isSeen } = action.payload;
      const movie = state.watchlists[listId]?.movies.find(
        (movie) => movie.id === movieId
      );
      if (movie) {
        movie.seen = isSeen;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.movies = action.payload;
        state.loading = false;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  loadUserWatchlists,
  saveUserWatchlists,
  addMovieToList,
  markMovieAsSeen,
  createList,
  editList,
  removeMovieFromList,
  removeList,
  toggleSeenStatus,
} = moviesSlice.actions;

export default moviesSlice.reducer;
