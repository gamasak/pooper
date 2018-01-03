'use strict';
module.exports = (() => {
    return {
        type: "notify",
        activate: (connect) => {
            console.log("notify log");
        },
        bind: (pipeEnd) => {

        },
        init: function() {
            return [ this.type, this.activate ];
        }

    }
    
})();