const express = require('express');
const Republic = require('./Model/republic');
const router = express.Router();

router.get("/republics",async (req,res)=>{

    const republic = await Republic.find();
    res.send(republic);
});
module.exports = router;