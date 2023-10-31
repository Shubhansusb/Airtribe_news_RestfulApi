const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {

    const authHeader = req.headers['authorization'];
    const token = authHeader ? authHeader.split(' ')[1] : null;
    if (token == null) return res.status(401).send('token missing');
    

    try {

        const decoded = jwt.verify(token, process.env.API_KEY);
        req.user = decoded;

        next();
    } catch (error) {
        console.log(token)
        return res.status(401).json({ message: 'Invalid token' });
    }

}

module.exports = { verifyToken };
