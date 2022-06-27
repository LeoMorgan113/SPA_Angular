(function (){
    'use strict';

    angular.module('lunchChecker',[])
        .controller('lunchCheckerController', lunchCheckerController);

    function lunchCheckerController($scope){
        $scope.menu = '';
        $scope.answer = '';
        $scope.color = 'black';
        $scope.borderColor = '#ccc';

        $scope.lunchChecker = function (){
            let valuesArr = $scope.menu.split(',');
            let filteredArr = valuesArr.filter(value => value.trim()!='');
            if(filteredArr.length>3){
                $scope.answer = 'Too much!';
                $scope.color = '#00ff15';
                $scope.borderColor = '#00ff15';
            }else if(filteredArr.length===0){
                $scope.answer = 'Please enter data first';
                $scope.color = '#ff0000';
                $scope.borderColor = '#ff0000';
            }else{
                $scope.answer = 'Enjoy!';
                $scope.color = '#00ff15';
                $scope.borderColor = '#00ff15';
            }

        }
    }
})();