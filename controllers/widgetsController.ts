import { widgets } from "../dummy/widgets";
import { Request, Response, NextFunction } from "express";

class WidgetsController {
    static getAllWidgets(req: Request, res: Response, next: NextFunction) {
        res.status(200).json({widgets, message: "Widgets retrieved successfully"});
        next();
    }
}

export default WidgetsController;