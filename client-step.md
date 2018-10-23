# 詳細步驟
+ 打開終端機
+ 新增client資料夾
+ Code . 進入vs code編輯器
+ 啟動 http-server
+ 新增 index.html
+ 使用 html範本
+ 將此行剪下移到 body內
```html
<script src="main.js"></script>
```
+ 在 body貼上
```html
<h1>Welcome my board</h1>
<form>
  <label for="name">Name</label>
  <input type="text" name="name" id="name">
  <label for="content">Message</label>
  <textarea name="content" id="content"></textarea>
  <button>submmit</button>
</form>
<div id="board"></div>
```
+ 在 link下方插入
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css">
```
+ 在main.css檔案增加
```javascript
body {
  width: 50%;
  margin: auto;
}
```
+ 在 main.js檔案增加程式碼
```javascript
var API_URI = 'https://boards-api.now.sh/board';
var boardElement = document.getElementById('board');

listAllBoards();

function listAllBoards() {
  boardElement.innerHTML = '';

  fetch(API_URI)
  .then(res => res.json())
  .then(boards => {
    boards.forEach(board => {
      var div = document.createElement('div');

      var bName = document.createElement('h3');
      bName.textContent = board.name;

      var bContent = document.createElement('p');
      bContent.textContent = board.content;

      div.appendChild(bName);
      div.appendChild(bContent);
      boardElement.appendChild(div);
    });
  }).catch(err => console.log(err));
}
```
+ 在 main.js檔案增加程式碼
```javascript
var form = document.querySelector('form');

form.addEventListener('submit', event => {
  event.preventDefault();

  var formData = new FormData(form);
  var name = formData.get('name');
  var content = formData.get('content');

  var board = {
    name,
    content
  }

  fetch(API_URI, {
    method: 'POST',
    body: JSON.stringify(board),
    headers: {
      'content-type': 'application/json'
    }
  })
  .then(res => {
    if (res.ok) {
      form.reset();
      listAllBoards();
    }
  })
  .catch(err => console.log(err));
});
```
