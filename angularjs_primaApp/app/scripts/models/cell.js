'use strict';

function Cell(x, y) {       //jshint ignore: line
    var _this = this;
    _this.x = +x;
    _this.y = +y;

    _this.isMine = false;
    _this.nearbyMines = 0;

    Cell.prototype.setMine = function() {
        _this.isMine = true;
    };
    Cell.prototype.increaseNeabyMines = function() {
        _this.nearbyMines = (_this.nearbyMines + 1);
    };
    Cell.prototype.reset = function() {
        _this.isMine = false;
        _this.nearbyMines = 0;
    };

}