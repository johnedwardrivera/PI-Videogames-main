const axios = require('axios'); 
const { API_KEY } = process.env 
const { Videogame, Genre } = require('../db')  
const {  getGamesDb } = require('./getVideogames')



const getFilterGenero = async (genrename) => { 
   
      try { 
        let videogames = await  getGamesDb() 
       
        let filtergenres = []
       
        for (let i = 1; i < 6; i++) {  
            let apigame = axios.get(`https://api.rawg.io/api/games?key=${API_KEY}&page=${i}`)  
            filtergenres.push(apigame) 
            
        }  
        
        filtergenres = (await Promise.all(filtergenres)).map(e => e.data.results.map(e =>{ 
            return({ 
                id: e.id,
                name: e.name,
                released: e.released,
                background_image: e.background_image,
                rating: e.rating,
                ratings: e.ratings,
                platforms: e.platforms,
                genres: e.genres.map(el => el.name)   
            }) 


        })) 
        let allGames= [] 

        filtergenres.map(el => {allGames = allGames.concat(el)})  
        videogames.map(el => {allGames = allGames.concat(el)}) 
        console.log("videogames todos", allGames)
     all = allGames.filter((e) => e.genres == genrename) 
     console.log("llegue a genrename",genrename)
     return all
     


      } catch (error) {
        return [{ error: error}]
      }
} 

module.exports = getFilterGenero