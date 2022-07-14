import path from 'path';
import fs from 'fs';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const wordsFile = path.join(process.cwd(), 'palabras_5.json');

const client = new Redis(process.env.REDIS_URL);

export const getWord = async () => {
  const word = await client.get('dailyWord');
  return word;
};

export const setWord = async (word) => {
  await client.set('dailyWord', word);
};

export const setRandomWord = () => {
  const raw = fs.readFileSync(wordsFile, 'utf-8');
  const data = JSON.parse(raw);
  setWord(data[Math.floor(Math.random() * data.length)]);
};

export const getRandomWord = () => {
  const raw = fs.readFileSync(wordsFile, 'utf-8');
  const data = JSON.parse(raw);
  return data[Math.floor(Math.random() * data.length)];
};
