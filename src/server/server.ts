// node-typescript/src/server.ts
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const server = express();

server.get("/", (_, res) => {
  // readline para le arquivos

  res.send("Hello ts-node!");
});

export default server;
