var express = require("express")
var router =express.Router()

router.get('/',(req, res)=>{
    res.send('Retrieve all faculty members')
})

router.post('/',(req, res)=>{
    res.send('Add a faculty')
})

router.put('/',(req, res)=>{
    res.send('Update a faculty')
})

router.delete('/',(req, res)=>{
    res.send('Delete a faculty')
})

module.exports=router