export class MyCarLease{
  constructor(car_MSRP,trade_in_credit,down_payment,sales_tax,apr){
    this.car_MSRP = car_MSRP;
    this.trade_in_credit = trade_in_credit;
    this.down_payment = down_payment;
    this.sales_tax = sales_tax;
    this.apr = apr;
    this.leaseTerm = 36;

    this.netCapCost = this.netCapCost();
    this.residual_value = this.residual_value();
    this.depreciationFeeMonthly = this.depreciationFeeMonthly(); //needs net cap result

    this.moneyFactor = this.moneyFactor();  //needs apr

    this.financingFeeMonthly = this.financingFeeMonthly(); //needs net cap cost, residual value, money factor

    this.salesTaxMonthly = this.salesTaxMonthly(); //needs net cap cost and monthly depreciation fee

    this.total_monthly_lease_payment = this.total_monthly_lease_payment(); //needs monthly sales tax, depreciation fee and financing fee

    this.depreciationThreeYear =   this.depreciationThreeYear();

    this.financingFeeThreeYear =   this.depreciationThreeYear();

    this.salesTaxThreeYear =   this.depreciationThreeYear();





  }



}
