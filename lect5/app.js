(function (){
    'use strict';

    angular.module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope){
            $scope.name = '';
            $scope.totalValue = 0;
            $scope.countNumeric = function (){
                let totalNameValue = calculateNumericForString($scope.name);
                $scope.totalValue = totalNameValue;
            }

            function calculateNumericForString(str){
                let totalNStringValue = 0;
                for(let i=0; i<str.length; i++){
                    totalNStringValue += str.charCodeAt(i);
                }
                return totalNStringValue;
            }
        });
})();