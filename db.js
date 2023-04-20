const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true}).then(() => {
 console.log('connected to the database')
}).catch((e) => {
    console.error('error connecting', e)

});
