var USE_HTTP = false;

var app = angular.module('pokemonApp', []);

app.controller('PokemonCtrl', ['$scope', '$http', function($scope, $http) {

  $scope.pokemons = USE_HTTP || res.results.collection1;
  $scope.battle = [];

  $scope.previousWinner;

  $scope.pickWinner = function(){
    var winner_idx = Math.floor(Math.random()*2)
    $scope.battle = $scope.battle.splice(winner_idx,1)
    $scope.previousWinner = $scope.battle[0].name.text;
  }

  $scope.iChooseYou = function(pokemon){
    if ($scope.battle[0]){
      $scope.battle[1] = pokemon;
    } else {
      $scope.battle.push(pokemon)
    }
  }

  $scope.reset = function(){
    $scope.battle = [];
  }

  if ( USE_HTTP ) {
    $http
         .jsonp("https://www.kimonolabs.com/api/74dfm89w?apikey=Zgn83shuWLFhlB7k5n4arKz3Z18Z5lvr&callback=JSON_CALLBACK")
         .success(function(res){
            $scope.pokemons = res.results.collection1
          })
         .error(function(res){})
  }

}]);
