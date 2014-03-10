var wdi = wdi || {};

//def class Simple Controller
wdi.SimpleController = function($scope){
  
  // @welcome: The @ is like the $scope like an instance variable 
  $scope.welcome = "Hello folks!";
  
  $scope.names=['Steve', 'Ashley', 'Amanda', 'Graham', 'Amy', 'Joel', 'Calvin'];
};