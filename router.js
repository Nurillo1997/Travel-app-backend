const express = require('express');
const router = express.Router();
const memberController = require('./controllers/memberController');


// member related routers
router.post("/signup", memberController.signup);
router.post("/login", memberController.login);
router.get("/logout", memberController.logout);



// other routers
router.get('/menu', (req,res)=>{
  res.send('Menu sahifasidasiz');
});

router.get('/community', (req,res)=>{
  res.send('Jamiyat sahifadasiz');
});

module.exports = router;