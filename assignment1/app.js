(function() {
  "use strict";

  angular.module("LunchCheck", [])
  .controller("LunchCheckController", LunchCheckController);

  LunchCheckController.$inject = ["$scope"];
  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.Items = 0;
    $scope.resultString;
    $scope.resultOk = null;

    $scope.checkItems = function() {
      //Checks if anything entered in textbox or not
      if($scope.name.length > 0) {
        console.log("Items entered: " + $scope.name);
        var itemArray = $scope.name.split(",");
        console.log("Items as array: " + itemArray);
        $scope.resultString = checkItemCount(itemArray);
        $scope.resultOk=true;
      }
      else
      {
        $scope.resultString = "Please enter data first";
        $scope.resultOk = false;
      }
    };
  }
  function checkItemCount(items) {
    var itemCount = items.length;
    console.log("Number of items entered: " + itemCount);
    if(itemCount < 4)
      return "Enjoy!";
    else
      return "Too much!";
  }
})();
