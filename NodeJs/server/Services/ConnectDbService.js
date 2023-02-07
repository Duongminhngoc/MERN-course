const mongoose = require('mongoose');
async function connectDatabase() {
    try {
        await mongoose.connect('mongodb://localhost:27017/DbTest');
        console.log('connect to database success');
    } catch (error) {
        console.log('connect fail', error);
    }
}

module.exports = connectDatabase;