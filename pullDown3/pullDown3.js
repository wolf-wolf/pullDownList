angular.module('app')
    .directive('pullDown3', ['$document', function($document) {
        return {
            restrict: 'E',
            scope: {
                list: '=', //列表的选项
                selected: '=' //选择的项目
            },
            templateUrl: 'pullDown3/pullDown3Tpl.html',
            controller: function($scope, $element) {
                //列表是否打开的判断标志
                $scope.flag = {
                    showList: false
                };

                /**
                 * 选择项目
                 * @param  {Object} event 事件参数，用于阻止事件冒泡
                 * @param  {Object} item  选择的目标项目
                 */
                $scope.selectItem = function(event, item) {
                    event.stopPropagation();
                    $scope.selected = item;
                    _closeList();
                };

                $document.bind('click', function(event) {
                    _closeList();
                    $scope.$apply();
                });

                /**
                 * 切换列表关闭和打开状态
                 * @param  {Object} event 事件参数，用于阻止事件冒泡
                 */
                $scope.toggleList = function(event) {
                    event.stopImmediatePropagation();
                    if ($scope.flag.showList) {
                        _closeList();
                    } else {
                        $scope.flag.showList = true;
                    }
                };

                /**
                 * 关闭列表函数
                 */
                function _closeList() {
                    $scope.flag.showList = false;
                }
            }
        };
    }]);
