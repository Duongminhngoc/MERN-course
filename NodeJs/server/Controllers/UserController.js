//normal function
function getListUser(req, res){
    res.send('List users');
}
//arrow function
const userDetail = (req, res) => {
    res.send('Detail users');
}

module.exports = {
    getListUser:getListUser,
    userDetail:userDetail
}