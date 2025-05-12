import { widgets } from "../dummy/widgets";
import { Request, Response } from "express";

class WidgetsController {
    static getAllWidgets(req: Request, res: Response) {
        res.status(200).json({widgets, message: "Widgets retrieved successfully"});
    }
}

export default WidgetsController;