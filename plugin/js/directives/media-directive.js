/**
 * Created by cselvaraj on 5/3/14.
 * See more at: http://alvincheung.com/blog/angularjs-and-prettyphoto/#sthash.hJ8YzGD2.dpuf
 */

//angular.module('searchblox.contentItem', [])
//    .directive('contentItem', function ($compile, $sce) {
//
//        var titleTemplate = '<div class="row-fluid">' +
//            '   <a href="{{url}}" target="_blank"><b>{{content.title}}</b></a>' +
//            '</div>';
//        var descriptionTemplate =
//            '<div class="row-fluid">' +
//                '   <div ng-switch on="content.context">' +
//                '        <div ng-switch-when="undefined" ng-show="content.description">' +
//                '                    {{content.description}}' +
//                '        </div>' +
//                '        <div ng-switch-default>' +
//                '            <span ng-repeat="text in content.context[\'#text\']">' +
//                '                       {{text}} <b>{{formatData(content.context.highlight)[$index]}}</b>' +
//                '            </span>' +
//                '        </div>' +
//                '    </div>' +
//                '</div>';
//
//        var uidTemplate =
//            '<div class="row-fluid" style="width:600px;">' +
//                '    <i>{{content.uid}}</i>' +
//                '</div>';
//
//        var dateTemplate =
//            '<div class="row-fluid">' +
//                '    <i>' +
//                '                {{getLastModified(content.lastmodified)}}' +
//                '    </i>' +
//                '</div>';
//
//        var imageTemplate = '<div class="row-fluid" style="height:100px;">' +
//            '<a href="{{url}}" target="_blank"> <img class="thumbnail" style="float:left; width:100px; margin:0 5px 10px 0; max-height:150px;" ng-src="{{url}}">' +
//            '</a>';
//        '</div>';
//        var videoTemplate = '<div class="row-fluid" style="height:100px;"><iframe ng-src="{{url}}" width="100" height="100" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe></div>';
//
//        var hrefTemplate = '<div class="row-fluid"><a href="{{url}}" target="_blank"><b>{{content.title}}</b></a></div>';
//
//        // var imageTemplate = '<a prettyp class="image" ng-href="{{url}}" rel="prettyPhoto[main]" target="_blank"> <img ng-src="{{url | image : 'thumb'}}" height="100px" width="100px"/> </a>';
//        //var videoTemplate = '<video thumbid="_video" width="100" height="100" poster ="images/play.jpg" src="{{contentUrl}}"></video>';
//
//        //var videoHrefTemplate = '<div class="row-fluid"><a href="{{contentUrl}}"><img src="images/play.jpg"/><b>{{content.title}}</b></a></div>'
//
//
//        var getTemplate = function (contentType) {
//            var template = "";
//
//            switch (contentType) {
//                case 'image':
//                    template = titleTemplate + imageTemplate + descriptionTemplate + dateTemplate;
//                    break;
//                case 'video':
//                    template = titleTemplate + videoTemplate + descriptionTemplate + dateTemplate;
//                    break;
//                case 'href':
//                    template = titleTemplate + descriptionTemplate + dateTemplate;
//                    break;
//            }
//
//            return template;
//        }
//
//        var linker = function (scope, element, attrs) {
//            scope.computeResultToBind(scope.content);
//            scope.$watch(function () {
//                if (scope.contentUrl && scope.contentType == "video") {
//                    scope.url = $sce.trustAsResourceUrl(scope.contentUrl);
//                }
//                else {
//                    scope.url = scope.contentUrl;
//                }
//            });
//            //scope.content.content_type
//            element.html(getTemplate(scope.contentType)).show();
//
//            $compile(element.contents())(scope);
//        }
//
//        return {
//            restrict: "E",
//            replace: true,
//            link: linker,
//            scope: {
//                content: '='
//            },
//            controller: function ($scope) {
//
//                $scope.getLastModified = function (lastmodified) {
//                    return moment(lastmodified).format("MMMM Do YYYY, h:mm:ss a");
//                }
//
//                $scope.formatData = function (highlightObj) {
//                    if (!angular.isArray(highlightObj))
//                        return [highlightObj];
//                    else
//                        return highlightObj;
//                }
//
//                // content url generator
//                $scope.computeResultToBind = function (result) {
//
//                    var recstr = JSON.stringify(result.url);
//                    var colid = result.col;
//                    recstr = recstr.substring(1, recstr.length - 1);
//                    var recstrf = recstr.substring(1, recstr.length);
//                    var t = recstr.substring(recstr.lastIndexOf('.') + 1).toLowerCase();
//                    var isImage = false;
//                    var isVideo = false;
//
//                    if (recstr.startsWith('http') || recstr.startsWith('https')) {
//                        if (t == "jpg" || t == "jpeg" || t == "png" || t == "gif" || t == "bmp") {
//                            isImage = true;
//                        } else if (t == "mpeg" || t == "mp4" || t == "flv" || t == "mpg") {
//                            isVideo = true;
//                        }
//                        $scope.contentUrl = recstr;
//                    } else if (recstr.startsWith('/') || recstrf.startsWith(':')) {
//                        if (t == "jpg" || t == "jpeg" || t == "png" || t == "gif" || t == "bmp") {
//                            var isImage = true;
//
//                        } else if (t == "mpeg" || t == "mp4" || t == "flv" || t == "mpg") {
//                            isVideo = true;
//                        }
//                        $scope.contentUrl = '../servlet/FileServlet?url=' + recstr + '&col=' + colid;
//                        if (result.url.lastIndexOf('http', 0) === 0) {
//                            $scope.contentUrl = result.url;
//                        }
//                    }
//                    else if (result.url.lastIndexOf('db', 0) === 0) {
//                        $scope.contentUrl = '../servlet/DBServlet?col=' + result.col + '&id=' + result.uid;
//                    }
//                    else if (result.url.split(':')[0] == 'eml') {
//                        $scope.contentUrl = '../servlet/EmailViewer?url=' + result.uid + '&col=' + result.col;
//                    }
//                    else {
//                        $scope.contentUrl = result.url;
//                    }
//
//                    if (isImage) {
//                        $scope.contentType = "image";
//                    }
//                    else if (isVideo) {
//                        $scope.contentType = "video";
//                    } else {
//                        $scope.contentType = "href";
//                    }
//
//                }
//
//            }
//        };
//    });
//
