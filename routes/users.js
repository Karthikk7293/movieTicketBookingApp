var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  let card=[
    {
      image:'https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAyNyBOb3Ygb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00145207-udbdbmsycp-portrait.jpg'
  },
    {
      image:'https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00300985-nwbmfduruk-portrait.jpg'
    },
    {
      image:'https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00300985-nwbmfduruk-portrait.jpg'
    },
    {
      image:'https://in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-RnJpLCAxOCBEZWMgb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24/et00300985-nwbmfduruk-portrait.jpg'
    }
  ]
  res.render('index',{user:true,card});
});

module.exports = router;
