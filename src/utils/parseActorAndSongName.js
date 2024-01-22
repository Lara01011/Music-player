export const parseActorAndSongName = (fileName) => {
  const separatorIndex = fileName.indexOf('–');
  if (separatorIndex !== -1) {
    const actorName = fileName.slice(0, separatorIndex).trim();
    const songName = fileName.slice(separatorIndex + 1, -4).trim(); 
    return { actorName, songName };
  } else {
    return { actorName: 'Unknown Actor', songName: 'Unknown Song' };
  }
};

