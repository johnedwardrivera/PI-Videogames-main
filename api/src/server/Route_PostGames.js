const { Router } = require('express'); 

const postVideogames = require('../controllers/postVideogames') 

const router = Router(); 

// end-points 
router.post('/videogames', async (req , res) => { 
    const objGame = req.body 
    try {
        const createGame = await postVideogames(objGame) 
        res.status(201).json(createGame)
        
    } catch (error) { 
        res.status(500).json(error.message)
        
    }
})

module.exports = router