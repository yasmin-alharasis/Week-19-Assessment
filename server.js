const express = require('express');
const cors = require('cors');
const mongo = require('./db.js');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.json('server is working');
});

app.get('/tasks', (req, res) => {
  mongo.getTasks(result => {
    res.json(result);
  });
});

app.post('/addNewTasks', (req, res) => {
  let newTask = req.body;
  mongo.addTask(newTask, result => {
    res.json(result);
  });
});

// Q3: we have 6 errors here please fix them [6 pt]
//app.get('/tasks', (req, res) => {
app.put('/tasks/:id/', (req, res) => {  
const ID = req.params;
  mongo.updateTask(ID,result => {
    res.json(result)
    //res(ID);
  });
});


app.delete('/tasks/:id', (req, res) => {
  let id = req.params.id;
  mongo.deleteOneTask(id, result => {
    res.json(result);
  });
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`Server listening to ${PORT}`));
