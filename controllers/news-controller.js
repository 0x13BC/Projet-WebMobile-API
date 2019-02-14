let news = require('../models/news');

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
    if (params.name)
        pred.name = { $regex: params.name, $options: 'i' };;
    if (params.sartdate)
        pred.startDate = params.sartdate;
    if (params.city)
        pred.city = { $regex: params.city, $options: 'i' };

    news.find(pred, (err, data) => resp.json(extractData(err, data)));
}

//POST /
exports.createNews = (req, resp) => {
    let obj = new news(req.body);
    obj.save((err, data) => resp.json(extractData(err, data)));
}

// PUT /:id
exports.updateNews = (req, resp) => {
    news.findByIdAndUpdate(req.params.id, req.body, { new: false }, (err, data) => resp.json(extractData(err, data)));
}

//DELETE /:id
exports.deleteNews = (req, resp) => {
    news.remove({ _id: req.params.id }, (err, data) => {
        if (err)
            resp.json(err);
        resp.json({ 'message': 'Event successfully deleted' });
    })
}

function extractData(err, data) {
    if (err)
        return err;
    return data;
}
