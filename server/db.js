// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，
// Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');

const schema = require('./schema');

//连接数据库,如果不自己创建,默认novel数据库会自动生成\
mongoose.connect('mongodb://localhost/novel');

//为这次连接绑定事件
const  db = mongoose.connection;
db.once('error', () => console.log('Nongo conection error'));
db.once('open',  () => console.log('Mongo connection successed'));

/*
 * 定义模式 loginSchema
 *
*/
const loginSchema = new mongoose.Schema(schema.loginSchema);

/*
 * 定义模型 Model
 *
*/
const Models = {
  Login : mongoose.model('Login', loginSchema)
}

module.exports = Models;



