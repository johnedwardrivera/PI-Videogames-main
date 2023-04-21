const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js'); 
const Route_Videogames = require('../server/Route_Videogames') 
const Route_GenresGames = require('../server/Route_GenresGames') 
const Route_PostGames = require('../server/Route_PostGames')


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter); 
router.use('/', Route_Videogames)   
router.use('/api', Route_GenresGames) 
router.use('/', Route_PostGames) 
// router.use('/', Route_Videogames)  
// router.use('/', Route_Videogames) 




module.exports = router;
