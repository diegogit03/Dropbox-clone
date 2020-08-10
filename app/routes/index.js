var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.get('/', (req, res)=>{
  res.render('index');
})

router.get('/file', (req, res)=>{

  let path = './'+req.query.path;

  if(fs.existsSync(path)){

    fs.readFile(path, (error, data)=>{

      if(error){

        console.error(error);
        res.status(400).json({
          error
        });

      }else{

        res.status(200).end(data);

      }

    });

  }else{

    res.status(404).json({ 
      error: 'file not found' 
    });

  }

});


router.delete('/file', (req, res)=>{

  let form = new formidable.IncomingForm({
    uploadDir: './upload',
    keepExtensions: true
  });

  form.parse(req, (err, fields, files)=>{

    let path = './'+fields.path;

    if(fs.existsSync(path)){

      fs.unlink(path, error => {

        if(error){

          res.status(400).json({
            error
          });

        }else{

          res.json({
            fields
          });

        }

      });

    }

    

  });

});

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
