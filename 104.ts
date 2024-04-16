function generateRandomHexColor(): string {
    const r: number = Math.floor(Math.random() * 256);
    const g: number = Math.floor(Math.random() * 256);
    const b: number = Math.floor(Math.random() * 256);

    const rHex: string = (r < 16 ? '0' : '') + r.toString(16);
    const gHex: string = (g < 16 ? '0' : '') + g.toString(16);
    const bHex: string = (b < 16 ? '0' : '') + b.toString(16);

    const hexColor: string = `#${rHex}${gHex}${bHex}`;

    return hexColor;
}

const randomColor: string = generateRandomHexColor();
console.log(randomColor);
