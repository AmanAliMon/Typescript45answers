{
    let var1 = "Let decalred variable"
    const var2 = "Const decalred variable"
    console.log(var1);
    console.log(var2);
    
}
try{
    console.log(var1);
}catch(e){
    console.log("Can't access var1 outside the declaration scope");
    
}
try{
    console.log(var2);
}catch(e){
    console.log("Can't access var2 outside the declaration scope");
    
}