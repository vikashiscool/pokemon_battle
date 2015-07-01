var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', function($scope) {
  $scope.pokemon = res.results.collection1; //refers to mock_data.js

  $scope.iChooseYou = function(pokemon){
    if (!$scope.image1){
      $scope.image1 = pokemon.image.href;
    } else {
      $scope.image2 = pokemon.image.href;
    }
  }

  $scope.fight = function(){
    $scope.image2 = null;
  }
});
