const db = require('../db/db')

var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  page = parseInt(req.query.page) || 1
  limit = parseInt(req.query.limit) || 30
  db.GetAllProducts(page, limit, (products) => {
    res.status(200).json(products)
  })
});

router.get('/search', function(req, res, next) {
  search_param = req.query.search_param

  db.Search(search_param, (products) => {
    res.status(200).json(products)
  })
})

module.exports = router;
