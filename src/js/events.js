/* [description]
 * @param  {Array}  ) {               var listeners [description]
 * @return {[type]}   [description]
 */
var events = (function() {

    /**
     * [listeners description]
     * @type {Array}
     */
    var listeners = [];

    /**
     * [addListener description]
     * @param {[type]}   name     [description]
     * @param {Function} callback [description]
     */
    var addListener = function(name, callback) {

        listeners.push({
            name: name,
            callback: callback
        });
    
    };

    /**
     * [emit description]
     * @param  {[type]} name    [description]
     * @param  {[type]} context [description]
     * @return {[type]}         [description]
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