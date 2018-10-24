![image](https://github.com/pochao/board/blob/master/fullstack.PNG)

![image](https://github.com/pochao/board/blob/master/requeststep.png)

# 留言板範例

😸 線上展示
+ 前端  https://boards.now.sh
+ 後端  https://boards-api.now.sh/board


😸 開發環境
+ 安裝node https://nodejs.org
+ 安裝編輯器 https://code.visualstudio.com
+ 安裝postman https://www.getpostman.com

😸 前端
+ 架設靜態網頁伺服器
  + npm install http-server -g
+ 建立client資料夾
+ HTML
  + 新增index.html
  + 新增文字、表單、留言板標籤
+ CSS
  + 使用 Skeleton CSS框架排版網頁
    + http://getskeleton.com/
    + https://cdnjs.cloudflare.com/ajax/libs/skeleton/2.0.4/skeleton.min.css
+ Javascript
  + 從後端抓取資料
    + fetch GET https://boards.now.sh/board
    + https://developer.mozilla.org/zh-TW/docs/Web/API/Fetch_API/Using_Fetch
    + 使用createElement動態Append每一筆留言至網頁
  + 傳送資料到後端
    + fetch POST https://boards-api.now.sh/board 表單資料

😸 後端
+ npm install nodemon -g
+ 建立server資料夾
+ npm init -y
+ npm install express
+ 新增app.js
+ 加入中間件 (express.jason()、cors)
+ 新增 POST /board 路由
+ 使用postman傳資料到/board
+ npm install nedb
  + https://www.npmjs.com/package/nedb
+ 存入資料庫 db.insert
+ 新增 GET /board路由
+ 查詢資料庫 db.find

😸 上傳網站空間
+ 註冊網站空間 https://zeit.co/now
+ npm install now -g
+ 修改package.jason
  + scripts加入"start": "node app"
+ now
+ now alias

😸 下一步
+ 增加功能
+ 美化網頁
+ 使用新框架
