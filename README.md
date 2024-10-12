# Movie Watchlist App

This project is a movie search and wishlist application built using React and Redux Toolkit. Users can search for movies, create watchlists, mark movies as seen, and store their data persistently.

## Tech Stack

- **React**: A JavaScript library for building user interfaces.
- **Redux Toolkit**: A predictable state container for JavaScript apps, used here for managing movie lists and user state.
- **OMDb API**: Used to fetch movie data by searching for titles.
- **Local Storage**: Stores user-specific watchlists, allowing for persistent data across sessions.

## Features

- **Search for Movies**: Find movies via OMDb API by searching titles.
- **User Authentication**: Store user data and manage watchlists.
- **Create Movie Watchlist**: Add movies to custom lists.
- **Remove Movies**: Remove unwanted movies from the list.
- **Mark Movies as Seen**: Keep track of movies you have watched.
- **Persistent Storage**: Watchlists are stored for individual users, ensuring they are available on refresh.

## Getting Started

### Prerequisites

Ensure you have the following installed on your machine:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

### Cloning the Repository

To clone this project, run:

```bash
git clone https://github.com/your-username/movie-watchlist-app.git
cd movie-watchlist-app
