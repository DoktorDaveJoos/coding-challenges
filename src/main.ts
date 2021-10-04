export function countSubarrays(arr: number[] ): number[] {

  const count: number[] = [];

  arr.forEach((value, index, full) => {

    // its at least 1 everytime
    let tmp = 1;

    // count leading arrays
    if (index !== 0) {
      let ii = index - 1;
      while (ii >= 0 && full[ii] <= value) {
        tmp += 1;
        ii --;
      }
    }

    // count trailing arrays
    if (index !== full.length - 1) {
      let ii = index + 1;
      while (ii <= full.length - 1 && full[ii] <= value) {
        tmp += 1;
        ii ++;
      }
    }

    count.push(tmp);
  })

  return count;
}

export function findWord(word: string, subArrays: string[][]): boolean {

  let found = true;

  [...word].forEach((val, i, arr) => {
    // no next character
    if(!arr[i+1]) return;

    // find entry in 2 dim array
    const x = subArrays.findIndex(a => a.includes(val));
    const y = subArrays[x].findIndex(a => a === val);

    // find entry of next in 2 dim array
    const next = arr[i+1];
    const xn = subArrays.findIndex( a => a.includes(next));
    const yn = subArrays[xn].findIndex(a => a === next);

    // first case: is on x axis
    if (y === yn && Math.abs(x - xn) === 1) return;
    // second case: is on y axis
    if (x === xn && Math.abs(y - yn) === 1) return;

    found = false;
  })
  return found;
}

export function foregoneSolution(n: number): number[] {

  for( var i = 1; i < n; i ++) {
    if(!(n - i).toString().includes('4') && !i.toString().includes('4')) break;
  }

  return [i, n - i];
}




