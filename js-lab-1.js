const [a11, a12, b1, a21, a22, b2] = [2, 3, 18, 4, -5, -8];

const det = a11 * a22 - a12 * a21;

if (det) {
    const detX1 = b1 * a22 - a12 * b2;
    const detX2 = a11 * b2 - b1 * a21;

    console.log('x1: ', detX1/det)
    console.log('x2: ', detX2/det)
}
else {
    console.log("system's determinant equals zero")
}