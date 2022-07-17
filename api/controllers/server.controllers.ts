import { Request, Response } from 'express';
import {
  getRandomWord, getWord, setRandomWord, setWord,
} from '../db';

export const getPing = async (req: Request, res: Response) => res.send('Pong');

export const getDailyWord = async (req: Request, res: Response) => {
  const daily = await getWord();
  res.json({ dailyWord: daily });
};

export const checkWord = async (req: Request, res: Response) => {
  const daily = await getWord();
  const { word } = req.params;

  if (daily === word) {
    return res.json({ status: 'correct' });
  }
  return res.json({ status: 'incorrect' });
};

export const getNewWord = async (req: Request, res: Response) => {
  const word = setRandomWord();
  res.json({ status: `Daily word set to ${word}` });
};

export const setDailyWord = async (req: Request, res: Response) => {
  const { word } = req.params;
  await setWord(word);
  res.json({ status: `Daily word set to ${word}` });
};

export const getRandom = async (req: Request, res: Response) => {
  const word = getRandomWord();
  res.json({ word });
};
