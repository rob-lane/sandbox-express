const express = require('express');
const router = express.Router();
const { body, validationResult } = require('express-validator');
import { Request, Response } from 'express';
import WidgetsController from '../controllers/widgetsController';

router.get('/', (req: Request, res: Response) => {
    res.render('form', { title: 'Registration Form' });
});

router.get('/widgets', WidgetsController.getAllWidgets);

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