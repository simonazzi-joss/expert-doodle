'use strict';

/**
 * @ngdoc function
 * @name testsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the testsApp
 */

angular.module('testsApp')
	.controller('AboutCtrl', [function() {
		var vm = this;
		var width = 10;
		var height = 10;

		vm.gridMines = [];

		for(var i=0; i<width; i++) {
			var tmp = [];
			for(var ind=0; ind<height; ind++) {
				tmp.push(new Cell(i, ind));       //jshint ignore: line
			}
			vm.gridMines.push(tmp);
		}

		vm.start = function() {
			var nMines = 10;
			var x;
			var y;
			for(var i=0; i<nMines; i++) {
				x = parseInt(Math.random() * width);
				y = parseInt(Math.random() * height);
				
				if(vm.gridMines[x][y] && !vm.gridMines[x][y].isMine) {
					vm.gridMines[x][y].setMine();

					increaseNumberOfCell(x+1, y-1);
					increaseNumberOfCell(x+1, y);
					increaseNumberOfCell(x+1, y+1);

					increaseNumberOfCell(x, y-1);
				//	increaseNumberOfCell(x, y);
					increaseNumberOfCell(x, y+1);

					increaseNumberOfCell(x+1, y-1);
					increaseNumberOfCell(x+1, y);
					increaseNumberOfCell(x+1, y+1);
				} else {
					i--;
				}
			}

		};

		vm.clickCell = function(cell) {
			console.log(cell);
		};

		function increaseNumberOfCell(x, y) {
			if( vm.gridMines && vm.gridMines[x] && vm.gridMines[x][y] && vm.gridMines[x][y].increaseNeabyMines) {
				vm.gridMines[x][y].increaseNeabyMines();
			}
		}
	}]);

