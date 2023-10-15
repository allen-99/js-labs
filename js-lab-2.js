const sieveOfEratosthenes = (n) => {
    const array = new Array(n + 1).fill(true);
    array[0] = array[1] = false;
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
    return sieveOfEratosthenes(n).filter(x => x).length;
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  readline.question(`Input number: `, number => {
    console.log('Prime number? ', isSimple(+number)? 'Yes': 'No');
    console.log(`Count of prime numbers before ${number}: `, countSimpleNums(+number));
    readline.close();
  });