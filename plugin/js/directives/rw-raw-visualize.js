/**
 * Created by rw
 */
angular.module('rw.raw.visualize', [])
.directive('rawChart', [function() {
    var template = '<iframe id="rw-raw-visualize" ';
        template += 'width="100%" height="{{windowHeight + \'px\'}}"';
        template += 'onload="rwRawVisualize()" src="raw/index.html" frameborder="0"></iframe>';
        template += '</iframe>';

    return {
        restrict: 'E',
        template: template,
        scope: {
            transferData: '=?'
        },
        link: function(scope) {
            scope.windowHeight = window.innerHeight / 1.5;

            window.addEventListener('resize', function() {
                scope.$apply(function() {
                    scope.windowHeight = window.innerHeight / 1.5;
                });
            }, false);
        },
        controller: ['$scope', function($scope) {
            window.rwRawVisualize = function() {
                // setting timeout when browser reloads slow
                setTimeout(function() {
                        var iframeWindow = document.getElementById('rw-raw-visualize').contentWindow;
                        iframeWindow.rwRawVisualize($scope.transferData);
                }, 100);
            };
        }]
    }
}])
/**
 * Source: http://stackoverflow.com/a/17315483/2706988
 */
.filter('htmlToPlaintext', [function() {
    return function(text) {
        return String(text).replace(/<[^>]+>/gm, '');
    }
}]);
///**
// * Source: http://stackoverflow.com/a/11257124/2706988
// */
//.filter('arrToCSV', [function() {
//    var ConvertToCSV = function (arrOfObj) {
//        if (!angular.isArray(arrOfObj)) {
//            return arrOfObj.toString();
//        }
//
//        var str = '', _array = arrOfObj;
//        for (var i = 0; i < _array.length; i++) {
//            var line = '';
//            for (var index in _array[i]) {
//                if (line != '') {
//                    line += ',';
//                }
//                line += _array[i][index];
//            }
//            str += line + '\r\n';
//        }
//        return str;
//    };
//
//    return function(input) {
//        return ConvertToCSV(input);
//    }
//}])
