// Code goes here

var app = angular.module("learnNG", []);

app.controller('mainCtrl', function($scope){
 $scope.key = "hi";

 var body = document.getElementById("body");

 $scope.$watch("key", function(newVal){
   if(newVal === "42"){

     body.style.backgroundColor = "black";
   } else {
     body.style.backgroundColor = "white";
   }
 });
});
