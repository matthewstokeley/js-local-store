0.0.3

A collection of classes for working with localStorage as if it were a database.  

#### Store.js

`localStorage` provides a `key-value` store in-browser.  There are also some interesting limitations of the api - for one, `localStorage` only accepts a `string` value.  Store.js is a very simple class to provide CRUD methods for the browser's `localStorage` API.  In theory, this is supposed to make working with `localStorage` easier, and allow the developer to easily switch between localStorage and a remote database without additional implementation details.  There are already several great libraries that do this, however I thought I'd roll my own.

#### AsynchronousStore.js
`AsyncStore` shares a de facto `interface` with `Store` in order to provide the same set of methods asychronously.   

#### Manager.js
The `CollectionManager` class is meant to provide a high-level programmatc API for working with `Store.js`.  There are some issues implementing patterns correctly in this version, namely - the collection manager is limited to managing a single `Store` instead of multiple `Stores`. 

#### Example Implementation

```
    store = new AsynchronousStore(DATABASE);

    manager = new CollectionManager({
        store: store
    });

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

