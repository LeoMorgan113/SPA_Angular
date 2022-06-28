(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', DIController)
        .filter('change', changeWord)
        .filter('changeText', changeSomeText);

    DIController.$inject = [ '$scope', '$filter', '$injector', 'changeFilter']
    function DIController($scope, $filter, $injector, changeFilter){
        $scope.name = 'Leo Morgan';
        $scope.text = 'Some shit costs'
        $scope.someText = "Let's change fact in this string";

        $scope.upper = function (){
            $scope.name = $filter('uppercase')($scope.name);
        };
        // console.log($injector.annotate(DIController));
        $scope.cost = .45;
        $scope.text = changeFilter($scope.text);

    }

    function changeWord(){
        return function (input){
            input = input || "";
            input = input.replace('shit', 'thing');
            return input;
        }
    }

    function changeSomeText(){
        return function (input, text){
            input = input || "";
            input = input.replace(text, 'text');
            return input;
        }
    }

})();