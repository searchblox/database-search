/**
 * Created by cselvaraj on 4/29/14.
 */

// FACTORY
angular.module('searchblox.factory',[]).factory('searchbloxFactory', ['$rootScope', '$http', function ($rootScope, $http) {
    var searchFactory = {};
    searchFactory.getResponseData = function (urlParams) {
        var promise = $http.get(urlParams).success(function (data, status) {
            return data;
        }).error(function (data, status) {
            return status;
        });

        return promise;

    };

    searchFactory.parseTextToObject = function(item) {
        var returnObj = {};
        if (typeof item.source === "string") {
            var source = item.source;
            source.replace(/[\{\}]/g, '').split(', ').forEach(function (temp) {
                var or = temp.split('=');
                returnObj[or[0]] = or[1];
            });

            item.source = returnObj;
        }
    };

    return searchFactory;
}]);
