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
  {"city": "San Jose", "living_cost": 61549, "state_tax": 0.06	},
  {"city": "San Francisco", "living_cost": 69072, "state_tax": 0.06	}

];
//annual living cost. Source: https://www.cnbc.com/2018/03/22/how-much-it-costs-a-single-person-to-live-in-the-15-largest-us-cities.html . Added state tax rate

export let salaryByMajor = [

  {"major": "Engineering", "starting_sal": 60000 , "mid_career_sal": 100000},

  {"major": "Computer Science", "starting_sal": 55900 , "mid_career_sal": 95500},

  {"major": "Math", "starting_sal": 45400 , "mid_career_sal": 92400},

  {"major": "Chemistry", "starting_sal": 42600 , "mid_career_sal": 79900},

  {"major": "Physics", "starting_sal": 50300 , "mid_career_sal": 97300},

  {"major": "Economics", "starting_sal": 50100 , "mid_career_sal": 98600},

  {"major": "History", "starting_sal": 39200 , "mid_career_sal": 71000},

  {"major": "Film", "starting_sal": 37900 , "mid_career_sal": 68500},

  {"major": "Art History", "starting_sal": 35800 , "mid_career_sal": 64900},

  {"major": "English", "starting_sal": 38000 , "mid_career_sal": 64700},

  {"major": "Psychology", "starting_sal": 35900 , "mid_career_sal": 60400},

  {"major": "Nutrition", "starting_sal": 39900 , "mid_career_sal": 55300},

  {"major": "Education", "starting_sal": 34900 , "mid_career_sal": 52000},

  {"major": "Music", "starting_sal": 35900 , "mid_career_sal": 55000},

  {"major": "General Business", "starting_sal": 40800 , "mid_career_sal": 79600}

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
    let salaryMultiple = this.startingSalary;

    for(let i = 0; i<14601; i++){

       if(i % 30 !== 0 && principal > 0){

        // principal = principal + (this.studentLoanRate * principal);}
        principal = principal + (this.studentLoanRate * principal);}


      else if(principal <= 0 && i < 14600){return "it will take you " + i/365 + " years to pay back your loan";}

      else if(i > 7300 && i % 30 === 0){

        salaryMultiple = this.midCareerSalary;
        // principal = principal - (salaryMultiple*this.paycheckPaybackRate);
        principal = principal - ((salaryMultiple*this.paycheckPaybackRate)/12);

      } // this should be combined with the next condition and at the top
      else if(i < 7300 && i % 30 === 0){
        // principal = principal - (salaryMultiple*this.paycheckPaybackRate);
        principal = principal - ((salaryMultiple*this.paycheckPaybackRate)/12);

      }
      // else if (i > 14,600 && principal > 0){return "you will not be able to pay back this loan in your lifetime. You will have " + principal + " left to pay after 40 years.";}
      //problem: we need an embeded if statement i > 7300 and other stuff in same if condition. if not, it is just changing the value and not compounding becuase it breaks that loop ideration if true
    }
    return "you will not be able to pay back this loan in your lifetime. You will have " + principal + " left to pay after 40 years."
  }
}
//not taking into account cash on hand either
