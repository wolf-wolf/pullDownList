'use strict';

angular.module('app', [])
    .controller('dropDownCtrl', ['$scope', function($scope) {
        $scope.list1 = mockData(100);
        $scope.selected1 = null;

        $scope.list2 = mockData(100);
        $scope.selected2 = null;

        $scope.list3 = mockData(100);
        $scope.selected3 = null;


        function mockData(num) {
            var _data = [];
            for (var i = num; i > 0; i--) {
                _data.push({
                    name: 'item' + (num - i + 1),
                    id: i
                });
            }
            return _data;
        }
    }]);
