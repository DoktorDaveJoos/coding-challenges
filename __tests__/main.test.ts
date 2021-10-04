import { findWord_david } from '../src/main';

import { cases } from '../constants';

describe('Challenge | FindWord | David', () => {

  it('runs all test cases once', () => {
    cases.forEach(c => expect(findWord_david(c.input, c.array)).toBe(c.expected));
  });

});
