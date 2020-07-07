var express = require('express');
var router = express.Router();
var formidable = require('formidable');

router.get('/', (req, res)=>{
  res.render('index');
})

router.post('/upload', (req, res)=>{

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files)=>{

    res.json({
      files
    });

  });

});

module.exports = router;
