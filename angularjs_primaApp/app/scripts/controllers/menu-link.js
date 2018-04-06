'use strict';

function MenuLinks() {
    return {
        templateUrl: 'views/menu-link.html',
        restrict: 'A'
    };
}
angular.module('testsApp')
    .directive('menulink', MenuLinks);
