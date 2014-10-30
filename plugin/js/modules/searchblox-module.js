/**
 * Created by cselvaraj on 4/29/14.
 */

'use strict';

var KEYS = {
    backspace: 8,
    tab: 9,
    enter: 13,
    escape: 27,
    space: 32,
    up: 38,
    down: 40,
    comma: 188
};

angular.module('searchbloxModule', [
    'facetModule',
    'searchblox.controller',
    'searchblox.custominput',
    'searchblox.autocomplete',
    'searchblox.factory',
    'searchblox.trust',
    'searchblox.service',
    'ui.bootstrap',
    'ngSanitize',
    'searchblox.contentItem',
    'searchblox.adsItem',
    'ui.bootstrap',
    'ui.grid',
    'ui.grid.resizeColumns',
    'mgcrea.ngStrap',
    'rw.ui-slider'
])
.run(['$rootScope', function($rootScope) {
    $rootScope.ddate = new Date().getFullYear();
}]);