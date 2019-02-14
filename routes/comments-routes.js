let express = require('express');
let router = express.Router();
let controller = require('../controllers/comments-controller');

//router.get('/', controller.getAllComments);
// router.route('/')
//     .get(controller.getAllComments)
//     .post(controller.createComment);

router.route('/:id')
    .get(controller.getCommentById)
    .post(controller.createComment);

module.exports = router;