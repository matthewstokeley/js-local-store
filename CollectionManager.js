/**
 *  Some of this is redundant, but it's nice to have 
 *  no-sql style methods on json data anyways
 */
class CollectionManager {
    /**
     * [constructor description]
     * @param  {[type]} options [description]
     * @return {[type]}         [description]
     */
    constructor(options) {
        this.store = options.store;
    }

    /**
     * [create description]
     * @param  {[type]} collection [description]
     * @return {[type]}            [description]
     */
    create(collection) {
        this.store.updateDbByKey(DATABASE, collection, []);
        return this;
    }



    /**
     * [delete description]
     * @param  {[type]} collection [description]
     * @return {[type]}            [description]
     */
    delete(collection) {
        this.store.deleteDbKeyValue(DATABASE, collection);
        return this;
    }



    /**
     * [update description]
     * @param  {[type]} key  [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    update(key, data) {
        this.store.updateDbByKey(DATABASE, key, data);
        return this;
    }





    /**
     * [findAll description]
     * @return {[type]} [description]
     */
    findAll() {
        return this.store.findDb(DATABASE);
    }





    /**
     * [findCollectionByName description]
     * @param  {[type]} name [description]
     * @return {[type]}      [description]
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
        return result.filter(function(data) { if (data.key === name) { return data} })[0];
    }
}