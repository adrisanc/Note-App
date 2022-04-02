const  mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, trim: true, unique: true },
      
      done: {
        type: Boolean,
        default: false,
      },
    },
    {
      timestamps: true,
      versionKey: false,
    }
  );
  const Task = mongoose.model('Task', TaskSchema) 
module.exports = Task;