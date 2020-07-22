const userCtrl = {}
const User = require('../models/User');

userCtrl.getUsers = async (req, res) => {
    const user = await User.find(); 
    res.json(user)
}

userCtrl.createUser = async (req, res) => {
    const { username } = req.body;
    const newUser = new User({
        username
    });
    await newUser.save();
    res.send({message: 'User Created'})
}

userCtrl.updateUser = (req, res) => res.send({message: 'PUT Request'})

userCtrl.getUser = (req, res) => res.send({title: 'X Request'})

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.params.id)
    res.send({message: 'User Deleted'})
}

module.exports = userCtrl;