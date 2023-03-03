require("dotenv").config();
require("./config/db.config")();
const cors = require("cors");
const express = require("express");
const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP_URL }));

const userRouter = require("./routes/users.routes");
app.use("/users", userRouter);

const businessRouter = require("./routes/business.routes");
app.use("/business", businessRouter);

const productsRouter = require("./routes/products.routes");
app.use("/products", productsRouter);

const uploadRouter = require("./routes/upload.routes");
app.use("/upload", uploadRouter);

const resetPasswordRouter = require("./routes/resetPassword.routes");
app.use("/resetPassword", resetPasswordRouter);

app.listen(Number(process.env.PORT) || 4000, () => {
  console.log(`Server up and ruining at - port: ${process.env.PORT}`);
});
