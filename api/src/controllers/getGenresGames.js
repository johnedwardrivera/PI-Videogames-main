const axios = require('axios')
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env

// buscar los generos de los juegos y los guardos en la DB
const getGenresGames = async () => {
    try {
        let genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`) 
        console.log('soy el genero' ,genresApi.data.results)
        genresApi.data.results.forEach(e => {
            Genre.findOrCreate({
                where: { name: e.name }

            })

        })

        return Genre.findAll()


    } catch (error) {
        return error.message

    }
}

module.exports = getGenresGames