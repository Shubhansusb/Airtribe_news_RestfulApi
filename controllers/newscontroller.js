const axios = require('axios')
const User = require('../db_model/schema')
const NEWS_API_KEY = process.env.NEWS_API_KEY



const fetchNews = async (req, res) => {
    const userId = req.user.id;


    try {
        const userFound = await User.findById(userId);
        if (!userFound) return res.status(401).json('user not found');
        //console.log(userFound)
        const userPreference = userFound.preferences;
        //console.log(userPreference)

        const apiUrl = `https://newsapi.org/v2/top-headlines?category=${userPreference}&apiKey=${NEWS_API_KEY}`;
        const response = await axios.get(apiUrl);
        return res.status(200).json(response.data.articles);



    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Error');
    }


}

module.exports = { fetchNews };