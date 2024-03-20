let describeHobbies = (...args)=>{
    for (const arg of args) {
        console.log(`I love ${arg}`);
        
    }
}
describeHobbies("coding","poetry","scrolling");