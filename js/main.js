import { Todo } from './components/Todo.js';

const randomUzduotys = new Todo('Random uzduotys');

randomUzduotys.name;
randomUzduotys.list;
randomUzduotys.summary();

randomUzduotys.add('Sukurti pirma uzduoti');
randomUzduotys.add('uzmaisyti tesla');
randomUzduotys.add('nueiti i parduotuve');
randomUzduotys.summary();