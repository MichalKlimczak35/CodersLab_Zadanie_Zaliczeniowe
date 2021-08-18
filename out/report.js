$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/BuyASweater.feature");
formatter.feature({
  "line": 1,
  "name": "BuyASweater",
  "description": "",
  "id": "buyasweater",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can buy a sweater",
  "description": "",
  "id": "buyasweater;user-can-buy-a-sweater",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Main site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User goes to sign in site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User logs in onto his account using email and password. \u003cemail\u003e , \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User returns to the Main site",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can select Hummingbird printed sweater",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can see if the product has an discount",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can select desired size of the product \u003csize\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can select \u003camount\u003e of products to order",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can place an order filling necessary information. \u003caddress\u003e , \u003czipCode\u003e , \u003ccity\u003e , \u003ccountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User makes a screenshot of their order. \u003cn\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "buyasweater;user-can-buy-a-sweater;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "size",
        "amount",
        "address",
        "zipCode",
        "city",
        "country",
        "n"
      ],
      "line": 17,
      "id": "buyasweater;user-can-buy-a-sweater;;1"
    },
    {
      "cells": [
        "utfsitumnkgcnazjnc@tbbyt.net",
        "test125678",
        "XL",
        "4",
        "Zgoda 13",
        "01-007",
        "Pruszkow",
        "United Kingdom",
        "1"
      ],
      "line": 18,
      "id": "buyasweater;user-can-buy-a-sweater;;2"
    },
    {
      "cells": [
        "yzwsqvwdedjmisdvlw@uivvn.net",
        "123456789",
        "M",
        "6",
        "Promyka 1",
        "02-572",
        "Pruszkow",
        "United Kingdom",
        "2"
      ],
      "line": 19,
      "id": "buyasweater;user-can-buy-a-sweater;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 18,
  "name": "User can buy a sweater",
  "description": "",
  "id": "buyasweater;user-can-buy-a-sweater;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Main site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User goes to sign in site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User logs in onto his account using email and password. utfsitumnkgcnazjnc@tbbyt.net , test125678",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User returns to the Main site",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can select Hummingbird printed sweater",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can see if the product has an discount",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can select desired size of the product XL",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can select 4 of products to order",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can place an order filling necessary information. Zgoda 13 , 01-007 , Pruszkow , United Kingdom",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User makes a screenshot of their order. 1",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreSteps.goToMainPage()"
});
formatter.result({
  "duration": 3323570700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.goToLogInSite()"
});
formatter.result({
  "duration": 238761700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utfsitumnkgcnazjnc@tbbyt.net",
      "offset": 56
    },
    {
      "val": "test125678",
      "offset": 87
    }
  ],
  "location": "MyStoreSteps.logIn(String,String)"
});
formatter.result({
  "duration": 504756200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.returnToMainSiteFromAccountPage()"
});
formatter.result({
  "duration": 234751800,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.searchForProduct()"
});
formatter.result({
  "duration": 248546900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.checkPromotion()"
});
formatter.result({
  "duration": 13093900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "XL",
      "offset": 44
    }
  ],
  "location": "MyStoreSteps.selectSize(String)"
});
formatter.result({
  "duration": 224312500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 16
    }
  ],
  "location": "MyStoreSteps.selectAmount(String)"
});
formatter.result({
  "duration": 19607600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.addToCartAndProceedToCheckOut()"
});
formatter.result({
  "duration": 1376270800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Zgoda 13 ",
      "offset": 55
    },
    {
      "val": "01-007",
      "offset": 66
    },
    {
      "val": "Pruszkow",
      "offset": 75
    },
    {
      "val": "United Kingdom",
      "offset": 86
    }
  ],
  "location": "MyStoreSteps.fillCheckOutForm(String,String,String,String)"
});
formatter.result({
  "duration": 2025181500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 40
    }
  ],
  "location": "MyStoreSteps.makeScreenshot(String)"
});
formatter.result({
  "duration": 242106700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "User can buy a sweater",
  "description": "",
  "id": "buyasweater;user-can-buy-a-sweater;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "User is on Main site",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "User goes to sign in site",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "User logs in onto his account using email and password. yzwsqvwdedjmisdvlw@uivvn.net , 123456789",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User returns to the Main site",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can select Hummingbird printed sweater",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can see if the product has an discount",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can select desired size of the product M",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can select 6 of products to order",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User can place an order filling necessary information. Promyka 1 , 02-572 , Pruszkow , United Kingdom",
  "matchedColumns": [
    4,
    5,
    6,
    7
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "User makes a screenshot of their order. 2",
  "matchedColumns": [
    8
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreSteps.goToMainPage()"
});
formatter.result({
  "duration": 3129313000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.goToLogInSite()"
});
formatter.result({
  "duration": 222743300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "yzwsqvwdedjmisdvlw@uivvn.net",
      "offset": 56
    },
    {
      "val": "123456789",
      "offset": 87
    }
  ],
  "location": "MyStoreSteps.logIn(String,String)"
});
formatter.result({
  "duration": 478736700,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.returnToMainSiteFromAccountPage()"
});
formatter.result({
  "duration": 240828900,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.searchForProduct()"
});
formatter.result({
  "duration": 257814400,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.checkPromotion()"
});
formatter.result({
  "duration": 14764600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 44
    }
  ],
  "location": "MyStoreSteps.selectSize(String)"
});
formatter.result({
  "duration": 229235800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "6",
      "offset": 16
    }
  ],
  "location": "MyStoreSteps.selectAmount(String)"
});
formatter.result({
  "duration": 17391600,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.addToCartAndProceedToCheckOut()"
});
formatter.result({
  "duration": 1409032000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Promyka 1 ",
      "offset": 55
    },
    {
      "val": "02-572",
      "offset": 67
    },
    {
      "val": "Pruszkow",
      "offset": 76
    },
    {
      "val": "United Kingdom",
      "offset": 87
    }
  ],
  "location": "MyStoreSteps.fillCheckOutForm(String,String,String,String)"
});
formatter.result({
  "duration": 1998330900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 40
    }
  ],
  "location": "MyStoreSteps.makeScreenshot(String)"
});
formatter.result({
  "duration": 224766500,
  "status": "passed"
});
});