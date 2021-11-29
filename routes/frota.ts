import { Router } from 'express';
import frotaController from '../controllers/frotaController';

const router = Router();

router.get('/', frotaController.home);
router.get('/tbl_frota', frotaController.index);
router.get('/tbl_frota/create', frotaController.create);
router.post('/tbl_frota', frotaController.store);
router.get('/tbl_frota/:id', frotaController.show);
router.put('/tbl_frota/:id', frotaController.update);
router.get('/tbl_frota/:id/edit', frotaController.edit);
router.delete('/tbl_frota/:id', frotaController.destroy);

export default router;