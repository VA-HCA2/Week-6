"use strict";

let employees=[
    {name:"Dana", salary:62000},
    {name:"Brenda", hourlyRate: 16.75, hoursWorked:40},
    {name:"Paulina", salary:50000},
    {name:"Maria", hourlyRate: 18.75, hoursWorked:45}

]

for (let i = 0; i < employees.length; i++) {

    let emp = employees[i];
 
    for (let key in emp) {
        //console.log(`${key}: ${employeesPay1[key]}`);

        if (key == "salary") {
            let grossPay = emp[key] / 52;
            getPay(grossPay,emp)
        }
        else if (key=="hourlyRate")
        {
            let grossPay = emp[key]*emp.hoursWorked
            getPay(grossPay,emp)
        }
    }
}

function getPay(grossPay,emp){

    let fedTax=grossPay*0.125
    let socialSecTax=grossPay*0.062
    let medicarTax=grossPay*0.0145

    let netPay=grossPay-fedTax-socialSecTax-medicarTax

    console.log("Name: "+emp.name)
    console.log("Gross Pay: "+grossPay.toFixed(2))
    console.log("Social Security Tax: "+socialSecTax.toFixed(2))
    console.log("Medicare Tax: "+medicarTax.toFixed(2))
    console.log("Fedex Tax: "+fedTax.toFixed(2))
    console.log("Net Pay: "+netPay.toFixed(2))
    console.log("-----------------")
}