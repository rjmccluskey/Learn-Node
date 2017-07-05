const mongoose = require('mongoose');

const Store = mongoose.model('Store');

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

exports.addStore = async (req, res) => {
    const store = await new Store(req.body).save();
    req.flash('success', `Created ${store.name}. Would you like to leave a review?`);
    res.redirect(`/store/${store.slug}`);
}

exports.getStores = async (req, res) => {
    const stores = await Store.find();
    res.render('stores', {title: 'Stores', stores});
}