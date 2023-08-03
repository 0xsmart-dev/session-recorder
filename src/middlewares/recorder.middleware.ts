import { NextFunction, Response } from "express";
import { createRecord } from "../utils/airtable.util";

const recorderMiddleware = async (
  req: any,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionID = req.session.id;
    const ipAddress = req.clientIp;
    const urlParams = req.url;
    const timestamp = new Date();
    const data = {
      session: sessionID,
      ip: ipAddress,
      url: JSON.stringify(urlParams),
      timestamp: timestamp.toISOString(),
    };
    await createRecord("session", data);
  } catch (error) {
    res.status(500).send("Airtable Error: " + error);
  }
  next();
};

export default recorderMiddleware;
