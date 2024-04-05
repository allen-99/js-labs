function pearsonCorr(x, y) {
    const n = x.length;
    const meanX = x.reduce((acc, val) => acc + val, 0) / n;
    const meanY = y.reduce((acc, val) => acc + val, 0) / n;
    
    let numerator = 0;
    let denominatorX = 0;
    let denominatorY = 0;
    
    for (let i = 0; i < n; i++) {
        const diffX = x[i] - meanX;
        const diffY = y[i] - meanY;
    
        numerator += diffX * diffY;
        denominatorX += diffX * diffX;
        denominatorY += diffY * diffY;
    }
    const correlation = numerator / (Math.sqrt(denominatorX) * Math.sqrt(denominatorY));
    
    return Math.abs(correlation);
}

console.log(pearsonCorr([14, 55, 23, 90, 45, 21, 13, 81, 19, 11, 91, 15], [44, 13, 23, 51, 70, 45, 29, 19, 41, 25, 21, 33]))