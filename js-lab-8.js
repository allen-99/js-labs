// В последнем-нижнем поле напишите код функции task(name, familyname, login), 
// которая в качестве конструктора создаёт объект с тремя собственными полями – name,
// familyname и login. По умолчанию значение поля login – строковое значение, 
// равное "mylogin". Кроме того, в прототипе должен быть метод getFullName, 
// который возвращает результат конкатенации name, familyname и восклицательного знака.


function task(name, familyname, login="myLogin") {
    this.name = name;
    this.familyname = familyname;
    this.login = login;

    this.getFullName = () => {
        return `${this.name} ${this.familyname}!`;
    }
};

const thisIsTest = new task('Ryan', 'Gosling', 'thebestman');
console.log(thisIsTest.getFullName());