const mongoose = require('mongoose')

const CharacterSchema = mongoose.Schema({
    category:  String,
    name: String,
    alterEgo: String,
    age: Number,
    mundo: String,
    abilities: { 
        force: Number,
        intelligence: Number,
        agility: Number,
        endurance: Number,
        velocity: Number
    },
    movies: [String],
    image: String,
})

module.exports = mongoose.model('Character', CharacterSchema)