const express = require('express')
const path = require('path')
const router = express.Router()

const options = {
    root: path.join(__dirname, "views"),
    dotfiles: 'deny'
}

router.get('/', (req, res)=>{
    res.sendFile('index.html', options)
})


module.exports = router
