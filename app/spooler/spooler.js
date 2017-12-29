
'use strict';
module.exports = function(messageType){
    var glob = require( 'glob' )
        , path = require( 'path' );
    glob.sync( './app/spooler/*.js' ).forEach( function( file ) {
        var pooper = require( path.resolve( file ) );
        if(pooper.type) {
            if(pooper.type.trim() === messageType.trim()) {
                console.log(pooper.type);
            }
        }
    });
};