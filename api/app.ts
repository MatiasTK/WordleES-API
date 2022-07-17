import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import Routes from './routes/server.routes';

dotenv.config();

export default function startExpress() {
  const app = express();

  app.use(cors());
  app.use(express.json());
  app.use(Routes);

  app.get('/', (req, res) => {
    res.send('Test');
  });

  app.get('*', (req, res) => {
    res.status(200).json({
      Routes: [
        '/api/wordle',
        '/api/wordle/checkword/:word',
        '/api/wordle/updateword',
        '/api/wordle/setword/:word',
        '/api/wordle/random',
      ],
    });
  });

  app.listen(process.env.PORT || 4000, () => {
    console.log(`Server running on port: ${process.env.PORT || 4000}`);
  });
}
