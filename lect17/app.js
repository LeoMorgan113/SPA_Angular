(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = [ '$scope', '$filter', '$injector'];
    function ShoppingListController($scope){
        $scope.shoppingList1 = ['eggs', 'bread', 'yogurt', 'rice'];

        $scope.shoppingList2 = [
            {
                name: 'Cookies',
                quantity: "2"
            },
            {
                name: 'Donuts',
                quantity: "3"
            },
            {
                name: 'Pepsi',
                quantity: "4"
            },
            {
                name: 'Choco bars',
                quantity: "5"
            },
        ];

        $scope.addNewItem = function (){
            let newItem = {
                name: $scope.newItemName,
                quantity: $scope.newItemQuantity
            }

            $scope.shoppingList2.push(newItem)

        }
    }

})();