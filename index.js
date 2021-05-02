import dotenv from 'dotenv';

dotenv.config();

import { app } from './src/app.js';

app.listen(process.env.PORT);
console.log('Running on Port', process.env.PORT);
