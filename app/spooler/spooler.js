'use strict';
module.exports = (function(){

    let eventTypes = new Map();

    return {
        init: () => {
            let glob = require( 'glob' )
                , path = require( 'path' );
            glob.sync( './app/spooler/events/*.js' ).forEach( function( file ) {
                let eventType = require( path.resolve( file ) );
                let [key, value] = eventType.init();
                eventTypes.set(key, value);
            });
        },
        eventPool: (messageType, connection) => {
            if(eventTypes.get(messageType) && typeof eventTypes.get(messageType) === "function") {
                eventTypes.get(messageType)(connection);
            } else {
                // throw new websocketMessageException('InvalidMConnectionMessage'); //write exception handling
            }
        }
    }
}());