LogProps({make:"Tesla",model:"IDK",year:2024,color:"gray"})

function LogProps(dict:object){
    for (const key in dict) {
            console.log(`${key}: ${dict[key]}`);
    }
}