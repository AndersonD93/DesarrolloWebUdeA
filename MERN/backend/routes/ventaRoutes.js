import express from 'express';
import {
    prueba,
    createVentas,
    getVentas,
    getVenta,
    updateVentas,
   
} from '../controllers/ventaController.js';

const router = express.Router();

router.get('/prueba',prueba);
router.post('/create',createVentas);
router.get('/get',getVentas);
router.get('/get/:id',getVenta);
router.put('/update/:id',updateVentas);


export default router;