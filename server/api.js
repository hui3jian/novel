const models    = require('./db');
const express   = require('express');
const router    = express.Router();

/*
 * 创建 (create)
 * 读取 (get)
 * 更新 (update)
 * 删除 (delete)
*/

// 首页列表接口
router.get('/api/index/list', (req, res) => {
  models.NovelMain.find().populate({
    path: "author_id",
    select: 'name',
    populate: {
      path: "new_chapter_at",
      // match:{$max:"update_at"}
    }
  }).exec(function (err, data) {
      if (err){
        res.send(err);
        console.log(err);
      }else{
        res.send(data);
      }
  })
})


module.exports = router;
