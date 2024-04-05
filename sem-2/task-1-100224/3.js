const map = [];
for (j=1; j <= 1e10; j*=10) {
    const x = Date.now(); 
    for (let i =0; i < j; i++) {}; 
    map.push({order: j, time: Date.now() - x})
}
console.table(map)