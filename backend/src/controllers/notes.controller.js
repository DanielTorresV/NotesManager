const notesCtrl = {};
const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    const newNote = new Note({
        title: title,
        content: content,
        author: author,
        date: date
    });
    await newNote.save();
    res.send({message: 'Note Saved'});
}

notesCtrl.updateNote = async (req, res) => {
    const { title, content, author, date } = req.body;
    await Note.findOneAndUpdate({_id: req.params.id}, {
        title,
        content,
        author,
        date,
    });
    res.send({message: 'Note Updated'})
}

notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    res.send(note)
}

notesCtrl.deleteNote = async(req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.send({message: 'Note Deleted'})
}

module.exports = notesCtrl;