const express = require ('express');
const Task = require('../models/Task')

const mainController = {

    home : (req,res) =>{
        res.render("index");
    },

    createTask : async (req, res, next) => {
        try {
          const task = Task(req.body);
          const taskSaved = await task.save();
          console.log(taskSaved);
          res.send('Task Saved');
        } catch (error) {
          return res.send(error);
        }
      }
}

module.exports = mainController