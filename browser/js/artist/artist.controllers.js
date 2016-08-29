'use strict';

/* ARTISTS (PLURAL) CONTROLLER */

juke.controller('ArtistsCtrl', function ($scope, allArtists) {

  $scope.artists = allArtists;

});

/* ARTIST (SINGULAR) CONTROLLER */

juke.controller('ArtistCtrl', function ($scope, PlayerFactory, theArtist) {

  $scope.artist = theArtist;

});
