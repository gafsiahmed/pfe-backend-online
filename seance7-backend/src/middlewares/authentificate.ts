import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET || "lecodesecretestahmedgafsi$";

interface AuthenticatedRequest extends Request {
    user?: {
        id: string;
        role?: string;
    };
}

export default function authentificate(
    req: AuthenticatedRequest,
    res: Response,
    next: NextFunction
) {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({
            message: "Token is missing or invalid",
        });

        return;
    }

    const token = authHeader.slice(7).trim();

    if (!token) {
        res.status(401).json({
            message: "Token is missing or invalid",
        });
        return;
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

        console.log(decoded)

        req.user = {
            id: String(decoded.id ?? decoded._id),
            role: decoded.role as string,
        };

        next();
    } catch (err: unknown) {
        if (err instanceof Error && err.name === "TokenExpiredError") {
            res.status(401).json({
                message: "Token expired",
            });
            return;
        }

        res.status(401).json({
            message: "Invalid token",
        });
    }
}