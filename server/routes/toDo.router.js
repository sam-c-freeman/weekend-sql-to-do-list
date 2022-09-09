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
        console.log(result.rows);
        })
    .catch(error =>{
        console.log('error getting Koalas', error);
        res.sendStatus(500);
    })
})


//Post Route to Add Task

toDoRouter.post('/', (req, res) => {
    const task = req.body.task;
    const completed = req.body.completed;
    
    const queryText = `
    INSERT INTO "tasks"
    ("task", "completed")
    VALUES
    ($1, $2);
    `;

    const sqlValues = [task, completed];
   

    db.query(queryText, sqlValues)
        .then(result =>{
        res.sendStatus(200);
    })
    .catch(error =>{
        console.log('error adding tasks', error);
        res.sendStatus(500);
    })
});

//Put Route to mark as completed

//Delete Route to Mark as Completed


module.exports = toDoRouter;
