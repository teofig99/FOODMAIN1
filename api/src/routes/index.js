const { Router } = require('express');
const recipe = require("../controllers/recipe.js")
const type = require("../controllers/type.js")


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get("/recipe", recipe.recipe)
router.get("/type", type.type )
router.post("/createRecipe", recipe.createRecipe)

module.exports = router;
