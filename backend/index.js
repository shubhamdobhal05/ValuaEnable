const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");


const app = express();
app.use(express.json);
app.use(express.urlencoded());
app.use(cors());


//connection to database
mongoose.connect('mongodb://localhost:27017/loginRegisterApp',{
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//user Schema
const userSchema = new mongoose.Schema({
    name: String,
    number: Number,
    email: String,
    password: String

})

const User = new mongoose("User", userSchema);

//Routes

app.post('/login', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(user) {
            if(password === user.password) {
                res.send({message: "LOgin Successful", user});
            } else {
                res.send({message: "Password does not match"});
            }
        } else {
            res.send({message: "User not registered"});
        }
    })
})
app.post('/register', (req, res) => {
    const {name, number, email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if(user) {
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                number,
                email,
                password
            })
            user.save(err => {
                if(err) {
                    res.send(err);
                } else {
                    res.send({message: "Successfully Registered"});
                }
            })
        }
    })
    
})

app.listen(3002, () => {
    console.log("Listening to port 3002")
})
