const express = require('express');
const router = express.Router();
const Student = require('../models/Student');

//create student
router.post('/students', async (req, res) => {
    try{
        const student = new Student(req.body);
        await student.save();
        res.status(201).json(student);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

//get students
router.get('/students', async (req, res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
});

//get student
router.get('/students/:id', async (req, resl) => {
    try{
        const student = await Student.findById(req.params.id);
        if(!student) return res.status(404).json({message: 'Student not found'});
        res.json(student);
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

//update student
router.put('/students/:id', async (req,res) => {
    try{
        const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
            new: true});
        if(!student) return res.status(404).json({message: 'stuent not found'});
        res.json(student);
    }
    catch(error){
        res.status(400).json({message: error.message});
    }
});

//delete student
router.delete('/students/:id', async (req,res) => {
    try{
        const student = await Student.findByIdAndDelete(req.params.id);
        if(!student) return res.status(404).json({message: 'student not found'});
    }
    catch(error){
        res.status(500).json({message: error.message});
    }
});

module.exports = router;