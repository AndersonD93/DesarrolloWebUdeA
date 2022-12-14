import express from 'express';
import {
    prueba,
    createProductos,
    getProducto,
    getProductos,
    updateProductos,
    deleteProductos
} from '../controllers/productoController.js';

const router = express.Router();

router.get('/prueba',prueba);
router.get('/get',getProductos);
router.get('/get/:id',getProducto);
router.post('/create',createProductos);
router.put('/update/:id',updateProductos);
router.delete('/delete/:id',deleteProductos);


export default router;