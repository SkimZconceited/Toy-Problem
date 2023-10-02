let salary = 250000;

function nssfTax(x) {
    let p = .06;
    let tax = x * p;
    Math.floor(tax);
    return tax;
}

function nhifTax(x) {
    let tax = 0;

    if (x > 0 && x <= 5999) {
        tax = 150;
    } else if (x <= 7999) {
        tax = 300;
    } else if (x <= 11999) {
        tax = 400;
    } else if (x <= 14999) {
        tax = 500;
    } else if (x <= 19999) {
        tax = 600;
    } else if (x <= 24999) {
        tax = 750;
    } else if (x <= 29999) {
        tax = 850;
    } else if (x <= 34999) {
        tax = 900;
    } else if (x <= 39999) {
        tax = 950;
    } else if (x <= 44999) {
        tax = 1000;
    } else if (x <= 49999) {
        tax = 1100;
    } else if (x <= 59999) {
        tax = 1200;
    } else if (x <= 69999) {
        tax = 1300;
    } else if (x <= 79999) {
        tax = 1400;
    } else if (x <= 89999) {
        tax = 1500;
    } else if (x <= 99999) {
        tax = 1600;
    } else if (x >= 100000) {
        tax = 1700
    } else {
        console.warn(`Can't be less than 0`);
    }
    x = tax;
    // console.log(x);
    return x;
}

function payeeTax(x) {
    let p = 0;

    if (x > 0 && x <= 24000) {
        p = .1;
    } else if (x <= 32333) {
        p = .25;
    } else if (x <= 500000) {
        p = .3;
    } else if (x <= 800000) {
        p = .325;
    } else if (x > 800000) {
        p = .35;
    } else {
        console.log(`Can't evaluate ${x}`)
    }
    let y = Math.floor(x * p);
    // console.log(y);
    return y;
}

function calcSalary(x) {
    let nssfVal = nssfTax(x);
    let nhifVal = nhifTax(x);
    let payeeVal = payeeTax(x);
    let netDeduct = nssfVal + nhifVal + payeeVal;
    let netSalary = x - netDeduct;
    console.log(`Your gross salary is: ${x} deductions are NSSF:- ${nssfVal} NHIF:- ${nhifVal} and payee ${payeeVal}, your net salary is: ${netSalary}`);
    return netSalary;
}

calcSalary(salary);