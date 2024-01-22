import React from 'react';
import { Chevrone, Play } from '../../svg'; 
import './PlayAllButton.css'; 

const PlayAllButton = () => {
  const handlePlayAll = () => {
    console.log('Play All clicked');
  };
  
  return (
    <div className="play-all-conteiner">
    <button className="play-all-button" onClick={handlePlayAll}>
      <div className='play-svg-wrapper'>
        <Play /> 
      </div>
      {window.innerWidth > 900 && <span>Play All</span>}
    </button>
    <button className='chevrone-dropdown'>
      <Chevrone/>
    </button>
    </div>
  );
};

export default PlayAllButton;
