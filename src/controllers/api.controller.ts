import { Request, Response } from "express";
import { getRecords } from "../utils/airtable.util";

const apiController = {
  getRecords: async (req: Request, res: Response) => {
    try {
      const records = await getRecords("session");
      return res.send(records);
    } catch (error) {
      res.status(500).send("Airtable Error: " + error);
    }
  },
};
export default apiController;
