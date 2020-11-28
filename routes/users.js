var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  let card=[
    {
      image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-et00006389-24-03-2017-20-05-56.jpg'
  },
    {
      image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/loha-iron-man--hindi--et00000640-24-03-2017-18-47-48.jpg'
    },
    {
      image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/captain-america-the-winter-soldier-et00016580-28-12-2016-06-45-26.jpg'
    },
    {
      image:'https://in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/captain-marvel-et00056555-27-04-2017-10-23-21.jpg'
    }
  ]
  res.render('index',{user:true,card});
});

router.post('/search',(req,res)=>{
  console.log(req.body);
  res.redirect('index',{user:true})
})

module.exports = router;
