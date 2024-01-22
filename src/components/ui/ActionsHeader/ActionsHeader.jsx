import React from 'react';
import AddAllButton from "../../shared/AddAllButton";
import FilterSearch from "../../shared/FilterSearch";
import PlayAllButton from "../../shared/PlayAllButton";
import TrackNumberButton from "../../shared/TrackNumberButton";
import './ActionsHeader.css'; 

export const ActionsHeader = () => {
    return (
        <div className="actions-header">
            
            <div className="actions-header-1">
            <PlayAllButton />
            <AddAllButton />
            </div>
            <div className="actions-header-2">
            <TrackNumberButton />
            <FilterSearch />
            </div>
     </div>
        
    );
};
