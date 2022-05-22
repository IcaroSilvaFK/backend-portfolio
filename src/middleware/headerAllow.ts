import { Request, Response, NextFunction } from "express";

export function HeaderAllow(
  request: Request,
  response: Response,
  next: NextFunction
) {
  response.setHeader("Access-Control-Allow-Origin", "http://localhost:3001");

  next();
}
