const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Routes
app.use('/api/products', productRoute)

app.get('/', (req, res) => {
  res.send('Hello from Node API Server Updated')
})

// First try to connect to database, then run the server
mongoose
  .connect(
    'mongodb+srv://ivandimauga1994:Z0qaHKjfb20uYTvZ@backenddb.tpijuau.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB'
  )
  .then(() => {
    console.log('Connected to database!')
    app.listen(3000, () => {
      console.log('Server is running on port 3000')
    })
  })
  .catch(() => {
    console.log('Connection failed!')
  })
