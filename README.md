<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

</head>
<body>

  <h1>Airtribe_news_RestfulApi</h1>
  <p>News API with User Preferences</p>
  <p>This project is a RESTful API built with Node.js and Express.js that allows users to fetch news articles from multiple sources based on their preferences. Users can register, log in, set their news preferences, and fetch news articles tailored to their interests.</p>

  <h2>Project Setup</h2>
  <ol>
    <li>Clone the repository:</li>
    <code>git clone https://github.com/your-username/news-api.git</code>
    <code>cd news-api</code>
    <li>Install Dependencies:</li>
    <code>npm install</code>
    <li>Set Environment Variables:</li>
    <p>Create a <code>.env</code> file in the root directory and add the following variables:</p>
    <code>API_KEY=your_news_api_key</code>
    <li>Start the Server:</li>
    <code>npm start</code>
  </ol>
  <p>The server will run on <a href="http://localhost:8080" target="_blank">http://localhost:8080</a>.</p>

  <h2>Testing the API with Postman</h2>
  <ol>
    <li>Register a User:</li>
    <p>Send a POST request to <a href="http://localhost:8080/api/signUp" target="_blank">http://localhost:8080/api/signUp</a> with the following sample registration JSON body:</p>
    <code>
      {
        "name": "your name",
        "email": "example@example.com",
        "password": "securepassword",
        "preferences": "technology"
      }
    </code>
    <li>Login:</li>
    <p>Send a POST request to <a href="http://localhost:8080/api/signIn" target="_blank">http://localhost:8080/api/signIn</a> with the sample login JSON body:</p>
    <code>
      {
        "email": "example@example.com",
        "password": "securepassword"
      }
    </code>
    <li>Set Preferences:</li>
    <p>Send a PATCH request to <a href="http://localhost:8080/api/edit" target="_blank">http://localhost:8080/api/edit</a> with the updated preferences JSON body. Include the access token in the Authorization header.</p>
    <li>Fetch News:</li>
    <p>Send a GET request to <a href="http://localhost:8080/api/news" target="_blank">http://localhost:8080/api/news</a> to retrieve news articles based on user preferences. Include the access token in the Authorization header.</p>
  </ol>

  <h2>Dependencies Used</h2>
  <ul>
    <li>express: Web framework for Node.js</li>
    <li>mongoose: MongoDB object modeling tool</li>
    <li>bcrypt: Library for hashing passwords</li>
    <li>jsonwebtoken: Library for creating JSON Web Tokens</li>
    <li>axios: HTTP client for making API requests</li>
  </ul>

  <h2>Contributing</h2>
  <p>Feel free to contribute to this project by opening issues or creating pull requests. Your feedback and contributions are welcome!</p>
  <p>Shubhanshu Singh Bhadoria</p>

</body>
</html>
