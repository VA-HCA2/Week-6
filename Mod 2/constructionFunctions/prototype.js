"use strict";

function PolicyInfo(pNum, pholder, ptype, polIssueDate, polRenewalDate, polPremium) {
    this.polNum = pNum,
    this.holder = pholder;
    this.type = ptype;
    this.issuedate = polIssueDate;
    this.renewal = polRenewalDate;
    this.premium = polPremium;


    PolicyInfo.prototype.display = function () {
        console.log(`   Policy Number: ${this.polNum} Policy Holder: ${this.holder} Policy Type: ${this.type} 
                        Policy Issue Date: ${this.issuedate} Policy Renewal Date ${this.renewal}
                        Policy Premium: ${this.premium}`)
    };

    PolicyInfo.prototype.renew = function (pctChange) {
        var today = new Date();
        today.setFullYear(today.getFullYear() + 1)
        this.renewal = today
        this.premium += this.premium * pctChange

    }
}


let policies = [
    new PolicyInfo("101a", "Dana", "Auto", new Date(2018, 7, 27), new Date(2019, 7, 27), 1200),
    new PolicyInfo("102p", "Maria", "Home", new Date(1994, 6, 3), new Date(2020, 6, 1), 2200),
    new PolicyInfo("103l", "Sofia", "Auto", new Date(1995, 7, 3), new Date(2020, 7, 3), 3200)
]

for (let i = 0; i < policies.length; i++) {

    let today = new Date()
    if (today.getFullYear() == policies[i].renewal.getFullYear() && today.getMonth() == policies[i].renewal.getMonth()
        && today.getDate() == policies[i].renewal.getDate()) {
        if (policies[i].type == "Auto") {

            let year = today.getFullYear() - 3
            if (policies[i].issuedate.getFullYear() <= year) {
                policies[i].renew(0)
            }

            else {
                policies[i].renew(0.05)
            }
        }
        else {
            policies[i].renew(0.03)
        }
    }

    policies[i].display()
}



