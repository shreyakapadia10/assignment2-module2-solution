(function () {
	'use strict';

	angular.module("ShoppingListCheckOff", [])
	.controller("ToBuyController", ToBuyController)
	.controller("AlreadyBoughtController", AlreadyBoughtController)
	.service("ShoppingListCheckOffService", ShoppingListCheckOffService);

	ToBuyController.$inject = ["ShoppingListCheckOffService"];
	AlreadyBoughtController.$inject = ["ShoppingListCheckOffService"];

	function ToBuyController(ShoppingListCheckOffService) {
		var tbc = this;

		tbc.itemName = "";
		tbc.itemQuantity = "";

		tbc.to_buy = ShoppingListCheckOffService.getBuyList();

		tbc.buyItem = function (itemIndex) {
			ShoppingListCheckOffService.buyItem(itemIndex);
		};
	};

	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var abc = this;

		abc.already_bought = ShoppingListCheckOffService.getBoughtList();
	};

	function ShoppingListCheckOffService() {
		var service = this;

		var to_buy = [
		{
			name: "Cookies",
			quantity: 10
		},
		{
			name: "Cakes",
			quantity: 5
		},
		{
			name: "Biscuits",
			quantity: 3
		},
		{
			name: "Pastry",
			quantity: 10
		},
		{
			name: "Chips",
			quantity: 6
		}];

		var already_bought = [];

		service.buyItem = function (itemIndex) {
			var removedItem = to_buy.splice(itemIndex, 1);	
			already_bought.push(removedItem[0]);
		};

		service.getBuyList = function () {
			return to_buy;
		};

		service.getBoughtList = function () {
			return already_bought;
		};
	};

})();