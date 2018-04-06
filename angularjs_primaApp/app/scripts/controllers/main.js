'use strict';
/**
 * @ngdoc function
 * @name testsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the testsApp
 */
function MainController ( myService ) {
  var vm = this;

  vm.msgs = [];
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  myService.getMessages()
    .then(function(x) {
      vm.msgs = x;
    })
    .catch(function(err) {
      console.log('error', err);
    });
  myService.addMessage('L');
}

MainController.$inject = ['MyService'];

angular.module('testsApp')
  .controller('MainCtrl', MainController);
