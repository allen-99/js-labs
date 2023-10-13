const sieveOfEratosthenes = (n) => {
    const array = new Array(n + 1).fill(true);
    for (let i = 2; i * i < n; i++) {
        if (array[i]) {
            for (let j = i * i; j <= n; j+=i) { 
                array[j] = false;
            }
        }
    }
    return array;
}

const isSimple = (n) => {
    return sieveOfEratosthenes(n)[n];   
}

const countSimpleNums = (n) => {
    const result = [];
    const array = sieveOfEratosthenes(n);
    for (let i = 2; i <= n; i++) {
        if (array[i]) result.push(i)
    }
    return result;
}

const simpleNum = isSimple(89);
const countNums = countSimpleNums(7920);

console.log(simpleNum)
console.log(countNums)