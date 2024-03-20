let dataHeap : any = [2,"$6",true,"aman",24,0x67,[2,4]]
let dataHeapPurified = dataHeap.filter(e=>typeof e === "string")
console.log(dataHeapPurified);
