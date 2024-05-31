import {employees} from './assignment23.js'
console.log(employees);

let result = employees.filter((e1) => e1.address.city == "hyderabad");
let res = result.map((e2) => e2.name);
console.log(res);

let a1 = employees.filter((e3) => e3.age >= 40 && e3.age <= 50);
let a3 = a1.map((e4) => e4.name);
console.log(a3);

let r = employees.filter((e1) => e1.address.city != "hyderabad");
let rr = r.map((e2) => e2.name);
console.log(rr);

let s = employees.filter((e1) => e1.skills.includes("reactjs"));
let ss = s.map((e2) => e2.name);
console.log(ss);
