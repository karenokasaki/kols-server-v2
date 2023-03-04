import * as dotenv from "dotenv";
dotenv.config();

import cors from "cors";
import express from "express";

import connect from "./config/db.config.js";

import userRouter from "./routes/users.routes.js";
import businessRouter from "./routes/business.routes.js";
import productsRouter from "./routes/products.routes.js";
import uploadRouter from "./routes/upload.routes.js";
import resetPasswordRouter from "./routes/resetPassword.routes.js";

const app = express();
app.use(express.json());

//app.use(cors({ origin: process.env.REACT_APP_URL }));
app.use(cors({ origin: "*" }));

app.use("/users", userRouter);

app.use("/business", businessRouter);

app.use("/products", productsRouter);

app.use("/upload", uploadRouter);

app.use("/resetPassword", resetPasswordRouter);

connect().then(() => {
  app.listen(Number(process.env.PORT), () => {
    console.log(`Server up and ruining at - port: ${process.env.PORT}`);
  });
});
