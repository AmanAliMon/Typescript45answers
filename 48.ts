let priceofset1: number[] = [4e4, 5e4, 2e2];
let priceofset2: number[] = [12e4, 23e4, 54300];

let sortedPrices: number[] = [...priceofset1, ...priceofset2].sort((a, b) => a - b);
console.log(sortedPrices);
