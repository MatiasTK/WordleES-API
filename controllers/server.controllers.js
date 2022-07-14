import {
  getRandomWord, getWord, setRandomWord, setWord,
} from '../db.js';

export const getPing = async (req, res) => {
  res.send('Pong');
};

export const getDailyWord = async (req, res) => {
  const daily = await getWord();
  res.json({ dailyWord: daily });
};

export const checkWord = async (req, res) => {
  const daily = await getWord();
  const { word } = req.params;
  if (daily === word) {
    return res.json({ status: 'correct' });
  }
  return res.json({ status: 'incorrect' });
};

export const getNewWord = async (req, res) => {
  setRandomWord();
  res.json({ status: 'New word selected' });
};

export const setDailyWord = async (req, res) => {
  const { word } = req.params;
  await setWord(word);
  res.json({ status: `Daily word set to ${word}` });
};

export const getRandom = async (req, res) => {
  const word = getRandomWord();
  res.json({ word });
};
