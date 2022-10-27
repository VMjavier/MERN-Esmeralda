const { Router } = require('express');
const { route } = require('../app');
const router = Router();

router.route('/')
  .get((req, res)=>res.send('inventario routes'))
  .post()

 route.route('/:id')
  .get()
  .put()
  .delete()
   
module.exports = router;