import React, { useContext } from 'react';
import SongRow from '../SongRow/SongRow';
import { MusicContext } from '../../../context/MusicContext';

const SongList = () => {
  const { songs } = useContext(MusicContext);
  return (
    <>
      
      {
      songs.length?
        songs.map((item, index) => (
          <div key={index}>
            <SongRow  song={item} />
          </div>
        )):
        <div>Empty list</div>
      }
    </>
  );
};

export default SongList;
