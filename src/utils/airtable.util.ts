import Airtable from "airtable";
import environment from "../configs";

const base = new Airtable({ apiKey: environment.airtableApiKey }).base(
  environment.airtableBaseId
);

export const createRecord = async (tableName: string, data: any) => {
  try {
    const createdRecord = await base(tableName).create(data);
    return createdRecord;
  } catch (error) {
    console.error("Error creating record:", error);
    throw error;
  }
};

export const getRecords = async (tableName: string) => {
  try {
    const records = await base(tableName).select().all();
    return records;
  } catch (error) {
    console.error("Error retrieving records:", error);
    throw error;
  }
};
