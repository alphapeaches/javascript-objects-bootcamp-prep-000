var playlist = {'Ed Sheeran': 'Thinking Out Loud'};

function updatePlaylist(playlist, artistName, songTitle){
  playlist.artistName = songTitle;
}

function removeFromPlaylist(playlist, artistName, songTitle){
  delete playlist.artistName;
}