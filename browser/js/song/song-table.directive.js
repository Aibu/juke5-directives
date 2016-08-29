juke.directive('songTable', function(PlayerFactory){
  return {
    templateUrl: '/js/song/song-table.template.html',
    scope: {
      songs: '='
    },
    link: function(scope){
      scope.getCurrentSong = PlayerFactory.getCurrentSong;

      scope.isPlaying = PlayerFactory.isPlaying;

      scope.toggle = function (song) {
        if (song !== PlayerFactory.getCurrentSong()) {
          PlayerFactory.start(song, scope.songs);
        } else if ( PlayerFactory.isPlaying() ) {
          PlayerFactory.pause();
        } else {
          PlayerFactory.resume();
        }
      };
    }
  }
});
