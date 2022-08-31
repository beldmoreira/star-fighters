import { Router } from "express";
import { getRanking } from "../controllers/fightersController";

const battleRouter = Router();

battleRouter.post("/battle");
battleRouter.get("/ranking", getRanking);

export default battleRouter;
