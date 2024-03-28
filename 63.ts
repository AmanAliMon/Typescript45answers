type shape = {
    specie : "rectangle"|"circle";
    width ?: number;
    height ?: number;
    // corners ?: number;
    radius?:number;
}

const circle : shape = {
    specie:"circle",
    radius:10
}
const rectangle : shape = {
    specie:"rectangle",
    width:10,
    height:10
}

console.log(circle,rectangle);
