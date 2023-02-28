const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()

// routers
const apiRouter = require('./routers/api')
const appRouter = require('./app')

const port = 3000
// allows for json parsing...
app.use(cors({ optionSuccessStatus: 200 }))
app.use(express.urlencoded({ extended: false }))
// set static files url
app.use('/public', express.static(path.join(__dirname, "public")))
// set routers url
app.use('/api', apiRouter)
app.use('/', appRouter)

app.listen(port)