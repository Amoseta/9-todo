/* class Todo {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.list = [];
    }

    summary() {
        const text = `${this.name} sarase yra ${this.list.length} uzduociu.`; 
        console.log(text);
    }

    add(text) {
        this.list.push(text);
    }
}

export { Todo }
 */

/* class Suo {
    constructor(Ciupkus) {
        this.greet = Ciupkus;
        this.fur = ['juodai rudas'];
    }

    summary() {
        const text = `Hello, I am ${this.greet} and my fur is ${this.fur}.`;
        console.log(text);
    }
    add(text) {
        this.fur.push(text);
    }
}
export { Suo }
*/

class Todo {
    constructor(pavadinimas) {
        this.name = pavadinimas;
        this.list = [];
    }

    summary() {
        const text = `${this.name} sarase yra ${this.list.length} uzduotys.`; 
        console.log(text);
    }

    add(text) {
        this.list.push({
            text: text,
            completed: false
        });
    }

    edit(index, newText) {
        this.list[index].text = newText;
    }

    remove(index) {
        if (index < 0 ||
            index >= this.list.length) {
            console.error('ERROR');
            return;    
        }
    
        const filtered = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                filtered.push(this.list[i]);
            }
        }
        this.list = filtered;
    }

    print(list = this.list) {
         console.table(list);
    }

    taskCompleted(index) {
        this.list[index].completed = true;
    }

    printCompletedOnly() {
        const completed = [];

        for (const task of this.list) {
            if (task.completed) {
                completed.push(task);
            }
        }
        this.print(completed);
    }

    printUnCompletedOnly() {
        const uncompleted = [];

        for (const task of this.list) {
            if (!task.completed) {
                uncompleted.push(task);
            }
        }
        this.print(uncompleted);
    }
}

export { Todo }



/*
function daugyba(a = 1, b = 1) {
    return a * b;
}

console.log(daugyba(4, 5));
console.log(daugyba(4));

console.log(daugyba(2, 7));
console.log(daugyba(2));

console.log(daugyba());



function labas(name = 'zmogau') {
    console.log(`Labas, ${name}!`)
}

labas('Petrai')
labas('Onute')
labas()


// arrow function 

function suma(a, b) {
    return a + b;
}
console.log(suma(4, 5));

const skirtumas = function (a, b) {
    return a - b;
}
console.log(skirtumas(4, 5));

const daugyba = (a, b) => {
    return a * b;
}
console.log(daugyba(4, 5));

const dalyba = (a, b) => a / b;
console.log(dalyba(4, 5));

const kvadratu = a => a * a;
console.log(kvadratu(4));



const a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(a);

const aKvadratu = [];
for (let i = 0; i < a.length; i++) {
    aKvadratu.push(a[i] * a[i])
}
console.log(aKvadratu);

const bMap = a.map(n => n * n);
console.log(bMap);

const lygyniai = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        lygyniai.push(a[i]);
    }
}
console.log(lygyniai);

const cFilter = a.filter(n => n % 2 === 0);
console.log(cFilter);

const lygyniuKvadarai = [];
for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
        lygyniuKvadarai.push(a[i] * a[i]);
    }
}
console.log(lygyniuKvadarai);

const dMapFilter = a.filter(n => n % 2 === 0).map(n => n * n);
console.log(dMapFilter);

klase: Car

parametrai:
    - ijungta: true/false
    - bake: 5       (litrai)
    - ryja: 2.5     (litrai/100 km)
    - rida: 0

car.turnOn()
car.drive(20)
car.drive(20)
car.drive(20)
car.drive(20)
car.drive(20)
car.drive(90)
car.drive(100)  // varyklis issijungia, rodo klaida ir rida pasipildo proporcingai nuvaziuotai kelio daliai
car.turnOff()

*/
 
/* class Car {
    constructor(variklis) {
        this.engine = variklis;
        this.liters = [5];
        this.consumption = [2.5];
        this.driven = s();
    }

    turnOn() {
        const turnOn = 
        const text = `${this.name} sarase yra ${this.list.length} uzduotys.`; 
        console.log(text);
    }

    add(text) {
        this.list.push({
            text: text,
            completed: false
        });
    }

    edit(index, newText) {
        this.list[index].text = newText;
    }

    remove(index) {
        if (index < 0 ||
            index >= this.list.length) {
            console.error('ERROR');
            return;    
        }
    
        const filtered = [];

        for (let i = 0; i < this.list.length; i++) {
            if (i !== index) {
                filtered.push(this.list[i]);
            }
        }
        this.list = filtered;
    }

    print(list = this.list) {
         console.table(list);
    }

    taskCompleted(index) {
        this.list[index].completed = true;
    }

    printCompletedOnly() {
        const completed = [];

        for (const task of this.list) {
            if (task.completed) {
                completed.push(task);
            }
        }
        this.print(completed);
    }

    printUnCompletedOnly() {
        const uncompleted = [];

        for (const task of this.list) {
            if (!task.completed) {
                uncompleted.push(task);
            }
        }
        this.print(uncompleted);
    }
}

export { Car }

*/


