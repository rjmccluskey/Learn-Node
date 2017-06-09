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