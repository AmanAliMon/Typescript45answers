let randBool = () : boolean =>{
    return Math.ceil(Math.random() * 10) % 2 ? true : false
}

console.log(randBool());
