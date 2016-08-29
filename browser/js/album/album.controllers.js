/* global juke */
'use strict';

/* ALBUMS (SINGULAR) CONTROLLER */

juke.controller('AlbumCtrl', function ($scope, PlayerFactory, theAlbum) {

  $scope.album = theAlbum;

});

/* ALBUMS (PLURAL) CONTROLLER */

juke.controller('AlbumsCtrl', function ($scope, allAlbums) {

  $scope.albums = allAlbums;

});
