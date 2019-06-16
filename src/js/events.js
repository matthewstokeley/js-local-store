/* 
 * @param  {Array}
 * @return {Object} 
 */
var events = (function() {

    /**
     * 
     * @type {Array}
     */
    var listeners = [];

    /**
     * 
     * @param {String}   name
     * @param {Function} callback
     */
    var addListener = function(name, callback) {

        listeners.push({
            name: name,
            callback: callback
        });
    
    };

    /**
     * 
     * @param  {String} name
     * @param  {Object} context
     * @return {Object}
     */
    var emit = function(name, context) {

        if (typeof name !== 'string') {
        }

        var args = Array.prototype.splice.call(arguments, 2);

        listeners.forEach(function(listener, index, array) {
            for (var prop in listener) {
                if(listener.hasOwnProperty(prop)) {
                    if ((prop === 'name') && (listener[prop] === name)) {
                        listener.callback.apply(context || this, args);
                    }
                }
            }
        }.bind(this));
        return this;
    };

    return {
      register: addListener,
      emit: emit
    };

})();
