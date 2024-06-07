//-- 計算  --
math_btn.addEventListener(MouseEvent.CLICK, function (e: MouseEvent) {
  //-- 月利率 --
  var month_apr: Number = Number(input_mv.pr.text) / 12 / 100;

  var month_num: Number;
  //   allyear: 貸款年限
  //   allmoney: 總價
  //   pr: 年利率
  //   period_year: 寬限期

  //-- 月數 --
  if (Number(input_mv.period_year.text) > 0) {
    month_num =
      Number(input_mv.allyear.text) * 12 -
      Number(input_mv.period_year.text) * 12;
  } else {
    month_num = Number(input_mv.allyear.text) * 12;
  }

  //trace(month_num);

  //-- 每月應付本息金額之平均攤還率 --
  var avg_for_money =
    (Math.pow(1 + month_apr, month_num) * month_apr) /
    (Math.pow(1 + month_apr, month_num) - 1);

  //-- 自備金額 --
  var m_money: Number;
  //-- 貸款金額 --
  var money: Number;
  //-- 總價 --
  var all_money: Number = Number(input_mv.allmoney.text);
  //-- 簽約金+結構體款+使照取得+交屋款 --
  var out_pay_total: Number;

  //-- 總價大於4000萬 貸4成 --
  if (all_money >= 4000) {
    money = all_money * 10000 * 0.4;
    m_money = Math.ceil(all_money * 0.6);
    //-- 自備 --
    // output_mv.my_money.text = nf.formatNumber(m_money);
    //-- 貸金 --
    // output_mv.loan_money.text = nf.formatNumber(Math.floor(all_money * 0.4));

    //---------------- 拆款 ----------------

    //-- 簽約金 --
    output_mv.s_fee.text = Math.ceil(all_money * 0.12 - 20);
    //-- 結構體款 --
    output_mv.structure_pay.text = Math.ceil(all_money * 0.05);
    //-- 使照取得 --
    output_mv.license_pay.text = Math.ceil(all_money * 0.05);
    //-- 交屋款 --
    output_mv.house_pay.text = Math.ceil(all_money * 0.05);

    //-- 工程期款 --
    //output_mv.project_pay.text=Math.round(all_money * 0.33);
    out_pay_total =
      Math.ceil(all_money * 0.12) +
      Math.ceil(all_money * 0.05) +
      Math.ceil(all_money * 0.05) +
      Math.ceil(all_money * 0.05);
    output_mv.project_pay.text = m_money - out_pay_total;

    //---------------- 拆款 END ----------------
  } else {
    money = all_money * 10000 * 0.7;
    m_money = Math.ceil(all_money * 0.3);
    //-- 自備 --
    // output_mv.my_money.text = nf.formatNumber(m_money);
    //-- 貸金 --
    // output_mv.loan_money.text = nf.formatNumber(Math.floor(all_money * 0.7));

    //---------------- 拆款 ----------------

    //-- 簽約金 --
    output_mv.s_fee.text = Math.ceil(all_money * 0.12 - 20);
    //-- 結構體款 --
    output_mv.structure_pay.text = Math.ceil(all_money * 0.03);
    //-- 使照取得 --
    output_mv.license_pay.text = Math.ceil(all_money * 0.03);
    //-- 交屋款 --
    output_mv.house_pay.text = Math.ceil(all_money * 0.05);

    //-- 工程期款 --
    //output_mv.project_pay.text=Math.round(all_money * 0.07);
    out_pay_total =
      Math.ceil(all_money * 0.12) +
      Math.ceil(all_money * 0.03) +
      Math.ceil(all_money * 0.03) +
      Math.ceil(all_money * 0.05);
    trace(m_money);
    trace(out_pay_total);
    output_mv.project_pay.text = m_money - out_pay_total;

    //---------------- 拆款 END ----------------
  }

  //   output_mv.period_year.text = input_mv.period_year.text;
  //   output_mv.period_year2.text = input_mv.period_year.text;
  //output_mv.year_num.text=input_mv.allyear.text;

  var avg_pay_money, total_money, interest, period_money;

  if (Number(input_mv.period_year.text) > 0) {
    // output_mv.money2.visible = false;
    // output_mv.money1.visible = true;

    //-- 寬限期(金額) --
    period_money = money * month_apr * (Number(input_mv.period_year.text) * 12);

    //-- 平均本息攤還 --
    avg_pay_money = Math.floor(money * avg_for_money);

    //-- 本息合計 --
    total_money = avg_pay_money * month_num + period_money;

    //-- 利息 --
    interest = total_money - money;
  } else {
    output_mv.money2.visible = true;
    output_mv.money1.visible = false;

    //-- 寬限期(金額) --
    period_money = 0;

    //-- 平均本息攤還 --
    avg_pay_money = Math.floor(money * avg_for_money);

    //-- 本息合計 --
    total_money = avg_pay_money * month_num;

    //-- 利息 --
    interest = total_money - money;
  }

  //-- 數字千位數 --
  //   output_mv.money1.avg_money.text = nf.formatNumber(avg_pay_money);
  //   output_mv.money2.avg_money2.text = nf.formatNumber(avg_pay_money);

  //   if (Number(input_mv.period_year.text) > 0) {
  //     output_mv.money1.avg_period_money.text = nf.formatNumber(
  //       Math.floor(money * month_apr)
  //     );
  //   } else {
  //     output_mv.money1.avg_period_money.text = 0;
  //   }
});
