juke.directive('songTable', function(PlayerFactory){
  return {
    templateUrl: '/js/song/song-table.template.html',
    scope: {
      songs: '='
    },
    link: function(scope, element){
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


juke.directive('doubleClick', function () {
  return {
    restrict: 'A',
    // scope: {
    //   doubleClick: '&'
    // },
    link: function (scope, element) {
      element.on('dblclick', function(){
        scope.toggle(scope.song);
        // scope.doubleClick();
      })
    }
  }
});
