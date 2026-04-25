import { Request, Response, NextFunction } from "express";

interface AuthenticatedRequest extends Request {
    user?: {
        id?: string;
        role?: string;
    };
}

export default function accessByRole(allowedRoles: string[]) {
    return (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        const role = String(req.user?.role || "").toLowerCase();
        const normalizedAllowedRoles = allowedRoles.map((r) => r.toLowerCase());

        if (!role) {
            res.status(401).json({
                message: "Unauthorized",
            });
            return;
        }

        if (!normalizedAllowedRoles.includes(role)) {
            res.status(403).json({
                message: "Forbidden :  You have no access to this resource",
            });
            return;
        }

        next();
    };
}
