juke.directive('albumList', function(){
  return {
    scope: {
      albums: '='
    },
    templateUrl: '/js/album/templates/album-list.html'
  }
});
