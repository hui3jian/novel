var ObjectId = require('mongodb').ObjectID;
var ObjectId = require('mongodb').ObjectID;

const _schema = {

  user:{

    // 登录
    loginSchema: {
      account         :   String,
      password        :   String,
      createTime      :   Date
    },

    // 注册
    register: {

    },

    // 退出
    logout: {

    },

  },

  // 小说
  novel: {
    novelListSchema: {
      title:           { type: String },
      content:         { type: String },
      author_id:       { type: ObjectId },
      sort:            { type: ObjectId },
      topic_sort:      { type: ObjectId },
      novel_list:      { type: ObjectId },
      img:             { type: String },
      price:           { type: Number, default: 0 },
      word_count:      { type: Number, default: 0 },
      read_count:      { type: Number, default: 0 },
      rcmd_count:      { type: Number, default: 0 },
      collect_count:   { type: Number, default: 0 },
      reward_count:    { type: Number, default: 0 },
      week_ticket:     { type: Number, default: 0 },
      mon_ticket:      { type: Number, default: 0 },
      all_ticket:      { type: Number, default: 0 },
      news_chapter:    { type: String },
      is_finished:     { type: Number, default: 0 },
      is_del:          { type: Number, default: 0 },
      is_free:         { type: Number, default: 0 },
      is_rcmd:         { type: Number, default: 0 },
      is_news:         { type: Number, default: 0 },
      is_boutique:     { type: Number, default: 0 },
      sex_trend:       { type: Number, default: 0 },
      create_at:       { type: Date, default: Date.now },
      update_at:       { type: Date, default: Date.now },
      last_reply:      { type: ObjectId },
      last_reply_at:   { type: Date, default: Date.now },
      content_is_html: { type: Boolean }
    }
  }

};

module.exports = _schema;
