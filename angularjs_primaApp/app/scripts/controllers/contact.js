'use strict';

function ContactController(/* $scope /**/) {
	// jshint validthis: true
	var vm = this;
	
	vm.data = 'robba';

//	vm.nome = '';
//	vm.cognome = ''; //non è necessario inizializzarle, vengono aggiunte automaticamente da ng-model

	vm.submit = function() {
		console.log(vm.nome);
		console.log(vm.cognome);
	};
}

angular.module('testsApp')
	.controller('ContactCtrl', ContactController);