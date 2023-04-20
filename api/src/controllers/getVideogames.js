const axios = require('axios');
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env
// traer todos los juegos
const getVideogames = async (req) => {
    const resultGameApi = await getGamesApi(req)
    const resultGameDb = await getGamesDb()
    const allGames = resultGameApi.concat(resultGameDb)
    // console.log("todos los juegos", allGames)

    return allGames


}


// traer los juegos de la db  
const getGamesDb = async () => {
    const gamesDb = await Videogame.findAll({
        include: [{
            model: Genre,
            attributes: ['id', 'name']
        }

        ]
    })
    return gamesDb.map(e => {
        return {
            id: e.id,
            name: e.name,
            released: e.released,
            image: e.image,
            rating: e.rating,
            ratings: e.ratings,
            platforms: e.platforms,
            genres: e.genres.map(el => el.name)

        }
    })

}

//traer los juegos desde la api  
const getGamesApi = async (req) => {
    const gamesApi = await axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${req}`)
    return gamesApi.data.results.map(e => {
        return {
            id: e.id,
            name: e.name,
            released: e.released,
            background_image: e.background_image,
            rating: e.rating,
            ratings: e.ratings,
            platforms: e.platforms,
            genres: e.genres.map(el => el.name)

        }

    })
}




module.exports = getVideogames