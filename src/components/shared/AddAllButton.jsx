import React from 'react';
import { Add, Chevrone } from '../svg'; // Adjust path as needed
import './AddAllButton.css'; 

const AddAllButton = () => {
  const handleAddAll = () => {
    console.log('Add All clicked');
  };

  return (

<div className="add-all-conteiner">
<button className="add-all-button" onClick={handleAddAll}>
  <div className='add-svg-wrapper'>
  <Add /> 
  </div>
  <span>Add All</span>
</button>
<button className='chevrone-dropdown-add'>
  <Chevrone/>
</button>
</div>
  );
};

export default AddAllButton;
