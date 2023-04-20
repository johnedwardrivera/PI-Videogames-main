const { Router } = require('express');
const getVideogames = require('../controllers/getVideogames') 
const getVideogamesId = require('../controllers/getVideogamesId') 
const getvideogamesname = require('../controllers/getvideogamesname')

const router = Router();

// end-points
router.get('/videogames', async (req, res) => {
    try { 
        console.log("revision parametro desde req",req.query.page)
        const games  = await getVideogames(req.query.page)
        res.json( games ) 
    } catch (error) {
        res.status(500).json(error.message)

    }

}) 

router.get('/:id', async(req, res) => {  
    const { id } = req.params 
    const source = isNaN(id) ? "bdd": "api"; 
    try { 
        const gameid = await getVideogamesId( id, source ) 
        res.json(gameid)
        
    } catch (error) { 
        res.status(401).json(error.message)
        
    }
}) 

router.get('/', async(req, res) => { 
    const { name } = req.query;   
    console.log(name) 
  
    try { 
        const { resultNameApi , resultNameDb} = await getvideogamesname(name)  
        if(resultNameDb){ 
            res.json(resultNameApi.concat(resultNameDb))
        }else{ 
            res.json(resultNameApi)
        
        } 
        
        
    } catch (error) { 
        res.status(401).json(error.message)
        
    }
  

})

module.exports = router