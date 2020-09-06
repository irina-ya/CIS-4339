function CalcPayment() {
    const dollar_sign = '$';

    //Source for pulling html form inputs - https://www.codeproject.com/Questions/1232562/I-want-to-display-form-data-on-same-page-using-jav

    var name = document.getElementById("name").value; 
    //Read currency amounts as floats, month amount as int         
    var down_pay = parseFloat(document.getElementById("down_pay").value);
    var loan_amt = parseFloat(document.getElementById("loan_amt").value);
    var terms = parseInt(document.getElementById("terms").value);
    var rate = parseFloat(document.getElementById("rate").value);

    var total_price = down_pay + loan_amt;
    
    //Formula from : https://www.nerdwallet.com/mortgages/mortgage-payment-calculator

    //monthly interest rate
    var i = rate / 100 / 12;
    //number of monthly payments. Did not *12 as our input is in months.
    var n = terms;

    var monthly_payment = loan_amt * i * (Math.pow(1 + i, n)) / (Math.pow(1 + i, n) - 1);
    
    document.getElementById("display_name").innerHTML = name;
    document.getElementById("total_price").innerHTML = dollar_sign + total_price.toFixed(2);
    document.getElementById("monthly_payment").innerHTML = dollar_sign + monthly_payment.toFixed(2);
}