const axios = require("axios");

const getType = async() =>{
    const apiInfoUrl = await axios.get("https://api.spoonacular.com/recipes/complexSearch?apiKey=2cd75bb7a4d14a9fb4eb34e04bdbb770&addRecipeInformation=true&number=1")
    const apiInfo = await apiInfoUrl.data.results.map((e)=>{
        return{
            dietType: e.diets
        }
    })

    return apiInfo

} 

const type = async (req, res) =>{
    const{type} = req.query
    const allTypes = await getType()
    res.status(200).send(allTypes)
}

module.exports = {
    
    type
}
