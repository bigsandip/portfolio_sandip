let express = require("express");
let router = express.Router();
let mongoose = require("mongoose");

//create reference to the model (dbschema )
let Book = require("../models/users");

module.exports.displayUserList = (req, res, next) => {
  Book.find((err, userList) => {
    if (err) {
      return console.error(err);
    } else {
      

      res.render("user/userlist", { title: "Users", UserList: userList });
      //render book.ejs and pass title and Booklist variable we are passing bookList object to BookList property
    }
  });
};

module.exports.addpage = (req, res, next) => {
  res.render("user/adduser", {
    title: "Add User",
    displayName: req.user ? req.user.displayName : "",
  });
};

module.exports.addprocesspage = (req, res, next) => {
  let newUser = User({
    fullname: req.body.fullname,
    dob: req.body.dob,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  User.create(newUser, (err, Book) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      // refresh the book list
      res.redirect("/users");
    }
  });
};

module.exports.displayeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  User.findById(id, (err, booktoedit) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //show the edit view
      res.render("book/edituser", { title: "Edit User", user: usertoedit });
    }
  });
};

module.exports.processingeditpage = (req, res, next) => {
  let id = req.params.id; //id of actual object

  let updateuser = User({
    _id: id,
    fullname: req.body.fullname,
    dob: req.body.dob,
    username: req.body.username,
    password: req.body.password,
    email: req.body.email,
  });
  User.updateOne({ _id: id }, updateuser, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh the book list
      res.redirect("/user-list");
    }
  });
};

module.exports.deletepage = (req, res, next) => {
  let id = req.params.id;
  User.remove({ _id: id }, (err) => {
    if (err) {
      console.log(err);
      res.end(err);
    } else {
      //refresh user list
      res.redirect("/user-list");
    }
  });
};
