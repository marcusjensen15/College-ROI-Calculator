import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {MyEducation} from './data.js';

$(document).ready(function(){
  $("#collegeROI").click(function(event){
    event.preventDefault();
    $("#collegePage").show();
    $("#firstPage").hide();
  });

  $("#carLeasing").click(function(event){
    event.preventDefault();

  });

  $("#calculator").submit(function(event){
    event.preventDefault();
    let userCity = $("#city option:selected").val();
    let userMajor = $("#major option:selected").val();
    let userLifeStyle = $("input:radio[name=lifestyle]:checked").val();
    let userSchoolType = $("input:radio[name=typeOfSchool]:checked").val();
    let userFrequency = $("input:radio[name=payPercentage]:checked").val();
    let userCashToday = $("#cashToday").val();
    // let myEducation = new MyEducation("English","in state public", "San Francisco","medium", 100000, "fast");
    let myEducation = new MyEducation(userMajor, userSchoolType, userCity, userLifeStyle, userCashToday, userFrequency);

    $(".results").text(myEducation.paybackPeriod);

  });

});




// console.log(myEducation);
//
// // console.log(myEducation.startingSalary());
//
// console.log(averageCostOfLiving[5].living_cost);
//
// console.log(salaryByMajor[4].mid_career_sal + salaryByMajor[0].mid_career_sal);
//
// console.log(lifeStyle[1].cost);
//
// console.log(federalTaxRate);
//
//
// console.log(schoolType[1]);
//
//
// console.log(paybackRate[1].frequency);
