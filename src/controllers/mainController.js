const express = require ('express');

const mainController = {

    home : (req,res) =>{
        res.render("main");
    }
}

module.exports = mainController