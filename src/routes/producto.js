const express = require('express');
const router = express.Router();


const productoController = require('../controllers/productoController');

router.get('/', productoController.list);
router.post('/add', productoController.save);
router.get('/delete/:id', productoController.delete);
router.get('/update/:id', productoController.edit);
router.post('/update/:id', productoController.update);

//router.post('/add', personaController.save);
//router.get('/update/:id', personaController.edit);
//router.post('/update/:id', personaController.update);
//router.get('/delete/:id', personaController.delete);


module.exports = router;