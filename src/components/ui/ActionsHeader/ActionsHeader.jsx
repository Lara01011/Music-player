import React from 'react';
import AddAllButton from "../../shared/addallbutton/AddAllButton";
import FilterSearch from "../../shared/filtersearch/FilterSearch";
import PlayAllButton from "../../shared/playallbutton/PlayAllButton";
import TrackNumberButton from "../../shared/tracknumberbutton/TrackNumberButton";
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
