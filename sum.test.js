import { expect, test } from 'vitest';
import { sum } from './sum.js';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(5);
});

test('adds negative numbers', () => {
  expect(sum(-4, 1)).toBe(-3);
});

// 👉 To watch CI fail on purpose, change an expected value below to a wrong
//    number (e.g. `toBe(100)`), commit, and push. The "console cat" step will run.
