const { Videogame, Genre } = require('../db')

// crear un perro
const postVideogames = async (objGame) => {  
    try { 
        const { name, description, platforms, image, released, rating, genres} = objGame 
       
        if(!name || !description || !platforms || !image || !released || !rating || !genres) throw new Error('Mandatory data missing') 

        const newVideogame = { name, description, platforms, image, released, rating } 

        const createVideogame = await Videogame.create(newVideogame) 

        // validamos si existe un genero 
        let genresData = await Genre.findAll({ 
            where: { 
                name: genres
            
            }       
        }) 
        // si no existe un genero creamos uno  
        if( genresData == ""){ 
            genresData = await Genre.create({ 
                name: genres
            
            }) 
        } 
        createVideogame.addGenre(genresData) 

        // si ya existe se muestra los generos  
        return Videogame.findAll({ 
            include: [ 
                { 
                    model: Genre, 
                    attributes: ['id', 'name']
                
                }   
            ]   
        })
        
    } catch (error) { 
        return { error: error.message }
        
    }


} 

module.exports =  postVideogames