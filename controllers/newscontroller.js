const axios = require('axios');
const User = require('../db_model/schema');
const nodeCache = require('node-cache');

const newsCache = new nodeCache();

const fetchNews = async (req, res) => {
	const userId = req.user.id;

	try {
		const userFound = await User.findById(userId);
		if (!userFound) return res.status(401).json('user not found');
        const userPreference = userFound.preferences;
        const key = userPreference;//we are setting the key as user's preference
        const cachedData = newsCache.get(key);//trying to fetch the data from the cache

        if (cachedData) {
            return res.status(200).json(cachedData);
        } else {
            console.log('caching is not implemented yet')
            try {
                const apiUrl = `https://newsapi.org/v2/top-headlines?category=${userPreference}&apiKey=84db96168cbc4d4bb6f7f81dee139f3b`;
                const response = await axios.get(apiUrl);
                if (response) {
                    newsCache.set(userPreference, response.data.articles, 6000);//setting the cache
                    return  res.status(200).json(response.data.articles);
                } else {
                    return res.status(500).send('internal server error, encountered error while fetching the response')
                }
            } catch (error) {
                return res.status(500).json('error fetching the response');
            }
        }
    } catch (error) {
		console.error(error);
		return res.status(500).json('Internal Server Error');
	}
};

module.exports = { fetchNews };
