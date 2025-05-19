import express from "express";
import cors from "cors";
import router from "./app/routes";
import globalErrorHandler from "./app/middlewares/globalErrorHandler";
import notFound from "./app/middlewares/notFound";
const app = express();

app.use(cors());
app.use(express.json());

// routes
app.use("/v1/api", router);

// not found
app.use(notFound);

// global error handler
app.use(globalErrorHandler);

app.get("/", (req, res) => {
  res.send({
    message: "My portfolio server is running.........",
  });
});

export default app;
