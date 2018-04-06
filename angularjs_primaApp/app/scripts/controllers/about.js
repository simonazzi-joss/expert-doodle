'use strict';

/**
 * @ngdoc function
 * @name testsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testsApp
 */
function AboutController(srv) {
  var vm = this;
  
  vm.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];

  srv.getMessages()
    .then(function(x) {
      console.log(x);
    })
    .catch(function(err) {
      console.log('error', err);
    });
}

AboutController.$inject = ['MyService'];

angular.module('testsApp')
  .controller('AboutCtrl', AboutController);
