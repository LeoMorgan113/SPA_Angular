(function (){
    'use strict';

    angular.module('DIApp', [])
        .controller('DIController', ['$scope', '$filter', '$injector',DIController])

        function DIController($scope, $filter, $injector){
            $scope.name = 'Leo Morgan';

            $scope.upper = function (){
                let upCase = $filter('uppercase');
                $scope.name = upCase($scope.name);
            };
            console.log($injector.annotate(DIController))
        }


})();