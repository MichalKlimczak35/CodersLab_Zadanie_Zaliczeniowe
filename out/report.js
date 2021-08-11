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
  "name": "User can select Hummingbird printed sweater",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can see if the product has an discount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can select desired size of the product \u003csize\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can select \u003camount\u003e of products to order",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User can place an order filling necessary information. \u003caddress\u003e , \u003czipCode\u003e , \u003ccity\u003e , \u003ccountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "User makes a screenshot of their order",
  "keyword": "Then "
});
formatter.examples({
  "line": 15,
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
        "country"
      ],
      "line": 16,
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
        "United Kingdom"
      ],
      "line": 17,
      "id": "buyasweater;user-can-buy-a-sweater;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 17,
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
  "name": "User can select Hummingbird printed sweater",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User can see if the product has an discount",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "User can select desired size of the product XL",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User can select 4 of products to order",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User can proceed to checkout",
  "keyword": "And "
});
formatter.step({
  "line": 12,
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
  "line": 13,
  "name": "User makes a screenshot of their order",
  "keyword": "Then "
});
formatter.match({
  "location": "MyStoreSteps.goToMainPage()"
});
formatter.result({
  "duration": 3359589000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.goToLogInSite()"
});
formatter.result({
  "duration": 223957300,
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
  "duration": 681517100,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.searchForProduct()"
});
formatter.result({
  "duration": 242721500,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.checkPromotion()"
});
formatter.result({
  "duration": 16205700,
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
  "duration": 221287400,
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
  "duration": 17005000,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.addToCartAndProceedToCheckOut()"
});
formatter.result({
  "duration": 1329510300,
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
  "duration": 1894393200,
  "status": "passed"
});
formatter.match({
  "location": "MyStoreSteps.makeScreenshot()"
});
formatter.result({
  "duration": 247927900,
  "status": "passed"
});
});