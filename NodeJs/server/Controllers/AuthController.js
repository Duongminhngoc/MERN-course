const login = (req, res) => {
    res.send('Login page');
}

const register= (req, res) => {
    res.send('Register page');
}

module.exports = {
    login:login,
    register:register
}