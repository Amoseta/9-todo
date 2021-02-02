/* import { Todo } from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');

randomUzduotys.name;
randomUzduotys.list;
randomUzduotys.summary();

randomUzduotys.add('Sukurti pirma uzduoti');
randomUzduotys.add('uzmaisyti tesla');
randomUzduotys.add('nueiti i parduotuve');
randomUzduotys.summary();
*/ 


/* klase: Suo

parametrai:
    - vardas
    - kailio spalva

metodai:
    - prisistatymas (Hello, I am {name} and my fur is {color} 🐕‍🦺)

    
    import { Suo } from './components/Todo.js';
    
    const greeting = new Suo('Ciupkus', 'juodai rudas');
    
    greeting.summary();
    
    greeting.add('su');
    greeting.add('baltom');
    greeting.add('demem');
    greeting.summary();
    
*/

import { Todo } from './components/Todo.js';

const blynai = new Todo('Blynu kepimas');

blynai.add('Uzmaisyti tesla');
blynai.add('Ijungti kaitlente');
blynai.add('Istraukti keptuve');
blynai.add('Ipilti tesla i keptuve');
blynai.add('Apversti blynus');
blynai.add('Isimti blynus');
blynai.add('Isjungti keptuve');

blynai.edit(0, 'Isplauti dubeni ir uzmaisyti tesla');

blynai.remove(4);
blynai.taskCompleted (0);
blynai.taskCompleted (2);
blynai.taskCompleted (5);

blynai.summary();

blynai.print();
blynai.printCompletedOnly();
blynai.printUnCompletedOnly();