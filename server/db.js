// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，
// Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
const Schema   = mongoose.Schema;
const _schema  = require('./schema');

//连接数据库,如果不自己创建,默认novel数据库会自动生成\
mongoose.connect('mongodb://localhost/new_novel', function (err) {
  if (err){
    console.log("mongodb 连接失败：" + err);
  }else{
    console.log("mongodb 连接成功");
  }
});

//
// //为这次连接绑定事件
// const  db = mongoose.connection;
// db.once('error', () => console.log('Nongo conection error'));
// db.once('open',  () => console.log('Mongo connection successed'));

/*
 * 定义模式 loginSchema
*/
const loginSchema            =   new Schema(_schema.user.loginSchema);

const novelMainSchema        =   new Schema(_schema.novel.novelMainSchema);
const novelContentSchema     =   new Schema(_schema.novel.novelContentSchema);
const novelAuthorSchema      =   new Schema(_schema.novel.novelAuthorSchema);
const novelSortSchema        =   new Schema(_schema.novel.novelSortSchema);

const topicSortSchema        =   new Schema(_schema.topic.topicSortSchema);

const honorSortSchema        =   new Schema(_schema.honor.honorSortSchema);


/*
 * schema populate
 */
// novelMainSchema.static = {
//   findAuthodID: function () {
//
//   }
// }


/*
 * 定义模型 Model
 */
const Models = {
  Login         :   mongoose.model('Login', loginSchema),

  NovelMain     :   mongoose.model('novel_Main', novelMainSchema),
  NovelContent  :   mongoose.model('novel_Content', novelContentSchema),
  NovelAuthor   :   mongoose.model('novel_Author', novelAuthorSchema),
  NovelSort     :   mongoose.model('novel_Sort', novelSortSchema),

  TopicSort     :   mongoose.model('topic_Sort', topicSortSchema),

  honorSort     :   mongoose.model('honor_Sort', honorSortSchema),
};



module.exports = Models;



