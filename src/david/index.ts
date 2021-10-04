export function findWord_david(word: string, subArrays: string[][]): boolean {

    let found = true;

    [...word].forEach((val, i, arr) => {
        // no next character
        if (!arr[i + 1]) return;

        // find entry in 2 dim array
        const x = subArrays.findIndex(a => a.includes(val));
        const y = subArrays[x].findIndex(a => a === val);

        // find entry of next in 2 dim array
        const next = arr[i + 1];
        const xn = subArrays.findIndex(a => a.includes(next));
        const yn = subArrays[xn].findIndex(a => a === next);

        // first case: is on x axis
        if (y === yn && Math.abs(x - xn) === 1) return;
        // second case: is on y axis
        if (x === xn && Math.abs(y - yn) === 1) return;

        found = false;
    })
    return found;
}