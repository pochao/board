# 詳細步驟
+ 打開終端機
+ 新增 server資料夾
+ code . 打開 vs code編輯器
+ Ctrl+` 打開終端機視窗
+ 在終端機視窗鍵入 npm install nodemon -g
+ 在終端機視窗鍵入 npm init -y
+ 在終端機視窗鍵入 npm install express
+ 在終端機視窗鍵入 npm install cors
+ 新增 app.js檔案
+ 加入中間件
```javascript
var cors = require('cors');

app.use(cors());
app.use(express.json());
```
+ 新增 GET / 路由，for測試
```---
app.get('/', (req, res) => {
  res.json('Hello world');
});
```
+ 新增 POST /board 路由
```javascript
app.post('/board', (req, res) => {
  var board = {
    name: req.body.name,
    content: req.body.content,
    created: new Date()
  }
  
  console.log(board);
});
```
+ 使用postman傳資料到/board
  + POST http://localhost:5000/board
```javascript
{
	"name": "Kevin",
	"content": "Hello World!!!!!!"
}
```
+ 在終端機視窗鍵入 npm install nedb
  + 參考 https://www.npmjs.com/package/nedb
+ 存入資料庫，在 POST /board路由加入
```---
  db.insert(board, (err, doc) => {
    if (err) throw err;
    //console.log(doc);
    res.json('success');
  });
```
+ 新增 GET /board路由
```---
app.get('/board', (req, res) => {
  db.find({})
    .sort({created:-1})
    .exec((err, docs) => {
      if (err) throw err;

      res.json(docs);
    });
});
```

