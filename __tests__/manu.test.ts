import { findWord_manu } from '../src/main';

import { cases } from '../constants';

describe('Challenge | FindWord | Manu', () => {

  it('runs all test cases once', () => {
    cases.forEach(c => expect(findWord_manu(c.input, c.array)).toBe(c.expected));
  });

  it('runs all test cases for ten times', () => {
    for (let i = 0; i < 10; i++) {
      cases.forEach(c => expect(findWord_manu(c.input, c.array)).toBe(c.expected));
    }
  })

  it('runs all test cases for hundred times', () => {
    for (let i = 0; i < 100; i++) {
      cases.forEach(c => expect(findWord_manu(c.input, c.array)).toBe(c.expected));
    }
  })

  it('runs all test cases for thousand times', () => {
    for (let i = 0; i < 1000; i++) {
      cases.forEach(c => expect(findWord_manu(c.input, c.array)).toBe(c.expected));
    }
  })

  it('runs all test cases for tenthousand times', () => {
    for (let i = 0; i < 10000; i++) {
      cases.forEach(c => expect(findWord_manu(c.input, c.array)).toBe(c.expected));
    }
  })

});