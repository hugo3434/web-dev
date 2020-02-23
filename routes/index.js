const express = require('express')
const router = express.Router() //set up a router

router.get('/',(req,res)=>{
    res.send("Hello World")
})

module.exports = router