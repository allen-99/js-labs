// 6 Предоставьте код async-функции task от одного аргумента x, которая возвращает 
// в виде установленного промиса (строчное) значение свойства name переданного 
// ей объекта (это значение само является установленным промисом)


async function task(x) {
  return x.name;
};

const test = {
  name: Promise.resolve('parapampampam')
};

console.log(await task(test));
