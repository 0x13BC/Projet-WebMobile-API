let express = require('express');
let router = express.Router();
let controller = require('../controllers/news-controller');
let auth = require('../utils/validate-token')


// /* GET users listing. */
// router.get('/', function (req, res, next) {
//     res.send('respond with a resource');
// });



/**
 * @typedef New
 * @property {string} title.required
 * @property {String} description.required
 * @property {date} createdAt
 * @property {Number} authorId
 */

/**
 * Search news
 * @route GET /api/news/search
 * @group news - Operations about news
 * @param {string} title.query - title of new
 * @param {string} description.query - description of new
 * @param {Date} createdAt.query - creation date of new
 * @returns {Array.<New>} 200 - An array of news
 * @returns {Error} - Unexpected error
 */
router.route('/search')
    .get(controller.searchNews)

/**
 * @route GET /api/news
 * @group news - Operations about news
 * @returns {Array.<News>} 200 - An array of news
 * @returns {Error} - Unexpected error
 */
/**
 * @route POST /api/news
 * @group news - Operations about news
 * @param {New} new - new to insert
 * @returns {New} 200 - New created
 * @returns {Error} - Unexpected error
 */
router.route('/')
    .get(controller.getAllNews)
    .post(controller.createNews);

/**
 * @route GET /api/news/:id
 * @group news - Operations about news
 * @param {string} id - id to find New
 * @returns {New} 200 - An New
 * @returns {Error} - Unexpected error
 */
/**
* @route PUT /api/news/:id
* @group news - Operations about news
* @param {string} id.query - id to update new
* @param {New} new - New to update
* @returns {New} 200 - New updated
* @returns {Error} - Unexpected error
*/
/**
 * @route DELETE /api/news/:id
 * @group news - Operations about news
 * @param {string} id - id to remove New
 * @returns {New} 200 - New deleted
 * @returns {Error} - Unexpected error
 */
router.route('/:id')
    .get(controller.getNewsById)
    .put(controller.updateNews)
    .post(controller.createComment)
    .delete(auth.admin, controller.deleteNews);


module.exports = router;