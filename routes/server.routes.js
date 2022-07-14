import Router from 'express';
import {
  getPing, getDailyWord, checkWord, getNewWord, setDailyWord, getRandom,
} from '../controllers/server.controllers.js';

const router = Router();

router.get('/api/ping', getPing);

router.get('/api/wordle', getDailyWord);

router.get('/api/wordle/checkword/:word', checkWord);

router.get('/api/wordle/updateword', getNewWord);

router.get('/api/wordle/setword/:word', setDailyWord);

router.get('/api/wordle/random', getRandom);

export default router;
