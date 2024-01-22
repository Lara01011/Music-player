import React from 'react';
import { Chevrone, Heart, Play, Share, Tick } from '../../svg';
import './SongRow.css'; 

const SongRow = ({ song }) => {
  return (
    <div className="song-row">
      <div style={{fontSize:16}}><Play/></div>
      <span>{song?.songName}</span>
      <span>{song?.artistName}</span>
      <span>{song?.trackNumber}</span>
      <div className="icons-container">
        <div style={{fontSize:16}}><Heart/></div>
        <div style={{fontSize:16}}><Tick/></div>
        <div style={{fontSize:16}}><Share/></div>
        <div style={{fontSize:16}}><Chevrone/></div>
      </div>
    </div>
  );
};

export default SongRow;
