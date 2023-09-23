import express, { Router } from 'express'
import { DeleteData, GetData, Postdata, UpdateData } from '../controler/controler.js';

const router =  express.Router();


router.post('/post',Postdata);
router.get('/getdata',GetData);
router.delete("/delete:ID",DeleteData);
router.patch('/updateData:ID',UpdateData);

export default router;