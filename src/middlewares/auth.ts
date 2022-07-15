import { Request, Response, NextFunction } from 'express';


export const Auth = {
    private: (req: Request, res: Response, next: NextFunction) => {
        let success = false;
        
        // Fazer verificação de auth

        if (success) {
            next();
        } else {
            res.status(403);// Not authorized
            res.json({ error: 'Não autorizado'});
        }
    }
}