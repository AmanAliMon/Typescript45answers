function daysUntilNewYear(): number {
    const today: Date = new Date();
    const currentYear: number = today.getFullYear();
    const newYear: Date = new Date(currentYear + 1, 0, 1); // January 1st of the next year
    const millisecondsInADay: number = 1000 * 60 * 60 * 24;

    const difference: number = newYear.getTime() - today.getTime();

    const daysRemaining: number = Math.ceil(difference / millisecondsInADay);

    return daysRemaining;
}

const daysRemaining: number = daysUntilNewYear();
console.log(`Days remaining until New Year: ${daysRemaining}`);
