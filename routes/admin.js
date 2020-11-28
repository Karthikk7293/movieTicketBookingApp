var express = require('express');

var router = express.Router();
const adminHealpers=require('../healpers/admin_healper')

/* GET users listing. */
router.get('/', function(req, res, next) {
  
  res.render('admin/login',{login:false})
});

router.post('/loggedin',(req,res)=>{
  //console.log(req.body);
  //adminHealpers.inseartAdminDetails(req.body).then((response)=>{ console.log(response);}) //this is the function for the admin make it default login with out signup
  adminHealpers.doLogin(req.body).then((response)=>{
   if(response.status){
    console.log(response.admin.name);
     res.render('admin/admin_home',{login:true,response})
     
   }else{
     res.render('admin/login',{login:false})
   }
  })

  
})

router.get('/logout',(req,res)=>{
  res.redirect('/')
})

router.post('/search',(req,res)=>{
console.log(req.body);
res.redirect('admin/admin_home',{login:true})
})





module.exports = router;
