import mongoose from "mongoose";
import app from "./app";
import { Server } from "http";
import config from "./app/config";
const port = config.port;

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.mongodb_url as string);
    server = app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
}
main();
