let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// create a reference to the model
let User = require('../models/user');

module.exports.displayUserList = (req, res, next) => {
    User.find((err, userList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BookList);

            res.render('user/list', {title: 'Users', UserList: userList});      
        }
    });
}

module.exports.displayAddPage = (req, res, next) => {
    res.render('user/add', {title: 'Add User'})          
}

module.exports.processAddPage = (req, res, next) => {
    let newUser = User({
        "fullname": req.body.fullname,
        "dob": req.body.dob,
        "username": req.body.username,
        "email": req.body.email,
       
    });

    User.create(newUser, (err, Book) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users');
        }
    });

}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    User.findById(id, (err, userToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('user/edit', {title: 'Edit User', user: userToEdit})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedUser = User({
        "_id": id,
        "fullname": req.body.fullname,
        "dob": req.body.dob,
        "username": req.body.username,
        "email": req.body.email,
    });

    User.updateOne({_id: id}, updatedUser, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/users');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    User.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the book list
             res.redirect('/users');
        }
    });
}