const Character = require('../model/character')

module.exports = {
    async show (request, response){
        try {
            const character = await Character.find();
            console.log('GET', character);
            return response.status(200).json(character)
        } catch (error) {
            return response.status(500).json({
                msg: 'Deu ruim',
                error: error,
             })    
        }
    },
    async create (request, response){
        const { 
            category,
            name,
            alterEgo,
            age,
            mundo,
            abilities,
            movies,
            image
        } = request.body
        try {
            let character = await Character.create({
                category,
                name,
                alterEgo,
                age,
                mundo,
                abilities,
                movies,
                image
            })
            console.log(character)
            return response.status(200).json(character)    
        } catch (error) {
            return response.status(500).json({
                msg: 'Deu ruim',
                error: error,
             })        
        }
    },
}
