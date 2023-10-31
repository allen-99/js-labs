// Напишите функцию task, принимающую объект. У этого объекта есть цепочка прототипов. 
// Т.е. у него самого есть прототип, у этого прототипа есть прототип и так далее до шага, 
// на котором очередным прототипом оказывается null. Функция должна возвращать число 
// ненулевых прототипов. При передаче ей значения null она должна возвращать 
// сегодняшнюю дату в формате DD.MM.YYYY

const a = {Ryan: 'Gosling'};
const b = Object.create(a);
const c = Object.create(b);
const d = Object.create(c);


const task = (o) => {
    if (o === null) {
        const today = new Date();
        return (today.getDate() < 10 ? '0' + today.getDate() : today.getDate()) + '.' + (today.getMonth() + 1 < 10 ? '0' + today.getMonth() + 1 : today.getMonth() + 1) + '.' + today.getFullYear();
    }
    let count = 0;
    while (o.__proto__ !== null) {
        o = o.__proto__;
        count++;
    }
    return count;
};

console.log(task(a));
console.log(task(b));
console.log(task(c));
console.log(task(d));
console.log(task(null));