'use strict';
module.exports = (() => {
    return {
        type: "subscribe",
        activate: (connect) => {

        },
        bind: (pipeEnd) => {

        },
        init: () => {
            return { [this.type]: this.activate }
        }

    }

})();