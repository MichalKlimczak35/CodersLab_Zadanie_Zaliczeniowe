$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AddAndDeleteAddress.feature");
formatter.feature({
  "line": 1,
  "name": "AddAndDeleteAddress",
  "description": "",
  "id": "addanddeleteaddress",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "User can add and delete his an address",
  "description": "",
  "id": "addanddeleteaddress;user-can-add-and-delete-his-an-address",
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
  "name": "User logs in using email and password. \u003cemail\u003e , \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User fill the new address form with the following information: \u003callias\u003e , \u003ccompany\u003e , \u003caddress\u003e , \u003czip code\u003e , \u003ccity\u003e , \u003cphone\u003e , \u003ccountry\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User will verify if the address he provided is correct. \u003callias\u003e , \u003ccompany\u003e , \u003caddress\u003e , \u003czip code\u003e , \u003ccity\u003e , \u003cphone\u003e , \u003ccountry\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User can delete the address",
  "keyword": "And "
});
formatter.examples({
  "line": 11,
  "name": "",
  "description": "",
  "id": "addanddeleteaddress;user-can-add-and-delete-his-an-address;",
  "rows": [
    {
      "cells": [
        "email",
        "password",
        "allias",
        "company",
        "address",
        "zip code",
        "city",
        "phone",
        "country"
      ],
      "line": 12,
      "id": "addanddeleteaddress;user-can-add-and-delete-his-an-address;;1"
    },
    {
      "cells": [
        "utfsitumnkgcnazjnc@tbbyt.net",
        "test125678",
        "MK",
        "Coders Lab",
        "Zgoda 13",
        "01-805",
        "Pruszkow",
        "156984777",
        "United Kingdom"
      ],
      "line": 13,
      "id": "addanddeleteaddress;user-can-add-and-delete-his-an-address;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 13,
  "name": "User can add and delete his an address",
  "description": "",
  "id": "addanddeleteaddress;user-can-add-and-delete-his-an-address;;2",
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
  "name": "User logs in using email and password. utfsitumnkgcnazjnc@tbbyt.net , test125678",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "User fill the new address form with the following information: MK , Coders Lab , Zgoda 13 , 01-805 , Pruszkow , 156984777 , United Kingdom",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User will verify if the address he provided is correct. MK , Coders Lab , Zgoda 13 , 01-805 , Pruszkow , 156984777 , United Kingdom",
  "matchedColumns": [
    2,
    3,
    4,
    5,
    6,
    7,
    8
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User can delete the address",
  "keyword": "And "
});
formatter.match({
  "location": "AddAndDeleteAddress.goToMainPage()"
});
formatter.result({
  "duration": 3019073300,
  "status": "passed"
});
formatter.match({
  "location": "AddAndDeleteAddress.goToLogInSite()"
});
formatter.result({
  "duration": 219045700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "utfsitumnkgcnazjnc@tbbyt.net",
      "offset": 39
    },
    {
      "val": "test125678",
      "offset": 70
    }
  ],
  "location": "AddAndDeleteAddress.logIn(String,String)"
});
formatter.result({
  "duration": 639907800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MK",
      "offset": 63
    },
    {
      "val": "Coders Lab",
      "offset": 68
    },
    {
      "val": "Zgoda 13",
      "offset": 81
    },
    {
      "val": "01-805",
      "offset": 92
    },
    {
      "val": "Pruszkow",
      "offset": 101
    },
    {
      "val": "156984777",
      "offset": 112
    },
    {
      "val": "United Kingdom",
      "offset": 124
    }
  ],
  "location": "AddAndDeleteAddress.addNewAddress(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 304578700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MK",
      "offset": 56
    },
    {
      "val": "Coders Lab",
      "offset": 61
    },
    {
      "val": "Zgoda 13",
      "offset": 74
    },
    {
      "val": "01-805",
      "offset": 85
    },
    {
      "val": "Pruszkow",
      "offset": 94
    },
    {
      "val": "156984777",
      "offset": 105
    },
    {
      "val": "United Kingdom",
      "offset": 117
    }
  ],
  "location": "AddAndDeleteAddress.compareAddresses(String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 18254400,
  "status": "passed"
});
formatter.match({
  "location": "AddAndDeleteAddress.deleteAddress()"
});
formatter.result({
  "duration": 205991500,
  "status": "passed"
});
});