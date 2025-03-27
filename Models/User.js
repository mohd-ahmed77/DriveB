const { default: mongoose } = require('mongoose');
const momgoose = require('mongoose');

function main(){
    mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...')); 
}

main();

const Schema = momgoose.Schema; 

const userSchema = new Schema({
    name: String,
    email: String,
    image: String,    
});     

// Exporting the model      
mongoose

module.exports = momgoose.model('User', userSchema);    