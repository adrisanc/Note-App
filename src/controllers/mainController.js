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
      },

      edit : async(req,res)=>{
        try {
          const id = req.params.id
          const task = await Task.findById(id).lean();
          res.render('editForm',{task})
        } catch (error) {
          console.log(error)
        }
        

      } ,

      saveEdition: async(req, res) =>{
        try {
          
          const id = req.params.id;
          await Task.findByIdAndUpdate(id,req.body);
          res.redirect('/')
        } catch (error) {
          console.log(error)
        }
      },
      delete :async(req,res) =>{
        try {
          const id = req.params.id;
        await Task.findByIdAndDelete(id);
        res.redirect('/')
        } catch (error) {
          console.log(error);
        }
      },
      done: async(req,res) => {
        
        const id =req.params.id;
        const task = await Task.findById(id);
        task.done = !task.done; // true to false
        await task.save();
        res.redirect('/')
      }
}

module.exports = mainController