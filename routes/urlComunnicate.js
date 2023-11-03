const express = require('express')
const router = express.Router()


router.get("/", (req, res) => {
    try {
        if(res.statusCode === 200){
            res.status(200).render('index')
        }else{
            console.log('Status failed')
        }


    }catch(error){
        console.log(`You have some err from this url: ${req.url} ` + error)
    }
})

module.exports = router;