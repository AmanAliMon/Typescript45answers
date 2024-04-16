let gradeDecider=(percentage:number) =>{
let distrib : number[] = [100,80,70,60,50,40]
let grade:string ='';
distrib.forEach((a,b)=>{
    console.log(a);
    
    if(percentage<=a && percentage>=distrib[b+1]){
        grade= String.fromCharCode(64+b)
    }
})
return grade != '@' ? grade : 'A+'
}
let marks:number = 69;
console.log(`Grade at percentage ${marks} is ${gradeDecider(marks)}`);

