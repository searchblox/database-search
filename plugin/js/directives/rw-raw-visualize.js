/**
 * Created by rw
 */
angular.module('rw.raw.visualize', [])
.directive('rawChart', [function() {
    return {
        restrict: 'E',
        template: '<iframe width="100%" height="{{windowHeight + \'px\'}}" src="raw/index.html" frameborder="0"></iframe>',
        link: function(scope, elem, attrs) {
            scope.windowHeight = window.innerHeight / 1.5;

            window.addEventListener('resize', function() {
                scope.$apply(function() {
                    scope.windowHeight = window.innerHeight / 1.5;
                });
            }, false);
        }
    }
}]);
