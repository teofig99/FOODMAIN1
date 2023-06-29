const axios = require("axios");
const { UUIDV4 } = require("sequelize");
const {Recipe} = require("../db");

const getRecipe = async() => {
    const apiInfoUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=2cd75bb7a4d14a9fb4eb34e04bdbb770&addRecipeInformation=true&number=1")
    const apiInfo = await apiInfoUrl.data.results.map((e)=>{
       return{
        name: e.title,
        img: e.image,
        types: e.dishTypes,
        diet: e.diets,
        likes: e.aggregateLikes,
        summary: e.summary,
        hs: e.healthScore,

        steps: e.analyzedInstructions.map((e)=>{
            return{
                step: e.steps.map((e)=>{
                    return{
                       step: e.step
                    }
                })
            }
        })


    }
    })



    return apiInfo
}









const recipe = async (req, res) => {
   const{recipe} = req.query
   const allRecipes = await getRecipe()
    res.status(200).send(allRecipes)
  }

const createRecipe = async (req, res) => {
    let{name, img, types, likes, summary, hs, steps} = req.body
    let idv4 = UUIDV4();
    // const dbId = idv4.slice(0, 4);
let recipeCreated = await Recipe.create({
    id: idv4,
    name: name,
    img: img,
    types: types,
    likes: likes,
    summary: summary,
    hs: hs,
    steps: steps
})

// let Type = await Type.findAll({
//     where: {
//         name:diet
//     }
// })
// recipeCreated.addType(Type)
res.status(200).send(recipeCreated)


}

module.exports = {
    recipe, createRecipe
    
}

