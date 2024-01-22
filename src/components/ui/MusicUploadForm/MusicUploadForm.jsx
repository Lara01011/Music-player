// src/components/MusicUploadForm.js
import React, { useState, useContext, useEffect } from 'react';
import { MusicContext } from '../../../context/MusicContext';
import {parseActorAndSongName} from '../../../utils/parseActorAndSongName';
const MusicUploadForm = () => {
  const { addSong } = useContext(MusicContext);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadError, setUploadError] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    console.log('Upload clicked');
    if (selectedFile) {
      setUploading(true);
      setTimeout(() => {
        const { actorName, songName } = parseActorAndSongName(selectedFile.name);
        addSong({
          actorName,
          songName,
          file: selectedFile,
        });
        setSelectedFile(null);
        setUploading(false);
      }, 2000);
    } else {
      setUploadError('Please select a file to upload.');
      setUploading(false); 
    }
  };
  return (
    <div>
      <h2>Music Upload Form</h2>
      <input type="file" accept=".mp3, .wav" onChange={handleFileChange} />
      <p>Selected File: {selectedFile ? selectedFile.name : 'None'}</p>
      {uploading && <p>Uploading...</p>}
      {uploadError && <p style={{ color: 'red' }}>{uploadError}</p>}
      <button onClick={handleUpload} disabled={uploading || !selectedFile}>
        Upload
      </button>
    </div>
  );
};

export default MusicUploadForm;
