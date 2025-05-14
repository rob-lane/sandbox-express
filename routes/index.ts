const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');
const os = require('os');
const { body, validationResult } = require('express-validator');
import { Request, Response, NextFunction} from 'express';
import WidgetsController from '../controllers/widgetsController';
import { clearProjections, loadProjections } from '../utils/csv-parser';
import { prisma } from '../db/connection';

const storage = multer.diskStorage({
    destination: function (req: Request, file: Express.Multer.File, cb: Function) {
        cb(null, path.join(__dirname, '..', 'public', 'data', 'uploads'))
    },
    filename: function (req: Request, file: Express.Multer.File, cb: Function) {
        const uniqeSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + uniqeSuffix)
    }
});
const upload = multer({ storage: storage});

router.get('/', (req: Request, res: Response, next: NextFunction) => {
    res.render('home', { title: 'Express' });
    next();
});

router.get('/upload', (req: Request, res: Response, next: NextFunction) => {
    res.render('form', { title: 'Import Data' });
    next();
});

router.get('/widgets', WidgetsController.getAllWidgets);

router.post('/upload', upload.single('ProjectionFile'), function(req: Request, res: Response, next: NextFunction) {
    const file = req.file;
    if (file) { 
        clearProjections();
        loadProjections(file.path)
    }
    res.redirect('/histogram');
    next();
});

router.get('/histogram', async (req: Request, res: Response, next: NextFunction) => {
    // sum commodity by name
    const groupCommoditiesByName = await prisma.commodity.groupBy({
        by: ['name'],
        _sum: {
            value: true
        }
    });
    res.render(JSON.stringify(groupCommoditiesByName));
    next();    
});

router.post('/', 
    [
        body('name')
            .isLength({ min: 1 })
            .withMessage('Name is required'),
        body('email')
            .isLength({ min: 1 })
            .withMessage('Email is required'),
    ],
    (req: Request, res: Response) => {
        const errors = validationResult(req);

        if(errors.isEmpty()) {
            res.send('Thank you for your registration');
        } else { 
            res.render('form', { 
                title: 'Registration Form',
                errors: errors.array(),
                data: req.body
            });
        }
    res.render('form', { title: 'Registration Form'})
});

module.exports = router;