// ./index.ts

import express from 'express';
import dotenv from 'dotenv';
import userRoute from './routes/userRoute'

dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use('/users', userRoute)
app.use(express.json());


app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});