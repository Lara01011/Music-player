import React from 'react';
import SongList from './components/ui/SongsList/SongList';
import MusicUploadForm from './components/ui/MusicUploadForm/MusicUploadForm';
import { MusicProvider } from './context/MusicContext';
import './App.css'
import { ActionsHeader } from './components/ui/ActionsHeader/ActionsHeader';
import SongListHeader from './components/ui/SongListHeader/SongListHeader';
const App = () => {
  return (
    <MusicProvider>
      <div className="container">
        <ActionsHeader/>
        <SongListHeader/>
        <SongList />
        <MusicUploadForm />
      </div>
    </MusicProvider>
  );
};

export default App;
