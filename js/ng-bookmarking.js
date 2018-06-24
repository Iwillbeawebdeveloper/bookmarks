'use strict';

angular.module('Bookmarking', ['ngSanitize'])
    .controller('controller', function() {
    console.log("hello")
})
    .directive('bookmarking', function($sce) {
        return {
            restrict: 'E',
//            replace: true,
            templateUrl: $sce.trustAsResourceUrl('html/bookmarking.html'),
            scope: true,
            link: function(scope) {
                scope.ctrl = {
                    testing: "this is a test",
                    testingTesting: function() {
                        console.log(scope.ctrl.testing)
                    }
                }
                scope.ctrl.testingTesting();
            }
        }
})