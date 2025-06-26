import express from 'express'

const userRoute = express.Router()

userRoute.get('/login', (req, res) => {
    res.render('login');
})
userRoute.get('/signup', (req, res) => {
    res.render('signup');
})
userRoute.get('/todolist', (req, res) => {
    res.render('todolist');
})
export default userRoute