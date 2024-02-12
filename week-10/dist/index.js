"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { Client } = require("pg");
const client = new Client({
    connectionString: "postgresql://HarshDeep61034:WQD2xsH0cylu@ep-summer-thunder-a57cbt6z.us-east-2.aws.neon.tech/neondb?sslmode=require",
});
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        yield client.connect();
    });
}
function createUsersTable() {
    return __awaiter(this, void 0, void 0, function* () {
        connect();
        const result = yield client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `);
        console.log(result);
    });
}
// createUsersTable();
function insertUser() {
    return __awaiter(this, void 0, void 0, function* () {
        connect();
        const result = yield client.query(`
      INSERT INTO users (username, email, password)
      VALUES ('harshitpundir', 'hp@gmail.com', 234982039);
`);
        console.log(result);
        console.log("User created Successfully!");
    });
}
insertUser();