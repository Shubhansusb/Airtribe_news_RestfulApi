# Airtribe_news_RestfulApi
News API with User Preferences
This project is a RESTful API built with Node.js and Express.js that allows users to fetch news articles from multiple sources based on their preferences.
Users can register, log in, set their news preferences, and fetch news articles tailored to their interests.

Project Setup
1.Clone the repository: git clone https://github.com/your-username/news-api.git
cd news-api
2.Install Dependencies:npm install
3.Set Environment Variables:
Create a .env file in the root directory and add the following variables:API_KEY=your_news_api_key
4.Start the Server: npm start
The server will run on http://localhost:8080.

Testing the API with Postman
1.Register a User:
Send a POST request to http://localhost:8080/api/signUp with the following sample registration JSON body:
{
  "name": "your name",
  "email": "example@example.com",
  "password": "securepassword",
  "preferences": "technology"
}
2.Login:Send a POST request to http://localhost:8080/api/signIn with the sample login JSON body:
{
  "email": ""example@example.com",
  "password": "securepassword"
}
3.Set Preferences:Send a PATCH request to http://localhost:8080/api/edit with the updated preferences JSON body. Include the access token in the Authorization header.
4.Fetch News: Send a GET request to http://localhost:8080/api/news to retrieve news articles based on user preferences. Include the access token in the Authorization header.

Dependencies Used
express: Web framework for Node.js
mongoose: MongoDB object modeling tool
bcrypt: Library for hashing passwords
jsonwebtoken: Library for creating JSON Web Tokens
axios: HTTP client for making API requests

Contributing:Feel free to contribute to this project by opening issues or creating pull requests. Your feedback and contributions are welcome!
Shubhanshu Singh Bhadoria
