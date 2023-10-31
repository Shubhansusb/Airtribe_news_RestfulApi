const express = require('express');
const bcrypt = require('bcrypt');
const Jwt = require('jsonwebtoken');
const User = require('../db_model/schema');


const signUp = async (req, res) => {
    try {

        const { name, email, password, preferences } = req.body;
        if (!name || !email || !password || !preferences) {
            return res.status(400).json('All fields are required to register');
        }

        const newUser = new User({
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password,9),
            preferences: req.body.preferences,
            name: req.body.name,
        })

        await newUser.save();
        res.status(200).json('user save successfully')


    } catch (error) {
        res.status(500).json(`server ecncountered the error while saving the user : ${error.message}`);

    }

}

const signIn = async (req, res) => {
    try {
        const emailPassed = req.body.email;
        const user = await User.findOne({ email: emailPassed });

        if (!user) {
            res.status(401).json(`please enter the correct email, ${emailPassed} does not exist`);
        }

        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);


        if (!passwordIsValid) {
            res.status(401).json('Invalid password');
        }


        const token = Jwt.sign({ id: user.id }, process.env.API_KEY, {
            expiresIn: '1h'
        });

        res.status(200).json({
            user: {
                id: user.id,
                preferences: user.preferences,
                email: user.email
            },
            message: 'login successful',
            accesstoken: token,
        });


    } catch (error) {
        console.error('Error during sign-in:', error);
        res.status(500).json(`Server encountered an error while signing in: ${error.message}`);
    }
}

 
module.exports = { signUp, signIn };
//{
//     "user": {
//         "id": "653ffa7f439667dd5da7456c",
//         "preferences": "technology",
//         "email": "johndoe@example.com"
//     },
//     "message": "login successful",
//     "accesstoken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1M2ZmYTdmNDM5NjY3ZGQ1ZGE3NDU2YyIsImlhdCI6MTY5ODcwMDE0MCwiZXhwIjoxNjk4NzAzNzQwfQ.WPID_YVx4z24F7TUogbxz3wWE1aZ72dmXCu5fIt440Y"
// }