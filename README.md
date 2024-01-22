# React Music Player Interface with Music Upload Form

This is a comprehensive React component project that replicates a music player interface with an integrated music upload form. The project includes various components, state management using the React Context API, and features such as song listing, playing all songs, adding all songs to a queue, and simulating a music upload process.

## Component Structure

- **components/**
  - `AddAllButton.js`: Component for adding all songs to a queue (simulated).
  - `MusicUploadForm.js`: Component for the music upload form.
  - `PlayAllButton.js`: Component for playing all songs (simulated).
  - `SongList.js`: Component to display the list of songs.
  - `SongRow.js`: Subcomponent to render individual song details within SongList.
- **context/**
  - `MusicContext.js`: React context and provider for managing global state related to music.
- **data.js**: Initial data for songs.
- **parseActorAndSongName.js**: The `parseActorAndSongName` function is designed to extract actor and song names from file names following a specific structure. The expected structure is as follows: **{ActorName} - {SongName}.mp3** .
- **App.css**: Global styles for the application.
- **App.js**: Main component where other components are assembled. It includes the context provider.
- **index.css**: Global styles affecting the entire application.
- **index.js**: Entry point of the React application.
- **...**

## State Management Approach

The project utilizes the React Context API for state management. The `MusicContext` provides a global state for managing the list of songs and the uploaded songs. The `MusicProvider` initializes the context with the initial data and allows the addition of dynamically uploaded songs.

## Instructions to Run Locally

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/music-player.git
   cd react-music-player
   ```
