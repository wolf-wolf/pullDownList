angular.module('app')
    .directive('pullDown1', ['$document', function($document) {
        return {
            restrict: 'E',
            scope: {
                list: '=',
                selected: '='
            },
            templateUrl: 'pullDown1/pullDown1Tpl.html',
            controller: function($scope, $element) {
                //用于生成唯一蒙版的Id
                var _uniquePrefix = Math.floor(Math.random() * 100000) + '' + new Date().getTime();

                //列表是否打开的判断标志
                $scope.flag = {
                    showList: false
                };
                /**
                 * 切换列表关闭和打开状态
                 * @param  {Object} event 事件参数，用于阻止事件冒泡
                 */
                $scope.toggleList = function(event) {
                    if ($scope.flag.showList) { //如果列表打开则关闭
                        _closeList();
                    } else { //如果列表是关闭状态则，创建遮罩层，并打开列表
                        var _mask = document.createElement('div');
                        _mask.className = 'drop-down-mask-' + _uniquePrefix;
                        _mask.style.position = 'absolute';
                        _mask.style.top = '0';
                        _mask.style.left = '0';
                        _mask.style.width = '100%';
                        _mask.style.height = '100%';
                        _mask.style.zIndex = '99998';
                        _mask.style.background = 'rgba(255, 255, 255, 0)';

                        _mask.addEventListener('click', function(event) {
                            _closeList();
                            $scope.$apply();
                        });

                        $document[0].body.append(_mask);
                        $scope.flag.showList = true;
                    }
                };

                /**
                 * 选择项目
                 * @param  {Object} event 事件参数，用于阻止事件冒泡
                 * @param  {Object} item  选择的目标项目
                 */
                $scope.selectItem = function(event, item) {
                    $scope.selected = item;
                    _closeList();
                };

                /**
                 * 关闭列表函数，将列表是否打开的判断标志设置为false，并且清除遮罩层
                 */
                function _closeList() {
                    $scope.flag.showList = false;
                    var _mask = angular.element(document.getElementsByClassName('drop-down-mask-' + _uniquePrefix));

                    if (_mask) {
                        _mask.remove();
                    }
                }
            }
        };
    }])
