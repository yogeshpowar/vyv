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
    $scope.profiles = [{
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
}]);

