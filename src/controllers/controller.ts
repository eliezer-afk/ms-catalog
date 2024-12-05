import { Request, Response } from 'express';
import Product from '../models/Product';

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching products' });
    }
};



export const createProduct = async (req: Request, res: Response) => {
    const { nombre, precio, activado } = req.body;
    try {
        const newProduct = await Product.create({ nombre, precio, activado });
        res.status(201).json(newProduct);
    } catch (error) {
           res.status(500).json({ error: 'Error creating product' });
    }
};