const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.redirect('/')
})

router.get('/whoami', (req, res) => {
    const software = req.headers['user-agent']
    const language = req.headers['accept-language']
    const ipaddress = req.header('x-forwarded-for') || req.socket.remoteAddress
    console.log(req.socket.remoteAddress)
    res.json({ipaddress, language, software})
})

module.exports = router