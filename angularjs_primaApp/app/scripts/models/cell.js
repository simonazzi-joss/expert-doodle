'use strict';

function Cell(x, y) {       //jshint ignore: line
    var _this = this;
    _this.x = +x;
    _this.y = +y;

    _this.isMine = false;
    _this.nearbyMines = 0;

    _this.setMine = function() {
        _this.isMine = true;

        _this.nearbyMines = -1;
    };
    _this.increaseNeabyMines = function() {
        if(_this.isMine) {
            return;
        }
        _this.nearbyMines = (_this.nearbyMines + 1);
    };
    _this.reset = function() {
        _this.isMine = false;
        _this.nearbyMines = 0;
    };
}