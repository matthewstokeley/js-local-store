0.0.3

A collection of classes for working with localStorage as if it were a database.  

#### Store.js

Store.js is a very simple class to provide CRUD methods for the browser's `localStorage` API.  

`localStorage` provides a `key value` store in-browser, i.e., it is not a `no-sql` or `sql` database.  

#### AsynchronousStore.js
`AsyncStore` shares an implicit `interface` with `Store` in order to provide the same set of methods asychronously.   

#### Manager.js
The `CollectionManager` class is meant to provide a high-level programmatc API for working with `Store.js`.  There are some issues implementing patterns correctly in this version, namely - the collection manager is limited to managing a single `Store` instead of multiple `Stores`. 

#### Example Implementation

```
    // instantiate either `Store` or `AsyncStore`

    // store = new Store(DATABASE);

    store = new AsynchronousStore(DATABASE);

    manager = new CollectionManager({
        store: store
    });

    // now there are a series of high-level methods available for 
    // working with data

    // create a new row
    manager.create('{rowName: 'name', thanks: 'next'}');

```

#### Collection Manager API Methods

`create`  
Create a 'collection' or a new table or object within the current database.

---
`update`  
Update an existing collection. accepts a `string` and an `object`

---
`delete`  
Delete a collection. accepts a `string`

---
`findAll`  
Return all collections in a database

---
`findCollectionByName`  
A kind of wonky method / alias that suggests you use a `name` attribute in collection objects

---

