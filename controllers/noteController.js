const Note= require('../models/noteModel');

exports.getAllNotes = async (req, res) => {
    try{
        const notes= await Note.find();
        res.json(notes);
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
}

exports.createNote = async (req, res) => {
    const {title,content}= req.body;
    const newNote= new Note({title,content});
    try{
        await newNote.save();
        res.status(201).json({newNote})
    }catch(err){
        res.status(500).json({message: 'Server error'});
    }
}

exports.getNoteById= async (req, res) => {
    try{
        const note = await Note.findById(req.params.id);
        if(!note){
            return res.status(404).json({message: 'Note not found'});
        }
        res.json(note);
    }catch(err){
        res.status(500).json({message:'Server error'});
    }
}