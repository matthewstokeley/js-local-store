/**
 *  Some of this is redundant, but it's nice to have 
 *  no-sql style methods on json data anyways
 */
class CollectionManager {
    /**
     * 
     * @param  {String} options
     */
    constructor(options) {
        this.store = options.store || 'database';
    }

    /**
     * 
     * @callable
     * @param  {String} collectionName 
     * @return {Object}
     */
    create(collection) {
        this.store.updateDbByKey(DATABASE, collection, []);
        return this;
    }



    /**
     * 
     * @param  {String} collectionName
     * @return {Object} 
     */
    delete(collection) {
        this.store.deleteDbKeyValue(DATABASE, collection);
        return this;
    }



    /**
     * 
     * @callable
     * @param  {String} key
     * @param  {Object} data
     * @return {Object}
     */
    update(key, data) {
        this.store.updateDbByKey(DATABASE, key, data);
        return this;
    }

    /**
     * 
     * @return {Object}
     */
    findAll() {
        return this.store.findDb(DATABASE);
    }
	
    /**
     * 
     * @param  {String} name
     * @return {Object}
     */
    findCollectionByName(name) {

    	if (!name) {
    		return {};
    	}

    	var result = this.store.findDbByKey(DATABASE, name);
		if (!result) {
			this.store.updateDbByKey(DATABASE, name, []);
			result = this.store.findDbByKey(DATABASE, name);
		}
	// wonky
        return result.filter(function(data) { if (data.key === name) { return data} })[0];
    }
}
