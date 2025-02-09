import express from 'express';
import { addFood } from '../controllers/foodController.js';
import multer from 'multer';


const foodRoute = express.Router();


export default foodRoute;
