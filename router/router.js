const express = require('express');
const router = express.Router();

const {index,Productos,Categorias,agregarProducto,agregarCategoria,updateProducto,updateCategoria,agregarProductoPost,agregarCategoriaPost,updateProductoPost,updateCategoriaPost,deleteProducto,deleteCategoria} = require('../controllers/controllers.js');

//ruta principal

//RUTAS GET

router.get('/',index);

router.get('/productos',Productos);
router.get('/categorias',Categorias);
router.get('/agregarProducto',agregarProducto);
router.get('/agregarCategoria',agregarCategoria);
router.get('/updateProducto/:id',updateProducto);
router.get('/updateCategoria/:id',updateCategoria);


router.post('/agregarProductoPost',agregarProductoPost);
router.post('/agregarCategoriaPost',agregarCategoriaPost);
router.post('/updateProductoPost/:id',updateProductoPost);
router.post('/updateCategoriaPost/:id',updateCategoriaPost);
router.get('/deleteProducto/:id',deleteProducto);
router.get('/deleteCategoria/:id',deleteCategoria);

module.exports=router;