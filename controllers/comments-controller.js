let news = require('../models/news');
let comment = require('../models/comments');

// GET /
exports.getAllNews = (req, resp) => {
    news.find({}, (err, data) => {
        resp.json(extractData(err, data));
    });
}

// GET /:id
exports.getNewsById = (req, resp) => {
    console.log(`ID: ${req.params.id}`);
    news.findById(req.params.id, (err, data) => {
        resp.json(extractData(err, data));
    });
}

// GET /search?....
exports.searchNews = (req, resp) => {
    const params = req.query;
    let pred = {};
    if (params.title)
        pred.title = { $regex: params.title, $options: 'i' };;
    if (params.createdAt)
        pred.createdAt = params.createdAt;
    if (params.description)
        pred.description = { $regex: params.description, $options: 'i' };

    news.find(pred, (err, data) => resp.json(extractData(err, data)));
}

//POST /
exports.createNews = (req, resp) => {
    console.log("Route Post: /api/news/:id");
    console.log(req.body);
    let obj = new news(req.body);
    obj.save((err, data) => resp.json(extractData(err, data)));
}

// // PUT /:id
// exports.updateNews = (req, resp) => {
//     news.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, data) => resp.json(extractData(err, data)));
// }

// //DELETE /:id
// exports.deleteNews = (req, resp) => {
//     news.remove({ _id: req.params.id }, (err, data) => {
//         if (err)
//             resp.json(err);
//         resp.json({ 'message': 'Event successfully deleted' });
//     })
// }

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
