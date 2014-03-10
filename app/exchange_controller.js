wdi.ExchangeContoller = function($scope){
  $scope.convert = function(euros){
    $scope.dollars= euros + 1.35;
  };

  $scope.$watch('euros', function(newValue, oldvalue){
    console.log(newValue, oldvalue);
    $scope.isNumber = !isNaN(newValue);
  });
};