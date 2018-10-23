😸開發環境
安裝node https://nodejs.org
安裝編輯器 https://code.visualstudio.com
安裝postman https://www.getpostman.com
註冊網站空間 https://zeit.co/now

😸前端
建立client資料夾
新增index.html
建立網頁內容

使用 Skeleton CSS框架排版網頁
http://getskeleton.com/
https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
fetch GET https://boards.now.sh/board
https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
Append每一筆留言至網頁
fetch POST https://boards.now.sh/board 表單資料

😸後端
npm install nodemon -g
npm install http-server -g
建立server資料夾
npm init -y
npm install express
新增app.js
npm install cors
新增 POST /board 路由
使用postman傳資料到/board


npm install nedb --save
https://www.npmjs.com/package/nedb
存入資料庫 db.insert
新增 GET /board路由
查詢資料庫 db.find

😸上傳網站空間
npm install now -g
now
now alias

😸下一步
增加功能
美化網頁
使用新框架
