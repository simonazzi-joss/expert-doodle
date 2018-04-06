'use strict';

function MyService() {
    this.msgs = [
        {id: 0, text: 'L'},
        {id: 1, text: 'O'},
        {id: 2, text: 'L'}
    ];

    this.getMessages = function() {
        var that = this;
        //return Promise.resolve( this.msgs );
        return new Promise(
            function(resolve, reject) {
                if( that.msgs.length > 0 ) {
                    resolve( that.msgs );
                } else {
                    reject('errore');
                }
            });
    };

    this.addMessage = function(txt) {
        this.msgs.push({id: this.msgs.length, text: txt});
    };
}

angular.module('testsApp')
    .service('MyService', MyService);