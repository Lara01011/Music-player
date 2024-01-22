import React, { createContext, useState } from 'react';
import { mainSongs } from '../data';

export const MusicContext = createContext();

export const MusicProvider = ({ children }) => {
  const [songs, setSongs] = useState(mainSongs);
  const addSong = ({actorName, songName, file}) => {
    const newSong = {
      id: songs.length + 1,
      songName: songName,
      artistName: actorName,
      trackNumber: songs.length + 1,
      file: file,
    };
    setSongs([...songs, newSong]);
  };

  return (
    <MusicContext.Provider value={{ songs, addSong }}>
      {children}
    </MusicContext.Provider>
  );
};
