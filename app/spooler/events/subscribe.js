'use strict';
module.exports = (() => {
    return {
        type: "subscribe",
        activate: (connect) => {
            console.log("subscribe log");
        },
        bind: (pipeEnd) => {

        },
        init: function() {
            return [ this.type, this.activate ];
        }

    }

})();