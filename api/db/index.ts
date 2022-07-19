import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import Redis from 'ioredis';
import { join } from 'path';

dotenv.config();

const wordsFile = join(process.cwd(), './api/json/palabras_5.json');
const client = new Redis(process.env.REDIS_URL!);
client.on('error', (e) => {
  console.error(e);
  throw e;
});

export const getWord = async (): Promise<String> => {
  const word = await client.get('dailyWord');
  return word || '';
};

export const setWord = async (word: string) => {
  await client.set('dailyWord', word);
};

export const setRandomWord = async (): Promise<string> => {
  const raw = readFileSync(wordsFile, 'utf-8');
  const data = JSON.parse(raw);
  const randomWord = data[Math.floor(Math.random() * data.length)];
  await setWord(randomWord);
  return randomWord;
};

export const getRandomWord = () => {
  const raw = readFileSync(wordsFile, 'utf-8');
  const data = JSON.parse(raw);
  return data[Math.floor(Math.random() * data.length)];
};
