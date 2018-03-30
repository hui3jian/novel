// 引入写好的API
const api = require('./api');

//引入文件模块
const fs = require('fs');

//引入处理路径的模块
const path = require('path');

//引入处理post数据的模块
const bodyParser = require('body-parser');

//引入express
const express = require('express');
const app = express();

//json数据处理
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(api);

//访问静态资源文件  这里三访问所有dist目录下的静态资源文件
app.use(express.static(path.resolve(__dirname, '../dist')));

//因为三单叶应用,所有请求都走/dist/index.html
app.get('*', function (req, res) {
  const html = fs.readFileSync(path.resolve(__dirname, '../dist/index.html'), 'utf-8')
  res.send(html)
});

// 手动添加虚拟数据
// const _data = require('./add_data');
// _data();


// 监听8088端口
app.listen(8082);
console.log('success listen 8082 and ...');

