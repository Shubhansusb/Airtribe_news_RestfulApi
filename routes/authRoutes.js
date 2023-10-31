const router = require('express').Router();
const { signUp, signIn } = require('../controllers/authcontroller');
const { verifyToken } = require('../controllers/authMiddleware')
const { fetchNews } = require('../controllers/newscontroller')
const User = require('../db_model/schema')
const bcrypt = require('bcrypt')

router.post('/signIn', signIn);
router.post('/signUp', signUp);
router.get('/news', verifyToken, fetchNews);


router.get('/getPreferences', verifyToken, async (req, res) => {
    const userId = req.user.id;

    try {
        const userFound = await User.findById(userId);
        if (!userFound) return res.status(401).json('user not found');
       return  res.status(200).json(userFound.preferences)
    } catch (error) {
      return  res.status(401).send('could not find the user, ISE');
    }

})

router.patch('./edit', verifyToken, async (req, res) => {
    const userId = req.user.id;
    const dataToBeUpdated = req.body;

    try {
        const userUpdated = User.findByIdAndUpdate(userId, dataToBeUpdated, { new: true })
        if (!userUpdated) return res.status(404).send('could not perform the updation to the user, user not found')

        return res.status(200).send('updated the record successfully');

    } catch (error) {
       return  res.status(500).json('please try again, ISE')
    }

})



module.exports = router;