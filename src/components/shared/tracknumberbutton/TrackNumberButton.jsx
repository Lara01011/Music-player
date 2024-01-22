import React from 'react';
import { ArrowsVertical, Chevrone } from '../../svg'; 
import './TrackNumberButton.css'; 

const TrackNumberButton = () => {
  const handleTrackNumberfilter = () => {
    console.log('Track number filter button');
  };

  return (

<div className="track-number-conteiner">
<button className="track-number-button" onClick={handleTrackNumberfilter}>
  <div className='track-number-svg-wrapper'>
  <ArrowsVertical /> 
  </div>
  {window.innerWidth > 900 && <span>Track Number</span>}
</button>
<button className='chevrone-dropdown-arrows-vertical'>
  <Chevrone/>
</button>
</div>
  );
};

export default TrackNumberButton;
