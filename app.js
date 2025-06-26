import express from "express"
const app = express()
const port = 3000
import path, { dirname } from 'path';
import { fileURLToPath } from 'url';
import ejs from 'ejs'
    
const __dirname = dirname(fileURLToPath(import.meta.url));


app.set('view engine', 'ejs');
app.use(express.static('public'));

let users = ['user1', 'user2', 'user3']

app.get('/', (req, res) => {
    res.render('index', {users: users})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

