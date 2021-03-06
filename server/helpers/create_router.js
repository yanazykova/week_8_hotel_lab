const express = require('express');
const ObjectID = require('mongodb').ObjectID;

const createRouter = function (collection) {
    const router = express.Router();

    router.get('/', (req, res) => { 
        collection
        .find()
        .toArray()
        .then((doc) => res.json(doc))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });

     });

     router.post('/', (req, res) => {
         const NewData =  req.body; 
         console.log("the request body is ", NewData)
         collection
         .insertOne(NewData)
         .then((result) => {
             res.json(result.ops[0])
         })
         .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        });
     });

     router.delete('/:id', (req, res) => {
           const id = req.params.id;
           collection 
           .deleteOne({_id: ObjectID(id)})
           .then(result => {
               res.json(result)
           })
           .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({status: 500, error: err});
        }); 

     })

     return router; 
};

module.exports = createRouter; 
