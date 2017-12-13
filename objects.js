var playlist = {'Ed Sheeran': 'Thinking Out Loud'};

function updatePlaylist(artistName, songTitle){
  playlist.artistName = songTitle;
}

function removeFromPlaylist(artistName, songTitle){
  delete playlist.artistName;
}