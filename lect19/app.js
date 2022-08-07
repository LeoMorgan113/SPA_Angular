 // Prototypal Inheritance

 // var parent = {
 //    value: "parentValue",
 //     obj: {
 //        objValue: "parentObjValue"
 //     },
 //     walk: function (){
 //        console.log('walking...');
 //     }
 // }
 //
 // var child = Object.create(parent);
 // console.log("CHILD - child.value: ", child.value);
 // console.log("CHILD - child.obj.value: ", child.obj.objValue);
 // console.log("PARENT - parent.value: ", parent.value);
 // console.log("PARENT - parent.obj.value: ", parent.obj.objValue);
 // console.log("parent: ", parent);
 // console.log("child: ", child);
 //
 // child.value = "childValue";
 // child.obj.objValue = "childObjValue";
 // console.log("** CHANGED CHILD - child.value: ", child.value);
 // console.log("** CHANGED CHILD - child.obj.value: ", child.obj.objValue);
 // console.log("parent: ", parent);
 // console.log("child: ", child);
 //
 // console.log('child.obj == parent.obj: ', child.obj == parent.obj)
 //
 // let grandChild = Object.create(child);
 // console.log("Grandchild: ", grandChild);
 // grandChild.walk()


 // function Dog(name){
 //  this.name = name;
 //  console.log("'this' is: ", this);
 // }
 // let myDog = new Dog('Max');
 // console.log('My dog: ', myDog);

 //not being used as a constructor
 // Dog('Allie');

 // var student1 = {
 //  message: "I LOVE this course!"
 // };
 //
 // var student2 = Object.create(student1);
 // student2.getMessage = function () {
 //  this.message = "Student 1 was paid off by Yaakov to say that!";
 //  return this.message;
 // };
 // var coverUp = student2.getMessage();
 // console.log(student2.message);

 (function (){
     'use strict';

     angular.module('ControllerAsApp', [])
         .controller('ParentController1', ParentController1)
         .controller('ChildController1', ChildController1)
         .controller('ParentController2', ParentController2)
         .controller('ChildController2', ChildController2);

     ParentController1.$inject = ['$scope'];
     function ParentController1($scope){
         $scope.parentValue = 1;
         $scope.pc = this;
         $scope.pc.parentValue = 1;
     }

     ChildController1.$inject = ['$scope'];
     function ChildController1($scope){
         console.log('$scope.parentValue: ', $scope.parentValue);
         console.log('CHILD $scope: ', $scope);

         $scope.parentValue = 5;
         console.log('CHANGED: $scope.parentValue: ', $scope.parentValue);
         console.log($scope)

         console.log('CHANGED: $scope.parentValue: ', $scope.pc.parentValue);
         $scope.pc.parentValue = 5;
         console.log('CHANGED: $scope.parentValue: ', $scope.pc.parentValue);
         console.log($scope)

     }

     // ParentController2.$inject = ['$scope'];
     function ParentController2(){
         var parent = this;
         parent.value = 1;
     }

     ChildController2.$inject = ['$scope'];
     function ChildController2($scope){
        var child = this;
        child.value = 5;

        console.log('ChildController2 $scope: ', $scope)
     }

 })();
