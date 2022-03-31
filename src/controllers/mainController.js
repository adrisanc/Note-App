const express = require ('express');
const Task = require('../models/Task')

const mainController = {

    home : async(req,res) =>{
      const tasks = await Task.find().lean()
        res.render("index", {tasks});
    },

    createTask : async (req, res) => {
        try {
          const task = Task(req.body);
          const taskSaved = await task.save();
          console.log(taskSaved);
          res.redirect('/')
        } catch (error) {
          return res.send(error);
        }
      }
}

module.exports = mainController