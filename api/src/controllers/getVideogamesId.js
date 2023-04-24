const axios = require('axios')
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env

const getVideogamesId = async (id, source) => {
    const game = source == "api" ? VideogameIdApi(id) : await VideogameIdDb(id)
    return game


}

// buscar la id desde la api 

const VideogameIdApi = async (id) => {
    try {
        const VideogameApi = await axios(`https://api.rawg.io/api/games/${id}?key=${API_KEY}`)
        return  VideogameApi.data

    } catch (error) {
        return error;
    }
}

// buscar la id desde la Db 
const VideogameIdDb = async (id) => {
    try {
        const gameDb = await Videogame.findOne({
            where: { id: id },
            include: [
                {
                    model: Genre,
                    attributes: ['id', 'name']
                }
            ]
        })

        // preguntamos se existe la id en la base de datos  
        if (gameDb) {
            return {
                id: gameDb.id,
                name: gameDb.name,
                description: gameDb.description,
                platforms: gameDb.platforms,
                image: gameDb.image,
                released: gameDb.released,
                rating: gameDb.rating,
                genres: gameDb.genres.map(el => el.name)
            }
        }
        return "the videoGame with the id was not found";

    } catch (error) {
        return error;

    }


}

module.exports = getVideogamesId