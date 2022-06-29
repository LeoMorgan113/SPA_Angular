(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('CounterController', CounterController);

    CounterController.$inject = [ '$scope', '$filter', '$injector'];
    function CounterController($scope){
        $scope.onceCounter = 0;
        $scope.showNumberOfWatchers = function (){
            console.log('# of Watchers: ', $scope.$$watchersCount)
        }

        $scope.countOnce = function (){
            $scope.onceCounter = 1;
        }
    }

})();