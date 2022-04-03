const  mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema(
    {
      title: { type: String, required: true, trim: true},
      
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
  TaskSchema.path('title').validate( () => {
    return true
  },"Task name already exists")
  const Task = mongoose.model('Task', TaskSchema) 
module.exports = Task;