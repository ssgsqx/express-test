var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/status', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/signs', function(req, res, next) {
  res.send({
      signs: []
  });
});

router.delete('/signs/:id', function(req, res, next) {
    console.log('del sign ', req.params);
//   res.send('delete sign');
    // res.type('json')
    res.status(404).send({error: 'not found'})
});

module.exports = router;
