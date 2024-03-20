var dataHeap = [2, "$6", true, "aman", 24, 0x67, [2, 4]];
var dataHeapPurified = dataHeap.filter(function (e) { return typeof e === "string"; });
console.log(dataHeapPurified);
