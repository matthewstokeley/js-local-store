// https://developer.mozilla.org/en-US/docs/Web/API/Request

const path = './sample/API/api.php/';

class AsyncStore {
	
	constructor(db) {
		this.db = db;
	}

	/**
	 * [create description]
	 * @param  {Object} data [description]
	 * @return {AsyncStore}      [description]
	 */
	create(data) {
		
		var createRequest = this.request(path + 'create', {
			method: data.method,
			body: data.body
		});

		return this.response(createRequest);
	}


	/**
	 * [update description]
	 * @param  {Object} data [description]
	 * @chainable
	 * @return {AsyncStore}      [description]
	 */
	update(data) {

		var createRequest = this.request(db + '/update?', {
			method: 'get'
		});

		return this.response(createRequest);
	}


	/**
	 * [updateDbByKey description]
	 * @param  {Object} data [description]
	 * @chainable
	 * @return {AsyncStore}      [description]
	 */
	updateDbByKey(data) {
		var findRequest = this.request('findById', {});		
		return this.response(findRequest);
	}


	/**
	 * [findDb description]
	 * @param  {String} db [description]
	 * @chainable
	 * @return {AsyncStore}    [description]
	 */
	findDb(db) {
		var findRequest = this.request(db + '/findAll?table=' + db, {
			method: 'GET'
		});		
		return this.response(findRequest);
	}


	/**
	 * [findById description]
	 * @param  {Object} data [description]
     * @chainable
	 * @return {AsyncStore}      [description]
	 */
	findById(data) {
		var findRequest = this.request('findById', {});		
		return response(findRequest);
	}


	/**
	 * [findAll description]
	 * @chainable
	 * @return {AsyncStore} [description]
	 */
	findAll() {
		var findRequest = this.request('findAll', {});		
		return response(findRequest);
	}


	/**
	 * [findCollectionByName description]
	 * @chainable
	 * @return {AsynchronousStore} [description]
	 */
	findCollectionByName() {
		var findRequest = this.request('findByName', {});		
		return response(findRequest);
	}


	/**
	 * @chainable
	 * @return {AsynchronousStore} [description]
	 */
	delete() {
		var deleteRequest = this.request('delete', {});
		return response(deleteRequest);
	}

	/**
	 * @param  {Sttring} route [description]
	 * @param  {Object} data  [description]
	 * @return {Request}       [description]
	 */
	request(route, data) {
		return new Request(path + route, data);
	}


	/**
	 * [response description]
	 * @param  {Request} request [description]
	 * @chainable
	 * @return {AsynchronousStore}         [description]
	 */
	response(request) {
		fetch(request)
		.then(response => response.text())
		.then(text => {
		   	events.emit('response', this, JSON.parse(text));
		  })
		  .then((response) => {
		    console.debug(response);
		  }).catch((error) => {
		    console.error(error);
		  });

		  return this;
	}

}