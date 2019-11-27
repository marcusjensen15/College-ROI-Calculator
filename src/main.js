// import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {averageCostOfLiving, salaryByMajor, lifeStyle, schoolType, paybackRate, federalTaxRate, MyEducation} from './data.js';


let myEducation = new MyEducation("English","in state public", "San Francisco","medium", 100000, "fast");



console.log(myEducation);

// console.log(myEducation.startingSalary());

console.log(averageCostOfLiving[5].living_cost);

console.log(salaryByMajor[4].mid_career_sal + salaryByMajor[0].mid_career_sal);

console.log(lifeStyle[1].cost);

console.log(federalTaxRate);


console.log(schoolType[1]);


console.log(paybackRate[1].frequency);
