import { defineStore } from "pinia";

interface CalFormVal {
  year: number;
  total: number;
  interestRatio: number;
  allowancePeriod: number;
}

const toMoneyStyle = (num: number) => {
  return num.toLocaleString("zh-TW", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
};

//房貸試算
export const useCalculator = defineStore("calculator", {
  state: () => {
    return {
      deposit: "",
      sign: "",
      firstFloor: "",
      eighthFloor: "",
      sixteenThFloor: "",
      construction: "",
      license: "",
      delivery: "",
      ownMoney: "",
      loanMoney: "",
      monthlyCost: "",
      interestRepayment: "",
      allowancePeriodCost: "",
      afterAllowancePeriodCost: "",
    };
  },
  actions: {
    loanCalc(val: CalFormVal) {
      //月利率
      const monthRatio = val.interestRatio / 12 / 100;

      let loanMonth = 0;
      let periodMoney = 0;
      let avgMonthRatio = 0;
      let totalMoney = 0;
      this.deposit = "10";
      //有寬限期
      if (val.allowancePeriod > 0) {
        //-- 月數= (貸款年限*12)-(寬限年*12) --
        loanMonth = val.year * 12 - val.allowancePeriod * 12;
        //-- 每月應付本息金額之平均攤還率 --
        avgMonthRatio =
          (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
          (Math.pow(1 + monthRatio, loanMonth) - 1);
        periodMoney = val.total * 0.75 * monthRatio * 10000;
      } else {
        //無寬限期
        //-- 月數= 貸款年限*12 --
        loanMonth = val.year * 12;
        //-- 每月應付本息金額之平均攤還率 --
        avgMonthRatio =
          (Math.pow(1 + monthRatio, loanMonth) * monthRatio) /
          (Math.pow(1 + monthRatio, loanMonth) - 1);

        totalMoney = Math.floor(
          val.total * 0.75 * avgMonthRatio * 10000 * loanMonth
        );
      }
      //---------------- 拆款 ----------------

      //簽約金
      this.sign = toMoneyStyle(Math.ceil(val.total * 0.1 - 10));
      //1樓底板
      this.firstFloor = toMoneyStyle(Math.ceil(val.total * 0.02));
      //8樓底板
      this.eighthFloor = toMoneyStyle(Math.ceil(val.total * 0.02));
      //16樓底板
      this.sixteenThFloor = toMoneyStyle(Math.ceil(val.total * 0.02));
      //結構完成
      this.construction = toMoneyStyle(Math.ceil(val.total * 0.02));
      //交屋款
      this.delivery = toMoneyStyle(Math.ceil(val.total * 0.05));

      //---------------- 拆款 END ----------------
      //自備款
      this.ownMoney = toMoneyStyle(Math.ceil(val.total * 0.25));
      //貸款
      this.loanMoney = toMoneyStyle(Math.floor(val.total * 0.75));

      //使照申請 自備款減去拆款後的值當作使照申請
      this.license = toMoneyStyle(
        Number(this.ownMoney) -
          Number(this.deposit) -
          Number(this.sign) -
          Number(this.firstFloor) -
          Number(this.eighthFloor) -
          Number(this.sixteenThFloor) -
          Number(this.construction) -
          Number(this.delivery)
      );
      console.log(this.license);
      //本利攤還
      this.monthlyCost = toMoneyStyle(
        Math.floor(val.total * 0.75 * avgMonthRatio * 10000)
      );
      //還息金額
      this.interestRepayment = toMoneyStyle(
        (totalMoney - val.total * 0.75 * 10000) / loanMonth
      );
      //寬限期
      this.allowancePeriodCost = toMoneyStyle(Math.floor(periodMoney));
      //寬限期之後
      this.afterAllowancePeriodCost = toMoneyStyle(
        Math.floor(val.total * 0.75 * avgMonthRatio * 10000)
      );
    },
  },
});
