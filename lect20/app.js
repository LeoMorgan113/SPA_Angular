 (function (){
     'use strict';

     angular.module('ShoppingListApp', [])
         .controller('ShoppingListController', ShoppingListController)
         .controller('ShoppingListShowController', ShoppingListShowController)
         .service('ShoppingListService', ShoppingListService);

     ShoppingListController.$inject = ['ShoppingListService'];
     function ShoppingListController(ShoppingListService){
         let itemAdder = this;

         itemAdder.itemName = "";
         itemAdder.itemQuantity = "";

         itemAdder.addItem = function (){
             ShoppingListService.addItem(itemAdder.itemName, itemAdder.itemQuantity);
             itemAdder.itemName = "";
             itemAdder.itemQuantity = "";
         }
     }

     ShoppingListShowController.$inject = ['ShoppingListService'];
     function ShoppingListShowController(ShoppingListService){
        let showList = this;

        showList.items = ShoppingListService.getItems();

        showList.removeItem = function (itemIndex){
            ShoppingListService.removeItem(itemIndex);
        }
     }


     function ShoppingListService(){
         let service = this;
         let items = [];

         service.addItem = function (itemName, quantity){
             let item = {
                 name: itemName,
                 quantity: quantity
             };
             items.push(item);
         }

         service.removeItem = function (itemIndex){
             items.splice(itemIndex, 1);
         }

         service.getItems = function (){
             return items;
         }
     }
 })();


