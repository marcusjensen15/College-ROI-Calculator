import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {MyEducation} from './data.js';
import {MyCarLease} from './backend-car-lease.js';

$(document).ready(function(){
  $("#collegeROI").click(function(event){
    event.preventDefault();
    $(".pos-f-t").show();
    $("#collegePage").show();
    $("#firstPage").hide();
  });
  $("#carLeasing").click(function(event){
    event.preventDefault();
    $(".pos-f-t").show();
    $("#car_lease").show();
    $("#firstPage").hide();
  });
  $("#home").click(function(event){
    event.preventDefault();
    $(".pos-f-t").hide();
    $("#car_lease").hide();
    $("#firstPage").show();
    location.reload();
  });

  $("#homeCollege").click(function(event){
    event.preventDefault();
    $(".pos-f-t").hide();
    $("#collegePage").hide();
    $("#firstPage").show();
    location.reload();
  });

  $(".carLeaseForm").submit(function(event){
    event.preventDefault();
    $(".leaseResult").text(" ");
    let inputMsrp = parseFloat($("#userMsrp").val());
    let inputTradeIn = parseFloat($("#userTradeIn").val());
    let inputDownPayment = parseFloat($("#userDownPayment").val());
    let inputSalesTax = parseFloat($("#userSalesTax").val());
    let inputApr = parseFloat($("#userApr").val());

    let myCarLease = new MyCarLease(inputMsrp,inputTradeIn,inputDownPayment,inputSalesTax,inputApr);
    $(".leaseResult").append(`<br>Over the total of your three year lease: <br> <br> Depreciation cost: $${myCarLease.depreciationThreeYear} <br> Financing fee: $${myCarLease.financingFeeThreeYear} <br> Sales Tax: $${myCarLease.salesTaxThreeYear}`);
    console.log(myCarLease);

  });

  $("#calculator").submit(function(event){
    event.preventDefault();
    let userCity = $("#city option:selected").val();
    let userMajor = $("#major option:selected").val();
    let userLifeStyle = $("input:radio[name=lifestyle]:checked").val();
    let userSchoolType = $("input:radio[name=typeOfSchool]:checked").val();
    let userFrequency = $("input:radio[name=payPercentage]:checked").val();
    let userCashToday = parseInt($("#cashToday").val());
    // let myEducation = new MyEducation("English","in state public", "San Francisco","medium", 100000, "fast");
    let myEducation = new MyEducation(userMajor, userSchoolType, userCity, userLifeStyle, userCashToday, userFrequency);
    $("#collegePage").hide();
    $("#results").show();
    $("#finalResults").text(myEducation.paybackPeriod);

    //below is car lease testing
    console.log(myEducation);




  });

  $("button#newCollege").click(function(){
    $("#collegePage").show();
    $("#results").hide();
  });

  $("button.restart").click(function(){
    location.reload();
  });
});
