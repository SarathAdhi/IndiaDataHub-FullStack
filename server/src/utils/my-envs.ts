import dotenv from "dotenv";
dotenv.config();

export const MONGO_DB_URI = process.env.MONGO_DB_URI;

export const SECRET_KEY = process.env.SECRET_KEY;

export const FRONTEND_URL = process.env.FRONTEND_URL;
