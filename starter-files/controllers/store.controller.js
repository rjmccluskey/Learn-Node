exports.middleware = (req, res, next) => {
    req.name = 'Rich';
    next();
}

exports.homepage = (req, res) => {
    res.render('index', {
        title: 'Home',
        name: req.name
    });
}

exports.addForm = (req, res) => {
    res.render('editStore', {
        title: 'Add a new store'
    });
}

exports.addStore = (req, res) => {
    res.json(req.body);
}