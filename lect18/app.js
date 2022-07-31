(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('ShoppingListController', ShoppingListController);

    ShoppingListController.$inject = [ '$scope', '$filter', '$injector'];
    function ShoppingListController($scope){
        $scope.shoppingList1 = ['eggs', 'bread', 'yogurt', 'rice'];
        // $scope.search = '';
    }

})();