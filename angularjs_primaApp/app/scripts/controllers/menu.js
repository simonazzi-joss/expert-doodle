'use strict';

function MenuController() {
    var _self = this;

    this.$onInit = function() {
        _self.links = [
            { to: '#!/home', text: 'Home' },
            { to: '#!/about', text: 'About' },
            { to: '#!/contact', text: 'Contact' }
        ];
    };

}

angular.module('testsApp')
    .component('menu', {
        templateUrl: 'views/menu.html',
        controller: MenuController,
        controllerAs: '$menuCtrl'
    });