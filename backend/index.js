import express from "express";
import routes from "./src/routes/index.js";
import connectDB from "./src/db/index.js"
import { PORT } from "./config.js";
import { handleError, handleNotFound } from "./src/utils/index.js";

const app = express();

await connectDB();

app.use(express.json());

app.use('/api/v1', routes);

app.use(handleNotFound);

app.use(handleError);

app.listen(PORT, () => console.log(`App is running on PORT ${PORT}`));