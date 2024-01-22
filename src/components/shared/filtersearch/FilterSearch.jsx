import React, { useState } from 'react';
import { Search } from '../../svg'; 
import './FilterSearch.css'; 

const FilterSearch = () => {
  const [search, setSearch] = useState('');
console.log(search)
  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input 
        type="text" 
        placeholder="Filter"
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="search-input"
      />
    </div>
  );
};

export default FilterSearch;
