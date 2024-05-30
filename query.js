const mongoose = require('mongoose');
const User = require('./models/User');

mongoose.connect('mongodb://localhost:27017/restaurant', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    return User.find();
}).then(users => {
    console.log(users);
    mongoose.connection.close();
}).catch(err => {
    console.error('Error:', err);
});
