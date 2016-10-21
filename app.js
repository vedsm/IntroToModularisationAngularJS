angular.module("pokemonApp",[]);

angular.module("pokemonApp").controller("MyController",function($scope){
    $scope.name="pikachu";
    var updateName = function(){
        if($scope.name == "pikachu")
            $scope.name = "Charmander"
        else
            $scope.name= "pikachu"
    };
    setInterval(function(){
        $scope.$apply(updateName)
    },1000);
    updateName();
});
