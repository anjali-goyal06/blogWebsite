const express = require('express')
const router = express.Router()

var store_title = [];
var store_content = [];

router.get('/',(req,res)=>
{
    res.send("Welcome to blogs website")
});

router.get('/api/create',(req,res)=>{
         res.render('createBlog');
    })


router.post('/api/create' ,async (req,res) =>{

    const newBlog = new newBlog({
        title : req.body.title , 
        author : req.body.author , 
        desc : req.body.desc
    })

    try{
        await newBlog.save()
    }catch(err){
        res.status(500).json(err)
    }
    
})    

module.exports = router