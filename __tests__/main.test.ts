import { findWord } from '../src/main';

type Case = {
  array: any[][],
  input: string,
  expected: boolean
}

describe('challenges', () => {

  const cases: Array<Case> = [
    // matrix 2x2 -> true
    { array: [
      ["U", "F"],
      ["B", "O"]
    ], input: 'UBO', expected: true },
    { array: [
      ["U", "T"],
      ["G", "O"]
    ], input: 'UTOTOGU', expected: true },
    { array: [
      ["U", "Z"],
      ["H", "O"]
    ], input: 'OHOZUZ', expected: true },
    { array: [
      ["U", "Z"],
      ["L", "O"]
    ], input: 'Z', expected: true },
    // matrix 2x2 -> false
    { array: [
      ["U", "F"],
      ["B", "O"]
    ], input: 'UO', expected: false },
    { array: [
      ["U", "T"],
      ["G", "O"]
    ], input: 'UTOTOGT', expected: false },
    { array: [
      ["U", "Z"],
      ["H", "O"]
    ], input: 'OHOU', expected: false },
    { array: [
      ["U", "Z"],
      ["L", "O"]
    ], input: 'OU', expected: false },
    // matrix 3x3 -> true
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '123654789', expected: true },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '1478523698741', expected: true },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '6569852', expected: true },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '123', expected: true },
    // matrix 3x3 -> false
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '12345678987654321', expected: false },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '19', expected: false },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '1234453498573458349857834593748598374', expected: false },
    { array: [
      ["1", "2", "3"],
      ["4", "5", "6"],
      ["7", "8", "9"]
    ], input: '9871', expected: false },
    // matrix 4x4 -> true
    { array: [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'JLXKNIEABCD', expected: true },
    { array: [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'XYMHD', expected: true },    
    { array: [
      ["A", "B", "C", "D"],
      ["E", "U", "G", "Z"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'ABCDZ', expected: true },    
    { array: [
      ["A", "R", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'AR', expected: true },
    // matrix 4x4 -> false
    { array: [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'JLXKNIEABCDN', expected: false },
    { array: [
      ["A", "B", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'ABCDHF', expected: false },    
    { array: [
      ["A", "B", "C", "D"],
      ["E", "U", "G", "Z"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'YXKNIEB', expected: false },    
    { array: [
      ["A", "R", "C", "D"],
      ["E", "F", "G", "H"],
      ["I", "J", "L", "M"],
      ["N", "K", "X", "Y"]
    ], input: 'JLMD', expected: false },
    // matrix 5x5 -> true
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: '12345', expected: true },
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'AEINZ', expected: true },    
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'ARCD1', expected: true },    
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'FGHMLJIEARCD1234YXKN', expected: true },
    // matrix 5x5 -> false
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: '1234E', expected: false },
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'A5', expected: false },    
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'KXYVC', expected: false },    
    { array: [
      ["A", "R", "C", "D", "1"],
      ["E", "F", "G", "H", "2"],
      ["I", "J", "L", "M", "3"],
      ["N", "K", "X", "Y", "4"],
      ["Z", "W", "P", "V", "5"]
    ], input: 'C1LMPV', expected: false },
  ];

  /*it('subarrays(arr) -> output', () => {
    const arr = [3, 4, 1, 6, 2]
    const output = [1, 3, 1, 5, 1]
    expect(countSubarrays(arr)).toStrictEqual(output);
  });*/

  it('findWort(word) -> boolean', () => {
    cases.forEach(c => expect(findWord(c.input, c.array)).toBe(c.expected));
  });

  /*it('forgoneSolution solved under 10s', () => {
    // 10^39
    const test = 7932592345793259234579325923457932592345;

    expect(foregoneSolution(test)).toBeInstanceOf(Array);
  });*/

  
/**
 * MANU:
 * Creation of LookUp -> O(N^2)
 * LookUp Table length -> N^2
 * Perform lookup for every char in N -> N*N^2 (richtig oder falsch?)
 * Complexity: O(N^2) + O(N^3) -> O(N^3)
 */

  




});
