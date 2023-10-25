const task = (x) => {
    return new Promise ((resolve, rejects) => {
        if (x >= 18) rejects('no')
        else if (x < 18 && x !== 0) resolve('yes')
        else {
            const today = new Date();
            const date = (today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) + '.' + (today.getMonth() + 1 < 10 ? '0' + today.getMonth() + 1 : today.getMonth() + 1) + '.' + today.getFullYear();
            resolve(date);
        }    
    })
}

task(0)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))