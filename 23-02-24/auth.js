const auth = (req, res, next) => {
    const { user } = req.query;
    if (user === 'admin') {
        res.send(`Welcome ${user}! This is your own page`);
    } else {
        res.send(`Sorry ${user}! You are not allowed`);
    }

next();

};



module.exports = auth;