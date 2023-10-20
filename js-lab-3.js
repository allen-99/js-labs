const firstFactorial = (n) => {
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
}

const secondFactorial = (n) => {
    return Array.apply(null, Array(n))
        .map((y, i) => i + 1)
        .reduce((x, y) => x * y);
}

console.log('First variant: ', firstFactorial(10));
console.log('Second variant: ', secondFactorial(10));