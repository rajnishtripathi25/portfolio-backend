const express = require('express') 

const cors = require('cors')
const router = require('./router/index.js')


const Port = process.env.port || 5000
const app = express()

app.use(express.json())
app.use(express.static('public'));
app.use(cors())
app.use(router)

// call it for insert the data
// DefaultData();


app.listen(Port, () => console.log(`Server is running on port ${Port}`))
