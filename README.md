### 运行环境
    node 14.18.1  npm 6.14.15  yarn 1.22.18
### 使用说明
    1.在根目录运行 npm install / yarn install
    2.npm run dev / yarn dev 运行开发环境
    3.npm run start / yarn start 运行生产环境
### 注意
    1.服务运行默认端口为 http 443,https 9892,根据情况可自行修改。
    2.需要使用mkcert生成自己的局域网ssl证书，并将key目录中证书以同样的名字替换为自己的。
    3.mysql连接配置在config.js，请自行修改，数据库文件另附。
