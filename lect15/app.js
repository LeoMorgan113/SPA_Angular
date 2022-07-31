(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = [ '$scope', '$filter', '$injector', '$timeout'];
    function CounterController($scope, $timeout){
        $scope.counter = 0;

        // $scope.upCounter = function (){
        //     $timeout(function (){
        //         $scope.counter++;
        //         console.log('Counter incremented');
        //     }, 1000);
        // }

        $scope.upCounter = function (){
            setTimeout(function (){
                $scope.$apply(function (){
                    $scope.counter++;
                    console.log('Counter incremented');
                });
            }, 1000);
        }

        // $scope.upCounter = function (){
        //     setTimeout(function (){
        //         $scope.counter++;
        //         console.log('Counter incremented');
        //         $scope.$digest();
        //     }, 1000);
        //
        // }
    }
})();