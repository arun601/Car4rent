const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const dbConnection = require('./db')
app.use(express.json())

app.use('/api/cars/' , require('./routes/carsRoute'))
app.use('/api/users/' , require('./routes/usersRoute'))
app.use('/api/bookings/' , require('./routes/bookingsRoute'))


const path = require('path')

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "./client/build/index.html"));
  });


app.get('/', (req, res) => res.send('Hello World!'))


 


app.listen(port, () => console.log(`Node JS Server Started in Port ${port}`))
