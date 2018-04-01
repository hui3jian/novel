const mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId;

const _schema = {

  user:{

    // 登录
    loginSchema: {
      account         :   String,
      password        :   { type: String, unique: true},
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

    novelMainSchema: {
      title:           { type: String },
      novel_id:        { type: Number, unique: true },
      content_id:      { type: ObjectId, ref: 'novel_Content' },
      author_id:       { type: ObjectId, ref: 'novel_Author' },
      sort:            { type: String },
      topic_sort:      { type: String },
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
      new_chapter_at:  { type: ObjectId, ref: 'novel_Content' },
      is_finished:     { type: Boolean, default: 'false' },
      is_del:          { type: Boolean, default: 'false' },
      is_free:         { type: Boolean, default: 'false' },
      is_rcmd:         { type: Boolean, default: 'false' },
      is_news:         { type: Boolean, default: 'false' },
      is_boutique:     { type: Boolean, default: 'false' },
      sex_trend:       { type: Number, default: 0 },
      create_at:       { type: Date, default: Date.now },
      update_at:       { type: Date, default: Date.now },
      content_is_html: { type: Boolean, default: 'false' }
    },
    novelContentSchema: {
      novel_id:        { type: ObjectId, ref: 'novel_Main' },
      chapter_number:  { type: Number, default: 0 },
      chapter_title:   { type: String },
      novel_content:   { type: String },
      create_at:       { type: Date, default: Date.now },
      update_at:       { type: Date, default: Date.now },
    },
    novelAuthorSchema: {
      id:              { type: Number },
      name:            { type: String },
      tel:             { type: Number },
      email:           { type: String },
      fans_count:      { type: Number },
      honor:           { type: String },
      create_novel:    { type: String },
      create_at:       { type: Date, default: Date.now },
      update_at:       { type: Date, default: Date.now },
    },
    novelSortSchema: {
      id:              { type: Number, unique: true },
      name:            { type: String, unique: true },
      create_at:       { type: Date, default: Date.now },
      is_del:          { type: Boolean, default: 'false' },
    },
  },

  //话题
  topic:{

    topicSortSchema:{
      id:              { type: Number, unique: true },
      name:            { type: String, unique: true  },
      create_at:       { type: Date, default: Date.now },
      is_del:          { type: Boolean, default: 'false' },
    }


  },


  //荣耀
  honor:{
    honorSortSchema:{
      id:              { type: Number, unique: true },
      name:            { type: String, unique: true  },
      has_count:       { type: Number },
      create_at:       { type: Date, default: Date.now },
      is_del:          { type: Boolean, default: 'false' },
    }
  }

};

module.exports = _schema;
