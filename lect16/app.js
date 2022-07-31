(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('BindingController', BindingController);

    BindingController.$inject = [ '$scope', '$filter', '$injector'];
    function BindingController($scope){
        $scope.firstName="Leo";
        // $scope.fullName = "";

        $scope.showNumberOfWatchers = function (){
            console.log('# of Watchers: ', $scope.$$watchersCount)
        }

        $scope.setFullName = function (){
            $scope.fullName = $scope.firstName + " Kor";
        }

        $scope.logFirstName = function (){
            console.log("First name is: ", $scope.firstName);
        }

        $scope.logFullName = function (){
            console.log('Full name is', $scope.fullName);
        }

        // $scope.$watch('onceCounter', function (newValue, oldValue){
        //     console.log('oldValue', oldValue, 'newValue', newValue)
        // });
        //
        // $scope.$watch('counter', function (newValue, oldValue){
        //     console.log('Counter oldValue', oldValue, ', Counter newValue', newValue)
        // });
    }

})();