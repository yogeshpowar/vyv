//(function(){
    'use strict';

angular.module('vyv', ['ngSanitize', 'ui.select'])

.controller('mainCtrl', ['$scope', function ($scope) {
    $scope.itemArray = [
        {id: 1, name: 'Pune'},
        {id: 2, name: 'Pimpri and Chinchwad'},
        {id: 3, name: 'Kolhapur'},
        {id: 4, name: 'Satara'},
        {id: 5, name: 'Nashik'},
    ];

    $scope.selectedItem = $scope.itemArray[0];
}])

.controller('listCtrl', ['$scope', '$http', function ($scope, $http) {
    var data = [];
    $http.get('/profiles').success(function (data1) {
        data = data1;
        initSelectArrs(data);
    });

    var getCities = function(profiles) {
        var cities = [];
        var i, j;

        for (i = 0; i < profiles.length; i++) {
            /* Cities */
            for (j = 0; j < cities.length; j++) {
                if (profiles[i].City === cities[j].city) {
                    break;
                }
            }
            if (j == cities.length) {
                cities.push({
                    id: j,
                    city: profiles[i].City
                });
            }
        }
        $scope.cities = cities;
    };

    var getWards = function(profiles) {
        var i, j;
        var wards = [];

        for (var i = 0; i < profiles.length; i++) {
            /* wards */
            for (j = 0; j < wards.length; j++) {
                if (profiles[i].Ward === wards[j].ward) {
                    break;
                }
            }
            if (j == wards.length) {
                wards.push({
                    id: j,
                    ward: profiles[i].Ward
                });
            }
        }

        $scope.wards = wards;
    };

    var getNames = function(profiles) {
        var names = [];
        var i, j;

        for (var i = 0; i < profiles.length; i++) {
            /* wards */
            for (j = 0; j < names.length; j++) {
                if (profiles[i].Name === names[j].name) {
                    break;
                }
            }
            if (j == names.length) {
                names.push({
                    id: j,
                    name: profiles[i].Name
                });
            }
        }
        $scope.names = names;
    };

    var getParties = function(profiles) {
        var parties = [];
        var i, j;

        for (var i = 0; i < profiles.length; i++) {
            /* Party */
            for (j = 0; j < parties.length; j++) {
                if (profiles[i].Party === parties[j].party) {
                    break;
                }
            }
            if (j == parties.length) {
                parties.push({
                    id: j,
                    party: profiles[i].Party
                });
            }
        }
        $scope.parties = parties;
    };

    var initSelectArrs = function(profiles) {
        getCities(profiles);
        getWards(profiles);
        getParties(profiles);
        getNames(profiles);

        $scope.profiles = profiles;
        $scope.selCnt = profiles.length;
        $scope.totCnt = data.length;

        $scope.city = {};
        $scope.city.selected = undefined;
        $scope.ward = {};
        $scope.ward.selected = undefined;
        $scope.party= {};
        $scope.party.selected = undefined;
        $scope.name = {};
        $scope.name.selected = undefined;
    };

    $scope.showAll = function() {
        initSelectArrs(data);
        $scope.profiles = data.slice();
        $scope.msgcity = "all the cities";
        $scope.msgward = "all the wards";
        $scope.msgparty = "all the parties";
        $scope.msgname = "all the profiles";
        $scope.selCnt = profiles.length;
        $scope.totCnt = data.length;

        return;
    };

    var filter = function(param, value) {
        var profiles = [];
        for (var i = 0; i < data.length; i++) {
            if (data[i][param] == value) {
                profiles.push(data[i]);
            }
        }
        $scope.profiles = profiles;
        $scope.selCnt = profiles.length;
    };


    $scope.city = {};
    $scope.city.selected = undefined;
    $scope.ward = {};
    $scope.ward.selected = undefined;
    $scope.party= {};
    $scope.party.selected = undefined;
    $scope.name = {};
    $scope.name.selected = undefined;

    $scope.$watch('city.selected.city', function(newValue, oldValue) {
        if (newValue === undefined) {
            $scope.msgcity = "all the cities";
            return;
        }
        $scope.msgcity = newValue + " city";
        filter('City', newValue);
        getWards($scope.profiles);
        getParties($scope.profiles);
        getNames($scope.profiles);
    });
    $scope.$watch('ward.selected.ward', function(newValue, oldValue) {
         if (newValue === undefined) {
             $scope.msgward = "all the wards";
             return;
         }
         $scope.msgward = newValue + " ward";
         filter('Ward', newValue);
         getParties($scope.profiles);
         getNames($scope.profiles);
    });
    $scope.$watch('party.selected.party', function(newValue, oldValue) {
         if (newValue === undefined) {
             $scope.msgparty = "all the parties";
             return;
         }
         $scope.msgward = newValue + " party";
         filter('Party', newValue);
         getWards($scope.profiles);
         getParties($scope.profiles);
         getNames($scope.profiles);
    });
    $scope.$watch('name.selected.name', function(newValue, oldValue) {
          if (newValue === undefined) {
              $scope.msgname = "all the profiles";
              return;
          }
          $scope.msgname = "matching name as " + newValue;
          filter('Name', newValue);
    });

}]);
//}());
