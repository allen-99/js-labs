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

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`Input number: `, number => {
    console.log(isSimple(+number));
    console.log(countSimpleNums(+number));
    readline.close();
  });