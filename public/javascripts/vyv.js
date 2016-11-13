'use strict';

var app = angular.module('app', ['ngSanitize', 'ui.select']);

angular.module('app')
.controller('ctrl', ['$scope', function ($scope){
    $scope.itemArray = [
        {id: 1, name: 'Pune'},
        {id: 2, name: 'Pimpri and Chinchwad'},
        {id: 3, name: 'Kolhapur'},
        {id: 4, name: 'Satara'},
        {id: 5, name: 'Nashik'},
    ];

    $scope.selectedItem = $scope.itemArray[0];
}]);
