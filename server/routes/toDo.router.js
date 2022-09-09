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

//Put Route to mark as completed

//Delete Route to Mark as Completed


module.exports = toDoRouter;
