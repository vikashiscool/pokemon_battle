app.controller('PokemonCtrl', function($scope, PokemonModel) {

  PokemonModel.get().then(
    function(response){
      $scope.pokemons = response;
    },
    function(rejection){
      console.log("Error fetching pokemon")
    }
  );

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

});
