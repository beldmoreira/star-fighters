import { Request, Response } from "express";
import * as fightersService from "../services/fightersService.js";

export async function getRanking(req: Request, res: Response) {
  const result = await fightersService.find();
  res.send(result);
}
