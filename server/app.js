var express = require('express');
var app = express();
var cors = require('cors');
var Datastore = require('nedb')
  , db = new Datastore({ filename: 'board', autoload: true });

app.use(cors());
app.use(express.json());

app.post('/board', (req, res) => {
  //console.log(req.body);
  var board = {
    name: req.body.name,
    content: req.body.content,
    created: new Date()
  }

  db.insert(board, (err, doc) => {
    if (err) throw err;
    //console.log(doc);
    res.json('success');
  });
});

app.get('/board', (req, res) => {
  db.find({})
    .sort({created:-1})
    .exec((err, docs) => {
      if (err) throw err;

      res.json(docs);
    });
});

app.get('/', (req, res) => {
  res.json('Hello world');
});

app.listen(5000, () => {
  console.log('Server running on http://localhost:5000');
});