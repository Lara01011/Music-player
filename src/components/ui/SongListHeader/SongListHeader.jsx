import React from 'react';
import './SongListHeader.css';

const SongListHeader = () => {
  return (
    <div className="song-list-header">
      <div className="song-header-item">Song Name</div>
      <div className="song-header-item">Artist Name</div>
      <div className="song-header-item">Track</div>
    </div>
  );
};

export default SongListHeader;
