A collection of classes for working with localStorage as if it were a database.  

#### Store.js

Store.js is a very simple class to provide CRUD methods for the browser's `localStorage` API.  

`localStorage` creates a `key value` store in-browser, but functions differently than either `no-sql` or `sql` databases.  For one, `localStorage` only accepts a `string` for a value.  However, with the help of the `JSON.stringify` method,  a simple `CRUD` API can be implemented which makes working with `localStorage` easier.  THere are already several great libraries that do this, however I thought I'd roll my own, as it were.

#### AsynchronousStore.js
`AsyncStore` shares a hypothetical `interface` with `Store.js` in order to provide the same set of methods, except for working with `ajax` applications.  

#### Manager.js
The `CollectionManager` class is meant to provide a high-level programmatic API for working with `Store.js`.  There are some naming and redundancy issues in this current version.  If you're interested in helping, I'd love to see a pull request. 

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
create a 'collection' or a new table or object within the current database.
---
`update`  
update an existing collection. accepts a `string` and a `data object`
---
`delete`  
delete a collection. accepts a `string`
---
`findAll`  
return all collections in a database
---
`findCollectionByName`  
a kind of wonky method that suggests you use a `name` attribute in collection objects

