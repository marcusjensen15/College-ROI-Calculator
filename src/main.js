import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {MyEducation} from './data.js';
import {MyCarLease} from './backend-car-lease.js';

$(document).ready(function(){
  $("#calculator").submit(function(event){
    event.preventDefault();
    let userCity = $("#city option:selected").val();
    let userMajor = $("#major option:selected").val();
    let userLifeStyle = $("#lifestyle option:selected").val();
    let userSchoolType = $("input:radio[name=typeOfSchool]:checked").val();
    let userFrequency = $("input:radio[name=payPercentage]:checked").val();
    let userCashToday = $("#cashToday").val();
    // let myEducation = new MyEducation("English","in state public", "San Francisco","medium", 100000, "fast");
    let myEducation = new MyEducation(userMajor, userSchoolType, userCity, userLifeStyle, userCashToday, userFrequency);

    $(".results").text(myEducation.paybackPeriod);

    //below is car lease testing


    let myCarLease = new MyCarLease(30000,4000,1000,0.05,8.5);

    console.log(myCarLease);


  });

});
