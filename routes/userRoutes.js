import express from 'express'

const userRoute = express.Router()

userRoute.get('/login', (req, res) => {
    res.render('login');
})
userRoute.get('/signup', (req, res) => {
    res.render('signup');
})
export default userRoute