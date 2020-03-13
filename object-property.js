const students = [
    {id : 78, name : 'Omar'},
    {id : 56, name : 'Sakib'},
    {id : 45, name : 'Sharuk'},
    {id : 56, name : "Neyan"}
];

const names = students.map(s => s.name);
console.log(names);
const ids = students.map(s => s.id);
console.log(ids);

const bigger = students.filter(s => s.id>45);
console.log(bigger);

const biggerOne = students.find(s => s.id>45);
console.log(biggerOne);