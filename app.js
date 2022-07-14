import express from 'express';

import dotenv from 'dotenv';

import routes from './routes/server.routes.js';

dotenv.config();

export default function startExpress() {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.get('*', (req, res) => res.status(200).json({ checkWord: '/api/wordle/word' }));

  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 4000}`);
  });
}
