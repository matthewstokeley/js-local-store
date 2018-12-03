/**
 * @todo separation of concerns between collection manager and store
 */
class Store {


    /**
     * [constructor description]
     * @param  {[type]} db [description]
     * @return {[type]}    [description]
     */
    constructor(db) {

        this.store = localStorage;

        if (!this.findDb(db)) {
            this.createDb(db);
        }
    }




    /**
     * [findDb description]
     * @param  {[type]} db [description]
     * @return {[type]}    [description]
     */
    findDb(db) {
        return JSON.parse(localStorage.getItem(db));
    }





    /**
     * find the database is a collection key exists
     * @param  {[type]} db  [description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
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
     * @param  {[type]} db [description]
     * @param  {[type]} id [description]
     * @return {[type]}    [description]
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
     * [createDb description]
     * @param  {[type]} db [description]
     * @return {[type]}    [description]
     */
    createDb(db) {
        localStorage.setItem(db, '[]');
        return this;
    }





    /**
     * [createKey description]
     * @param  {[type]} db   [description]
     * @param  {[type]} key  [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    createKey(db, key, data) {
    	var data = this.findDb(db);
    	
    	var obj = {};
    	obj.name = key;
    	obj.data = [];
        obj.id = data.length + 1;
		data.push(obj);
    	this.updateDb(db, data);
    }





    /**
     * [updateDb description]
     * @param  {[type]} db   [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    updateDb(db, data) {
        localStorage.setItem(db, JSON.stringify(data));
        return this;
    }





    /**
     * [deleteDbKeyValue description]
     * loops through all data then removes 
     * the matching key
     * @todo  refactor
     * @param  {[type]} db  [description]
     * @param  {[type]} key [description]
     * @return {[type]}     [description]
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
     * [	 description]
     * @param  {[type]} db   [description]
     * @param  {[type]} key  [description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    updateDbByKey(db, key, data) {
    	var value = this.findDbByKey(DATABASE, key);
    	if (value === false) {
    		this.createKey(DATABASE, key, data);
    	} else {
    		var db = this.findDb(DATABASE);

            for (var i = 0; i < db.length; i++) {

                if (db[i].name === key) {
                   db[i].data.push(data);
                }
            }
        	this.updateDb(DATABASE, db);		
    	}
    	
        return this;
    }
}  