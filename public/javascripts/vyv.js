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

.controller('listCtrl', ['$scope', function ($scope) {
    var data = [{
        Name: "Yogesh Ashok Powar",
        sex: 1,
        DoB: "14 Sep 1982",
        City: "Pune",
        Ward: "Ward # 1",
        history: {
            "2000-2004": "Sarpanch",
            "2004-2005": "Sabhapati"
        }
            /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */
    },{
        Name: "Amit Kate",
        DoB: "14 Nov 1982",
        sex: 1,
        City: "Pune",
        Ward: "Ward # 2",
        history: {
            "2000-2004": "Sarpanch",
            "2004-2005": "Sabhapati"
        }

        /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */

    }, {
        Name: "Deepti Amit Kate",
        DoB: "14 Nov 1986",
        sex: 0,
        City: "Pune",
        Ward: "Ward # 3",
        history: {
            "2000-2014": "Sarpanch",
            "2001-2014": "Sarpanch",
            "2002-2014": "Sarpanch",
            "2003-2014": "Sarpanch",
            "2004-2014": "Sarpanch",
            "2005-2014": "Sarpanch",
        }
    },{
        Name: "Namrata Yogesh Powar",
        sex: 0,
        DoB: "20 Dec 1986",
        City: "Pune",
        Ward: "Ward # 6",
        history: {
            "2010-2015": "RSS"
        }
            /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */
    },{
        Name: "Yogesh Ashok Powar",
        sex: 1,
        DoB: "14 Sep 1982",
        City: "Pune",
        Ward: "Ward # 1",
        history: {
            "2000-2004": "Sarpanch",
            "2004-2005": "Sabhapati"
        }
            /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */
    },{
        Name: "Namrata Yogesh Powar",
        sex: 0,
        DoB: "20 Dec 1986",
        City: "Pune",
        Ward: "Ward # 6",
        history: {
            "2010-2015": "RSS"
        }
            /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */
    },{
        Name: "Amit Kate",
        DoB: "14 Nov 1982",
        sex: 1,
        City: "Pune",
        Ward: "Ward # 2",
        history: {
            "2000-2004": "Sarpanch",
            "2004-2005": "Sabhapati",
            "2005-2005": "Sabhapati",
        }

        /*
        History: [{
            from: "2000",
            to: "2004",
            position: "Sarpanch"
        }, {
            from: "2004",
            to: "2005",
            position: "Sabhapati"
        }]
        */

    }, {
        Name: "Deepti Amit Kate",
        DoB: "14 Nov 1986",
        sex: 0,
        City: "Pune",
        Ward: "Ward # 3",
        history: {
            "2000-2014": "Sarpanch",
        }
    }];

    var initSelectArrs = function(profiles) {
        var cities = [];
        var wards = [];
        var names = [];
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
        console.log(cities);
        console.log(wards);
        console.log(names);

        $scope.profiles = profiles;
        $scope.cities = cities;
        $scope.wards = wards;
        $scope.names = names;
        $scope.selCnt = profiles.length;
        $scope.totCnt = data.length;
    };

    $scope.showAll = function() {
        initSelectArrs(data);
        $scope.profiles = data.slice();
        $scope.msgcity = "all the cities";
        $scope.msgward = "all the wards";
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
        initSelectArrs(profiles);
        $scope.profiles = profiles;
    };

    initSelectArrs(data);

    $scope.city = {};
    $scope.city.selected = undefined;
    $scope.ward = {};
    $scope.ward.selected = undefined;
    $scope.name = {};
    $scope.name.selected = undefined;


    $scope.$watch('city.selected.city', function(newValue, oldValue) {
        if (newValue === undefined) {
            $scope.msgcity = "all the cities";
            return;
        }
        $scope.msgcity = newValue + " city";
        filter('City', newValue);
    });
    $scope.$watch('ward.selected.ward', function(newValue, oldValue) {
         if (newValue === undefined) {
             $scope.msgward = "all the wards";
             return;
         }
         $scope.msgward = newValue + " ward";
         filter('Ward', newValue);
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
