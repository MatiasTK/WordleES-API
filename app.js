import express from 'express';

import dotenv from 'dotenv';

import routes from './routes/server.routes.js';

dotenv.config();

export default function startExpress() {
  const app = express();

  app.use(express.json());
  app.use(routes);

  app.get('*', (req, res) => res.status(200).json({ Routes: ['/api/wordle', '/api/wordle/checkword/:word', '/api/wordle/updateword', '/api/wordle/setword/:word', '/api/wordle/random'] }));

  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server is running on port: ${process.env.PORT || 4000}`);
  });
}
