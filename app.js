(function() {
  "use strict";

  angular.module("ShoppingListCheckOff", [])
    .controller("ToBuyShoppingController", ToBuyShoppingController)
    .controller("AlreadyBoughtShoppingController", AlreadyBoughtShoppingController)
    .service("ShoppingListCheckOffService", ShoppingListCheckOffService);
  ToBuyShoppingController.$inject = ["ShoppingListCheckOffService"];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var list = this;
    list.items = ShoppingListCheckOffService.getItemsToBuy();
    list.checkOff = function(itemIndex) {
      console.log("Checking off item ", itemIndex);
      ShoppingListCheckOffService.checkOff(itemIndex);
    };
  }
  AlreadyBoughtShoppingController.$inject = ["ShoppingListCheckOffService"];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var list = this;
    list.items = ShoppingListCheckOffService.getItemsBought();
  }
  // ShoppingListCheckOffService.$inject = [];
  function ShoppingListCheckOffService() {
    var service = this;

    var itemsToBuy = [
      { name: "Lays", quantity: 60 },
      { name: "Coke", quantity: 70 },
      { name: "Olpers", quantity: 80 },
      { name: "Cheetos", quantity: 90 },
      { name: "Fruita Vitals", quantity: 20 },
      { name: "Tapal Green Tea", quantity: 10 },
      ];

    var itemsBought = [];

    service.getItemsToBuy = function () {
      return itemsToBuy;
    };

    service.getItemsBought = function () {
      return itemsBought;
    };

    service.checkOff = function (itemIndex) {
      itemsBought.push(itemsToBuy[itemIndex]);
      itemsToBuy.splice(itemIndex, 1);
    };
  }
})();
