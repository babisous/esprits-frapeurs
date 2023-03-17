import Airtable from "airtable";

// Initialize Airtable with API key
const base = new Airtable({
	apiKey: process.env.NEXT_PUBLIC_AIRTABLE_API_KEY,
}).base("appNPjlTHKbQfyn64");

// Get all records from table
export async function getTable(tableName) {
	const table = await base(tableName).select({}).all();
	return JSON.parse(JSON.stringify(table));
}

export async function getRecordById(tableName, id) {
	const record = await base(tableName).find(id);
	return JSON.parse(JSON.stringify(record));
}
