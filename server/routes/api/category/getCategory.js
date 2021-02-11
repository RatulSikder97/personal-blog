const express = require('express');
const router = express.Router();

router.get('/categories', (req, res) => {
  res.json([
    {
      id: 1,
      categoryName: 'new category'
    },
    {
      id: 2,
      categoryName: 'another category'
    },
    {
      id: 3,
      categoryName: 'more category'
    }
  ]);
});

router.get('/category/1', (req, res) => {
  res.json({
    id: 1,
    categoryName: 'new category'
  });
});

module.exports = router;
