import { Client } from "pg";

export async function getClient() {
  const client = new Client(
    "postgresql://HarshDeep61034:WQD2xsH0cylu@ep-summer-thunder-a57cbt6z.us-east-2.aws.neon.tech/neondb?sslmode=require",
  );
  await client.connect();
  return client;
}
