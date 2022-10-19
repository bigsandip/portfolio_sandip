let express = require('express');
let router = express.Router();

module.exports.displayHomePage = (req, res, next) => {
    res.render('index', {title: 'Home'});
}

module.exports.displayAboutPage = (req, res, next) => {
    res.render('aboutme', { title: 'About'});
}

module.exports.displayProjectsPage = (req, res, next) => {
    res.render('project', { title: 'Projects'});
}

module.exports.displayServicesPage = (req, res, next) => {
    res.render('service', { title: 'Services'});
}

module.exports.displayContactPage = (req, res, next) => {
    res.render('contact', { title: 'Contact'});
}