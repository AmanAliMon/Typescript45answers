var findBirthday = (month: number, day: number): Date =>{
    let now = new Date();
    let year = now.getFullYear();
    const bd = new Date(year, month - 1, day); 
    if (bd < now) {
        bd.setFullYear(year + 1);
    }
    return bd;
}

const bd : Date = findBirthday(11, 18);
console.log("Birthdate: ", bd.toLocaleDateString());