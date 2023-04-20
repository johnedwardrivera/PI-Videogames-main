const axios = require('axios');
const { Videogame, Genre } = require('../db')
const { API_KEY } = process.env

const getvideogamesname = async (name) => {
    const resultNameApi = await videogamesApi(name)
    const  resultNameDb = await getNameGame(name) 
    Object.values(resultNameDb) 
     console.log("gameover",resultNameDb)

    return{ 
        resultNameApi , 
        resultNameDb   
    } 
}



// buscar los nombres de los juegos 
const videogamesApi = async (name) => {
    try {
        const videoname = await axios(`https://api.rawg.io/api/games?search=${name}&key=${API_KEY}`);
        const data = await videoname.data.results
        const gameNameData = data.find(gamename => gamename.name.toUpperCase() == name.toUpperCase())
        if (gameNameData) {
            return [{
                id: gameNameData.id,
                name: gameNameData.name,
                released: gameNameData.released,
                background_image: gameNameData.background_image,
                rating: gameNameData.rating,
                ratings: gameNameData.ratings,
                platforms: gameNameData.platforms,
                genre: gameNameData.genres.map(el => el.name)

            }]

        }

    } catch (error) {
        return error;
    }

}
// traerme los nombres de la db  
const getNameGame = async (name) => {
    try {
        const gamedb = await Videogame.findAll({
            include: [{
                model: Genre,
                attributes: ['id', 'name']
            }

            ]
        }) 
        const gameNamedb = gamedb.find(namedb => namedb.name.toUpperCase() == name.toUpperCase()) 
        if(gameNamedb){ 
            return [{ 
                id: gameNamedb.id,
                name: gameNamedb.name,
                description: gameNamedb.description,
                platforms: gameNamedb.platforms,
                image: gameNamedb.image,
                released: gameNamedb.released,
                rating: gameNamedb.rating,
                genres: gameNamedb.genres.map(el => el.name)        
            
            }]
              
        } 
        return "the name of the video Game does not exist"

    } catch (error) { 
        return error

    }


}


module.exports = getvideogamesname 