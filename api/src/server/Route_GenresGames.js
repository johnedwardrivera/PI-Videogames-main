const { Router } = require('express');
const getGenresGames = require('../controllers/getGenresGames') 
const getFilterGenero = require('../controllers/getFilterGenero')

const router = Router();

// end-points
router.get('/genres', async (req, res) => {
    try {
        const results = await getGenresGames()
        res.json(results)

    } catch (error) {
        res.status(500).json(error.message)

    }
}) 
router.get('/filter/genres', async(req, res) =>{   
    try { 
        const filtergenres = await getFilterGenero(req.query.genrename) 
        res.json(filtergenres) 
     console.log("ruta filter genero", req.query.genrename)
        
    } catch (error) { 
        res.status(500).json(error.message)
        
    }

})

module.exports = router


