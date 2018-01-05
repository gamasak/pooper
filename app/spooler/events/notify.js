'use strict';
var Rx = require('rxjs/Rx');

module.exports = (() => {
    return {
        type: "notify",
        activate: (connect) => {
            console.log("notify log");
            const observable = Rx.Observable.create( observer => {
                observer.next( 'hello' );
                observer.next( 'world' );
            });

            observable.subscribe(val => connect.write(val));
        },
        bind: (pipeEnd) => {

        },
        init: function() {
            return [ this.type, this.activate ];
        }

    }
    
})();