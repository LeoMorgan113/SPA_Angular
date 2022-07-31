(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = [ '$scope', '$filter', '$injector'];
    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.counter = 0;
        $scope.name="Leo"

        $scope.showNumberOfWatchers = function (){
            console.log('# of Watchers: ', $scope.$$watchersCount)
        }

        $scope.countOnce = function (){
            $scope.onceCounter = 1;
        }

        $scope.upCounter = function (){
            $scope.counter++;
        }

        $scope.$watch(function (){
            console.log('Digest loop fired!')
        })

        // $scope.$watch('onceCounter', function (newValue, oldValue){
        //     console.log('oldValue', oldValue, 'newValue', newValue)
        // });
        //
        // $scope.$watch('counter', function (newValue, oldValue){
        //     console.log('Counter oldValue', oldValue, ', Counter newValue', newValue)
        // });
    }

})();