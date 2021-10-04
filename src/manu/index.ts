export const findWord_manu = (word: string, charMatrix: string[][]) => {
    if (!word.length) return false;

    const possibleCharMap: { [val: string]: string[] } = {};

    charMatrix.forEach((row, y) => {
        row.forEach((val, x) => {
            // IMPORTANT: Change for dynamic charMatrix size
            if (x < row.length - 1)
                (possibleCharMap[val] ??= []).push(charMatrix[y][x + 1]);
            if (x > 0) (possibleCharMap[val] ??= []).push(charMatrix[y][x - 1]);
            if (y < charMatrix.length - 1)
                (possibleCharMap[val] ??= []).push(charMatrix[y + 1][x]);
            if (y > 0) (possibleCharMap[val] ??= []).push(charMatrix[y - 1][x]);
        });
    });

    for (let i = 1; i < word.length; i++) {
        const char = word[i - 1];
        if (!possibleCharMap[char].includes(word[i])) {
            return false;
        }
    }
    return true;
};
