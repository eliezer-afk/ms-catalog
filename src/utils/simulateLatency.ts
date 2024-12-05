import { Request, Response, NextFunction } from 'express';

export const simulateLatency = (req: Request, res: Response, next: NextFunction) => {
    const delay = Math.random() * 1000; // Latencia entre 0 y 1 segundo
    setTimeout(next, delay);
};

export const simulateError = (req: Request, res: Response, next: NextFunction) => {
    const fail = Math.random() < 0.1; // 10% de probabilidad de error
    if (fail) {
        return res.status(500).json({ error: 'Simulated error' });
    }
    next();
};