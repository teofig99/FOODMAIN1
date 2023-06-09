const axios = require("axios");


const getRecipe = async() => {
    const apiInfoUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=2cd75bb7a4d14a9fb4eb34e04bdbb770&addRecipeInformation=true&number=1")
    const apiInfo = await apiInfoUrl.data.results.map((e)=>{
       return{
        name: e.title
    }
    })
    return apiInfo
}

const recipe = async (req, res) => {
   const{recipe} = req.query
   const allRecipes = await getRecipe()
  res.status(200).send(allRecipes)
  }

module.exports = {
    recipe
}