class Todo {
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