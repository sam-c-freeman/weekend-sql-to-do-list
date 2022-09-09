const express = require('express');
const toDoRouter = express.Router();

const db = require('../modules/pool');

//Get Route to show current tasks
// GET
toDoRouter.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "tasks";
    `;
    db.query(queryText).then(result =>{
        //sends back the results in an object
        res.send(result.rows)
        console.log(results.rows);
        })
    .catch(error =>{
        console.log('error getting Koalas', error);
        res.sendStatus(500);
    })
})


//Post Route to Add Task

// koalaRouter.post('/', (req, res) => {
//     const name = req.body.name;
//     const gender = req.body.gender;
//     const age = req.body.age;
//     const readyForTransfer =req.body.readyForTransfer;
//     const notes = req.body.notes;
    
//     const queryText = `
//     INSERT INTO "koalas"
//     ("name", "gender", "age", "readyForTransfer", "notes")
//     VALUES
//     ($1, $2, $3, $4, $5);
//     `;

//     const sqlValues = [name, gender, age, readyForTransfer, notes];
   

//     db.query(queryText, sqlValues)
//         .then(result =>{
//         res.send(200);
//     })
//     .catch(error =>{
//         console.log('error adding Koalas', error);
//         res.sendStatus(500);
//     })
// });

//Put Route to mark as completed

//Delete Route to Mark as Completed


module.exports = toDoRouter;
