export let federalTaxRate = 0.23;


export  let averageCostOfLiving = [{"city": "San Antonio", "living_cost": 32587, "state_tax": 0.00},
  {"city": "Columbus", "living_cost": 32632, "state_tax": 0.03},
  {"city": "Jacksonville", "living_cost": 33104, "state_tax": 0.00	},
  {"city": "Indianapolis", "living_cost": 33530, "state_tax": 0.03	},
  {"city": "Dallas", "living_cost": 34563, "state_tax": 0.00	},
  {"city": "Houston", "living_cost": 35391, "state_tax": 0.00	},
  {"city": "Phoenix", "living_cost": 37715, "state_tax": 0.03	},
  {"city": "Philadelphia", "living_cost": 38291, "state_tax": 0.03	},
  {"city": "Austin", "living_cost": 38369, "state_tax": 0.00	},
  {"city": "Chicago", "living_cost": 38605, "state_tax": 0.05	},
  {"city": "Los Angeles", "living_cost": 42825, "state_tax": 0.06	},
  {"city": "San Diego", "living_cost": 46834, "state_tax": 0.06	},
  {"city": "New York", "living_cost": 51323, "state_tax": 0.05	},
  {"city": "San Jose", "living_cost": 61549, "state_tax": 0.06},
  {"city": "San Francisco", "living_cost": 69072, "state_tax": 0.06},
  {"city": "Birmingham", "living_cost": 30000, "state_tax": 0.04},
  {"city": "Anchorage", "living_cost": 40000, "state_tax": 0.00},
  {"city": "Little Rock", "living_cost": 30000, "state_tax": 0.07},
  {"city": "Denver", "living_cost": 31000, "state_tax": 0.0463},
  {"city": "Bridgeport", "living_cost": 40000, "state_tax": 0.05},
  {"city": "Wilmington", "living_cost": 40000, "state_tax": 0.06},
  {"city": "Atlanta", "living_cost": 28000, "state_tax": 0.05},
  {"city": "Honolulu", "living_cost": 53024, "state_tax": 0.08},
  {"city": "Boise", "living_cost": 30241, "state_tax": 0.045},
  {"city": "Des Moines", "living_cost": 31000, "state_tax": 0.06},
  {"city": "Wichita", "living_cost": 26000, "state_tax": 0.05},
  {"city": "Louisville", "living_cost": 28000, "state_tax": 0.05},
  {"city": "New Orleans", "living_cost": 25000, "state_tax": 0.06},
  {"city": "Portland, ME", "living_cost": 38800, "state_tax": 0.06},
  {"city": "Baltimore", "living_cost": 33000, "state_tax": 0.05},
  {"city": "Boston", "living_cost": 50000, "state_tax": 0.05},
  {"city": "Detroit", "living_cost": 22000, "state_tax": 0.0425},
  {"city": "Minneapolis", "living_cost": 25000, "state_tax": 0.07},
  {"city": "Kansas City", "living_cost": 33000, "state_tax": 0.05},
  {"city": "Billings", "living_cost": 34000, "state_tax": 0.057},
  {"city": "Omaha", "living_cost": 33000, "state_tax": 0.055},
  {"city": "Las Vegas", "living_cost": 37000, "state_tax": 0.00},
  {"city": "Manchester", "living_cost": 40000, "state_tax": 0.07},
  {"city": "Newark", "living_cost": 42000, "state_tax": 0.055},
  {"city": "Albuquerque", "living_cost": 34000, "state_tax": 0.04},
  {"city": "Charlotte", "living_cost": 35000, "state_tax": 0.055},
  {"city": "Fargo", "living_cost": 34000, "state_tax": 0.02},
  {"city": "Oklahoma City", "living_cost": 32000, "state_tax": 0.04},
  {"city": "Portland, OR", "living_cost": 42000, "state_tax": 0.07},
  {"city": "Providence", "living_cost": 37000, "state_tax": 0.04},
  {"city": "Charleston", "living_cost": 38000, "state_tax": 0.05},
  {"city": "Sioux Falls", "living_cost": 33000, "state_tax": 0.00},
  {"city": "Nashville", "living_cost": 35000, "state_tax": 0.06},
  {"city": "Salt Lake City", "living_cost": 38000, "state_tax": 0.05},
  {"city": "Burlington", "living_cost": 40000, "state_tax": 0.07},
  {"city": "Virginia Beach", "living_cost": 36000, "state_tax": 0.0575},
  {"city": "Seattle", "living_cost": 46000, "state_tax": 0.00},
  {"city": "Charleston, WV", "living_cost": 29000, "state_tax": 0.04},
  {"city": "Milwaukee", "living_cost": 33000, "state_tax": 0.06},
  {"city": "Cheyenne", "living_cost": 69072, "state_tax": 0.00}


];
//annual living cost. Source: https://www.cnbc.com/2018/03/22/how-much-it-costs-a-single-person-to-live-in-the-15-largest-us-cities.html . Added state tax rate

export let salaryByMajor = [

  {"major": "Chemical Engineering", "starting_sal": 63200 , "mid_career_sal": 107000},
  {"major": "Computer Engineering", "starting_sal": 61400 , "mid_career_sal": 105000},
  {"major": "Electrical Engineering", "starting_sal": 60900 , "mid_career_sal": 103000},
  {"major": "Aerospace Engineering", "starting_sal": 57700 , "mid_career_sal": 101000},
  {"major": "Economics", "starting_sal": 50100 , "mid_career_sal": 98600},
  {"major": "Physics", "starting_sal": 50300 , "mid_career_sal": 97300},
  {"major": "Computer Science", "starting_sal": 55900 , "mid_career_sal": 95500},
  {"major": "Industrial Engineering", "starting_sal": 57700 , "mid_career_sal": 94700},
  {"major": "Mechanical Engineering", "starting_sal": 57900 , "mid_career_sal": 93600},
  {"major": "Math", "starting_sal": 45400 , "mid_career_sal": 92400},
  {"major": "Physician Assistant", "starting_sal": 74300 , "mid_career_sal": 91700},
  {"major": "Cival Engineering", "starting_sal": 53900 , "mid_career_sal": 90500},
  {"major": "Construction", "starting_sal": 53700 , "mid_career_sal": 88900},
  {"major": "Finance", "starting_sal": 47900 , "mid_career_sal": 88300},
  {"major": "Managemnet Information Systems", "starting_sal": 49200 , "mid_career_sal": 82300},
  {"major": "Philosophy", "starting_sal": 39900 , "mid_career_sal": 81200},
  {"major": "International Relations", "starting_sal": 40900 , "mid_career_sal": 80900},
  {"major": "Chemistry", "starting_sal": 42600 , "mid_career_sal": 79900},
  {"major": "Marketing", "starting_sal": 40800 , "mid_career_sal": 79600},
  {"major": "Geology", "starting_sal": 43500 , "mid_career_sal": 79500},
  {"major": "Political Science", "starting_sal": 40800 , "mid_career_sal": 78200},
  {"major": "Accounting", "starting_sal": 46000 , "mid_career_sal": 77100},
  {"major": "Architecture", "starting_sal": 41600 , "mid_career_sal": 76800},
  {"major": "Information Technology", "starting_sal": 49100 , "mid_career_sal": 74800},
  {"major": "Business Management", "starting_sal": 43000 , "mid_career_sal": 72100},
  {"major": "Agriculture", "starting_sal": 42600 , "mid_career_sal": 71900},
  {"major": "History", "starting_sal": 39200 , "mid_career_sal": 71000},
  {"major": "Communications", "starting_sal": 38100 , "mid_career_sal": 70000},
  {"major": "Film", "starting_sal": 37900 , "mid_career_sal": 68500},
  {"major": "Nursing", "starting_sal": 54200 , "mid_career_sal": 67000},
  {"major": "Journalism", "starting_sal": 35600 , "mid_career_sal": 66700},
  {"major": "Geography", "starting_sal": 41200 , "mid_career_sal": 65500},
  {"major": "Art History", "starting_sal": 35800 , "mid_career_sal": 64900},
  {"major": "Biology", "starting_sal": 38800 , "mid_career_sal": 64800},
  {"major": "English", "starting_sal": 38000 , "mid_career_sal": 64700},
  {"major": "Forestry", "starting_sal": 39100 , "mid_career_sal": 62600},
  {"major": "Anthropology", "starting_sal": 36800 , "mid_career_sal": 61500},
  {"major": "Health Care Administration", "starting_sal": 38800 , "mid_career_sal": 60600},
  {"major": "Psychology", "starting_sal": 35900 , "mid_career_sal": 60400},
  {"major": "Graphic Design", "starting_sal": 35700 , "mid_career_sal": 59800},
  {"major": "Sociology", "starting_sal": 36500 , "mid_career_sal": 58200},
  {"major": "Hospitality & Tourism", "starting_sal": 37800 , "mid_career_sal": 57500},
  {"major": "Drama", "starting_sal": 35900 , "mid_career_sal": 56900},
  {"major": "Criminal Justice", "starting_sal": 35000 , "mid_career_sal": 56300},
  {"major": "Nutrition", "starting_sal": 39900 , "mid_career_sal": 55300},
  {"major": "Music", "starting_sal": 35900 , "mid_career_sal": 55000},
  {"major": "Interior Design", "starting_sal": 36100 , "mid_career_sal": 53200},
  {"major": "Spanish", "starting_sal": 34000 , "mid_career_sal": 53100},
  {"major": "Education", "starting_sal": 34900 , "mid_career_sal": 52000},
  {"major": "Religion", "starting_sal": 34100 , "mid_career_sal": 52000}

];

// starting salary and mid career salary by major. source: https://www.visualcapitalist.com/visualizing-salaries-college-degrees/


export let lifeStyle = [
  {"lifestyle" : "low", "cost": 8850},
  {"lifestyle" : "medium", "cost": 16650},
  {"lifestyle" : "high", "cost": 24600}


];

//Assuming not paying rent/buying groceries over the summer, also no summer job/internship. calculated these numbers but don't come from source.

export let schoolType = [
  {"type" : "in state public", "yearly_tuition_cost": 14900, "four_year_cost": 59000},
  {"type" : "out of state public", "yearly_tuition_cost": 36000, "four_year_cost": 144000},
  {"type" : "private", "yearly_tuition_cost": 52000, "four_year_cost": 208000}


];

//4 year tuition cost for each type of institiution. Found numbers on collegeboard.com

export let paybackRate = [
  {"frequency" : "slow", "percent_paycheck": 0.10},
  {"frequency" : "medium", "percent_paycheck": 0.15},
  {"frequency" : "fast", "percent_paycheck": 0.25}

];

//how fast they are going to pay back as a percentage of paycheck



export class MyEducation{
  constructor(inputDegree,inputSchoolType,inputGradLocation,inputLifestyle,inputCashToday,paycheckPayback){
    this.degree = inputDegree;
    this.schoolType = inputSchoolType;
    this.gradLocation = inputGradLocation;
    this.lifestyle = inputLifestyle;
    this.cashToday = inputCashToday;
    this.paycheckPayback = paycheckPayback;
    this.startingSalary = this.startingSalary();
    this.midCareerSalary = this.midCareerSalary();
    this.effectiveTaxRate = this.effectiveTaxRate();
    this.loanPrincipalAmount = this.loanPrincipalAmount();
    this.paycheckPaybackRate = this.paybackRate();
    this.studentLoanRate = 0.045/365;
    this.postTaxIncome = (1 - this.effectiveTaxRate) * this.startingSalary;
    this.postTaxIncomeMidCareer = (1 - this.effectiveTaxRate) * this.midCareerSalary;
    this.paybackPeriod = this.paybackPeriod();

    //assuming federal student loan rate. Student loans are compounded daily. consult:
    //https://studentloanhero.com/featured/truth-about-student-loan-interest-rates/ for resource


  }

  startingSalary(){
    for(let i = 0; i < salaryByMajor.length;i++)
      if (this.degree === salaryByMajor[i].major){
        return salaryByMajor[i].starting_sal;
      }
  }
  midCareerSalary(){
    for(let i = 0; i < salaryByMajor.length;i++)
      if (this.degree === salaryByMajor[i].major){
        return salaryByMajor[i].mid_career_sal;
      }

  }
  effectiveTaxRate(){
    for(let i = 0; i < averageCostOfLiving.length;i++)
      if (this.gradLocation === averageCostOfLiving[i].city){
        return averageCostOfLiving[i].state_tax + federalTaxRate;
      }

  }
  loanPrincipalAmount(){
    let tuitionExpense;
    let lifeStyleExpense;
    let principalAmount;
    for(let i = 0; i < schoolType.length;i++){
      if(this.schoolType === schoolType[i].type){
        tuitionExpense = schoolType[i].four_year_cost;
      }
    }
    for(let j=0; j< lifeStyle.length;j++ ){
      if(this.lifestyle === lifeStyle[j].lifestyle){
        lifeStyleExpense = lifeStyle[j].cost * 4;

      }

    }
    principalAmount = tuitionExpense + lifeStyleExpense;
    return principalAmount;
  }

  paybackRate(){
    for(let i = 0; i < paybackRate.length;i++ ){
      if(this.paycheckPayback === paybackRate[i].frequency){
        return paybackRate[i].percent_paycheck;
      }
    }
  }
  paybackPeriod(){
    let principal = this.loanPrincipalAmount - this.cashToday;
    let salaryMultiple = this.postTaxIncome;

    for(let i = 0; i<14601; i++){

      if(this.cashToday > this.loanPrincipalAmount){return "You dont need a loan to pay for your education";}

       else if(i % 30 !== 0 && principal > 0){

        principal = principal + (this.studentLoanRate * principal);}


      else if(principal <= 0 && i < 14600){return "it will take you " + Math.round(i/365) + "<br> years to pay back your loan";}

      else if(i > 7300 && i % 30 === 0){

        salaryMultiple = this.postTaxIncomeMidCareer;
        // principal = principal - (salaryMultiple*this.paycheckPaybackRate);
        principal = principal - ((salaryMultiple*this.paycheckPaybackRate)/12);

      } // this should be combined with the next condition and at the top
      else if(i < 7300 && i % 30 === 0){
        // principal = principal - (salaryMultiple*this.paycheckPaybackRate);
        principal = principal - ((salaryMultiple*this.paycheckPaybackRate)/12);

      }

    }
    return "you will not be able to pay back this loan in your lifetime. You will have" + "$" + Math.round(principal) + " left to pay after 40 years."
  }
}
//need to make sure it is delivering the correct values. i think it is overshooting the number of years it takes to payback
