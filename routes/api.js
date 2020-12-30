const express = require('express');
const router = express.Router();
const Task = require('../models/Task');


router.get('/', async(req, res) => {
  try {
    const data = await Task.find();
    res.json({ success: true, data });
  } catch (err) {
    res.json({success: false, message: err})
  }
});

router.post('/', async(req, res) => {
  const task = await new Task({
    title: req.body.title,
    message: req.body.message,
    date: req.body.date,
    isCompleted: req.body.isCompleted
  });
  try {
    const data = await task.save()
    res.json({ success: true, data});
  } catch (err) {
    res.json({success: false, message: err});
  }
});

router.put('/:taskId', async(req, res) => {
  try {
    const data = await Task.updateOne({_id: req.params.taskId}, {$set: {isCompleted: req.body.isCompleted}});
    res.json({ success: true });
  } catch (err) {
    res.json({success: false, message: err});
  }
});

router.delete('/:taskId', (req, res) => {
  res.json({"test": "test"})
});

module.exports = router;