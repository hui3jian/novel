const db = require('./db');

const addFictitiousData = function () {
  // let login = db.Login;

  let NovelAuthor = new db.NovelAuthor({
    id:                 1,
    name:               '一舟先生',
    tel:                13929560574,
    email:              '365129730@qq.com',
    fans_count:         16552,
    honor:              '1',
    create_novel:       '1,165',
  });
  let NovelSort = new db.NovelSort({
    id:                  1,
    name:                '历史'
  });
  let TopicSort = new db.TopicSort({
    id:                  1,
    name:                '暗黑系'
  });

  let honorSort = db.honorSort({
    id:                  1,
    name:                '粉丝数量突破一万'
  });

  let NovelMain = new db.NovelMain({
    novel_id:           1,
    title:              '禁锢之手',
    author_id:          NovelAuthor._id,
    sort:               '2',
    topic_sort:         '2',
    img:                '/static/img/linshi/img01.jpg',
  });

  let NovelContent = new db.NovelContent({
    novel_id:           NovelMain._id,
    chapter_number:     0,
    chapter_title:      '历史纪元',
    novel_content:      '满目都是古代衣服，这是哪一个世界？'
  });

  console.log('正在添加虚拟数据中。。。');

  const arr = [
    NovelAuthor,
    NovelSort,
    TopicSort,
    honorSort,
    NovelMain,
    NovelContent
  ];

  arr.forEach(function (item, key) {
    item.save(function (err, doc) {
      if (err) {
        console.log(item + '数据添加失败： ' + err);
        return false;
      }
    })
  });

  console.log('添加虚拟数据完成。。。');
};

module.exports = addFictitiousData;
