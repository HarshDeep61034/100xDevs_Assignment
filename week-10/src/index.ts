const { Client } = require("pg");

const client = new Client({
  connectionString:
    "postgresql://HarshDeep61034:WQD2xsH0cylu@ep-summer-thunder-a57cbt6z.us-east-2.aws.neon.tech/neondb?sslmode=require",
});

async function connect() {
  await client.connect();
}

async function createUsersTable() {
  connect();
  const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
  console.log(result);
}

// createUsersTable();

async function insertUser() {
  connect();
  const result = await client.query(`
      INSERT INTO users (username, email, password)
      VALUES ('harshitpundir', 'hp@gmail.com', 234982039);
`);
  console.log(result);
  console.log("User created Successfully!");
}

insertUser();
