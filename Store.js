/**
 * @todo separation of concerns between collection manager and store
 */
class Store {
    /**
     * 
     * @param  {Object}        db
     */
    constructor(db) {

        this.store = localStorage;

        if (!this.findDb(db)) {
            this.createDb(db);
        }
    }
	
    /**
     * @param  {Object}        db
     * @return {Object}
     */
    findDb(db) {
        return JSON.parse(localStorage.getItem(db));
    }
	
    /**
     * find the database is a collection key exists
     * @param  {String}         db
     * @param  {String}         key
     * @return {Object|Boolean}
     */
    findDbByKey(db, key) {
        var data = this.findDb(db);

        for (var i = 0; i < data.length; i++) {
            if (data[i].name === key) {
                return data;
            }
        }
	return false;
    }
	
    /**
     * find the database if  a collection id  exists
     * @param  {String}         db
     * @param  {String}         id
     * @return {Object|Boolean}
     */
    findDbById(db, id) {
        var data = this.findDb(db);
        for (var i = 0; i < data.length; i++) {
            if(data[i].id === id) {
                return data
            }
        }
        return false;
    }

    /**
     * 
     * @chainable
     * @param  {Object}         db
     * @return {Object}
     */
    createDb(db) {
        localStorage.setItem(db, '[]');
        return this;
    }
	
    /**
     * @param  {String}         db
     * @param  {String}         key
     * @param  {Array}          data
     */
    createKey(db, key, data) {
    	var data = this.findDb(db);
    	
    	var obj = {};
    	obj.name = key;
    	obj.data = [];
        obj.id = data.length + 1;
		data.push(obj);
    	this.updateDb(db, data);
	   
	return null;
    }
	
    /**
     *
     * @chainable
     * @param  {String}       db
     * @param  {Array}        data
     * @return {Object}
     */
    updateDb(db, data) {
        localStorage.setItem(db, JSON.stringify(data));
        return this;
    }
	
    /**
     *
     * loops through all data then removes 
     * the matching key
     * @todo  refactor
     * @chainable
     * @param  {String} db
     * @param  {String} key
     * @return {Object}
     */
    deleteDbKeyValue(db, key) {
        var data = this.findDb();
        for (var i = 0; i < data.length; i++) {
            if (data[i][key]) {
                data.splice(i, 1);
            }
        }

        this.updateDb(db, data);
        return this;
    }

    /**
     *
     * @param  {String}        db
     * @param  {String}        key
     * @param  {Array}         data
     * @return {Object}
     */
    updateDbByKey(db, key, data) {
    	var value = this.findDbByKey(DATABASE, key);
    	if (!value) {
    	    this.createKey(DATABASE, key, data);
	    return this;
	}
      
	let isCollection = (collection) => {
	    return collection.name === key
		? true
		: false
	}
	
	let findIndex = (collection, index) => {
	    return collection.name === key
		? index
		: undefined
	}
	
	let clarify = result => {
	   return result !== undefined
	        ? true
	        : false
	}
	
        var db = this.findDb(DATABASE);
	var update = db.filter(isCollection).map((collection) => {
            collection.data.push(data)
	    return collection
	})
	
	var index = db.map(findIndex)
	    .filter(clarify)
	
	db[index] = update
        this.updateDb(DATABASE, db)
	    
        return this;
    }
}  
