'use strict';

/**
 * @ngdoc service
 * @name delaySkipperApp.AIRPORTS
 * @description
 * # AIRPORTS
 * Constant in the delaySkipperApp.
 */
angular.module('delaySkipperApp').service('AIRPORTS', function(){
// source: https://www.npmjs.com/package/airport-timezone
var data = [
  {
    "code": "AAA",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AAA",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AAB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AAC",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AAC",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AAD",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AAE",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AAE",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AAF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AAF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AAG",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AAG",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AAH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAI",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AAI",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AAJ",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AAJ",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AAJ",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AAK",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AAL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAM",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AAN",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AAN",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AAO",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AAO",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AAP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AAQ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AAQ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AAR",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAR",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AAS",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AAT",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "AAT",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "AAU",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "AAU",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "AAV",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AAV",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AAW",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AAX",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AAY",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AAZ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "AAZ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "ABA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "ABA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "ABB",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ABB",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ABB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ABC",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ABC",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ABD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "ABD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "ABE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ABE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ABF",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "ABG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ABI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ABJ",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ABJ",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ABK",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ABK",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ABL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ABL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ABM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABN",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ABN",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ABO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ABO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ABP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABQ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ABQ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ABR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ABR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ABS",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ABT",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ABU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ABU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ABV",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ABV",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ABW",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ABX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ABX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ABY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ABY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ABZ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ABZ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACA",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ACA",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ACB",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACB",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACC",
    "timezone": "Africa/Accra",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ACC",
    "timezone": "Africa/Accra",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ACD",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACE",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACE",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACE",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACH",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ACH",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ACI",
    "timezone": "Europe/Guernsey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACI",
    "timezone": "Europe/Guernsey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ACJ",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ACJ",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ACK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACL",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACL",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACN",
    "timezone": "America/Matamoros",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ACO",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ACP",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "ACR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACS",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "ACS",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "ACT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ACT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ACU",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ACV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ACV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ACX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ACX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ACY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ACZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "ADA",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADA",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADB",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ADC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ADD",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADD",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADE",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADE",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADF",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADG",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADG",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADH",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ADH",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ADI",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "ADI",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "ADJ",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADJ",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ADK",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "ADL",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ADL",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ADM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ADM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ADN",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ADN",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ADO",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ADO",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ADP",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ADP",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ADQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ADQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ADR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ADT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ADT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ADU",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "ADV",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ADV",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADV",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ADW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ADX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ADY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ADY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ADZ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ADZ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AEA",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AEB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AEB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AED",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AEE",
    "timezone": "Africa/Juba",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AEG",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "AEG",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "AEH",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AEI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AEI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AEK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AEK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AEL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AEL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AEO",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AEP",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AER",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AER",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AES",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AES",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AET",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AET",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AEU",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AEU",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AEX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AEX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AEY",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AEY",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AFA",
    "timezone": "America/Argentina/Mendoza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AFA",
    "timezone": "America/Argentina/Mendoza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AFD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AFD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AFF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AFI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AFI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AFK",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AFL",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AFL",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AFN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AFN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AFO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AFO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AFP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AFR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AFR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AFS",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AFS",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AFT",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AFT",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AFW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AFY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AFZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AFZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AGA",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AGA",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AGB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AGD",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AGE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGH",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGH",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGI",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AGI",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AGJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AGK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGM",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "AGM",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "AGN",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AGN",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AGO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AGO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AGP",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGP",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGQ",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AGR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AGR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AGS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AGS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AGT",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AGT",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AGU",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AGU",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AGV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AGV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AGW",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGW",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AGX",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AGY",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGY",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AGZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AGZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AHA",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AHB",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AHB",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AHC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AHC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AHD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AHE",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AHE",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AHF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AHF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AHH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AHH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AHI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AHI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AHJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AHJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AHL",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AHL",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AHM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AHN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AHN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AHO",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AHO",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AHS",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "AHT",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "AHT",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "AHU",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AHU",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AHW",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AHY",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AHY",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AHZ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AHZ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AIA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AIA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AIB",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AIC",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AIC",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AID",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AIE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AIE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AIF",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AIF",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AIG",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AIG",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AIH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AIH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AII",
    "timezone": "Africa/Djibouti",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AIK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AIK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AIL",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AIL",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AIM",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AIN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AIN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AIO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AIO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AIP",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AIR",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AIS",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AIS",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AIT",
    "timezone": "Pacific/Rarotonga",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AIT",
    "timezone": "Pacific/Rarotonga",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AIU",
    "timezone": "Pacific/Rarotonga",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AIU",
    "timezone": "Pacific/Rarotonga",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AIV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AIV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AIW",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "AIW",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "AIY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AIY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AIZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AJA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AJA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AJF",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJF",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJI",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AJJ",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AJJ",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "AJK",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AJK",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AJL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AJL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AJL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AJN",
    "timezone": "Indian/Comoro",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJN",
    "timezone": "Indian/Comoro",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJN",
    "timezone": "Indian/Comoro",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJO",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AJR",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AJR",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AJS",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "AJS",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "AJU",
    "timezone": "America/Noronha",
    "offset": {
      "gmt": -2,
      "dst": -2
    }
  },
  {
    "code": "AJU",
    "timezone": "America/Maceio",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AJY",
    "timezone": "Africa/Niamey",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AKA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AKB",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "AKB",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "AKC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AKD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AKE",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKE",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKF",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AKF",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AKF",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AKG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AKG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AKH",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AKH",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AKI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AKJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AKK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKL",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "AKL",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "AKM",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AKO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AKP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AKQ",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "AKR",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKR",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AKS",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AKS",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AKT",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AKU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AKU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AKV",
    "timezone": "America/Toronto",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AKV",
    "timezone": "America/Toronto",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AKW",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AKW",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AKX",
    "timezone": "Asia/Aqtobe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AKY",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "AKY",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "ALA",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "ALA",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "ALB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ALB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ALC",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALC",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALD",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ALD",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ALE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALF",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALF",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ALG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ALH",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ALH",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ALI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ALJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ALK",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ALL",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALL",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ALM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ALN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALP",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ALP",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ALQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ALQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ALR",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ALR",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ALS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ALS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ALT",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ALU",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ALV",
    "timezone": "Europe/Andorra",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALV",
    "timezone": "Europe/Andorra",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ALW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ALW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ALX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ALY",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ALY",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ALZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ALZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AMA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AMA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AMB",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMC",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AMC",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AMD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AMD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AME",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AME",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AMF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMH",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMI",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AMI",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AMJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AMJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AMK",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AML",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AML",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AMM",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AMM",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AMN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AMO",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AMO",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AMP",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMP",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMQ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AMQ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AMR",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AMS",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AMS",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AMT",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "AMT",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "AMU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AMV",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMV",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AMW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AMX",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AMY",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AMZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ANA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ANB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AND",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ANE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANF",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ANF",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ANG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANH",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "ANI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANJ",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ANJ",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ANK",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ANK",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ANL",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ANL",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ANM",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ANM",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ANM",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ANN",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANN",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANO",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ANP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ANP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ANQ",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ANQ",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ANR",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANR",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANS",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ANS",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ANT",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANT",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANU",
    "timezone": "America/Antigua",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ANU",
    "timezone": "America/Antigua",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ANV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ANW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANX",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANX",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ANY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ANZ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AOA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AOB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AOC",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOC",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOD",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AOE",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AOG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AOG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AOH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AOH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AOI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AOJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AOK",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AOK",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AOL",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AOL",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AOM",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AON",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AOO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AOO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AOP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AOP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AOQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "AOQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "AOR",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AOR",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AOS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AOS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AOT",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOT",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AOU",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "APA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "APB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "APB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "APC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "APC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "APE",
    "timezone": "America/Lima",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "APF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "APF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "APG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "APH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "API",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "API",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "APK",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "APK",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "APL",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "APL",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "APN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "APN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "APO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "APO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "APP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "APQ",
    "timezone": "America/Maceio",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "APQ",
    "timezone": "America/Maceio",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "APR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "APR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "APS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "APT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "APU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "APV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "APW",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "APW",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "APX",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APX",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "APY",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "APZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "APZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AQA",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AQA",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AQB",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "AQB",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "AQG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AQG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AQI",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AQJ",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AQJ",
    "timezone": "Asia/Amman",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AQL",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AQM",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AQP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AQP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AQS",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "AQY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ARA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARB",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ARB",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ARC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ARC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ARD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ARD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ARE",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ARE",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ARF",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ARF",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ARG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARH",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ARH",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ARI",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ARI",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ARJ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ARJ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ARK",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ARK",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ARL",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ARL",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ARM",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ARM",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ARN",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ARN",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ARO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ARP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ARQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ARQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ARR",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ARS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ART",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ART",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ARU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ARV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ARW",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ARW",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ARX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ARY",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ARY",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ARZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ASA",
    "timezone": "Africa/Asmara",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASA",
    "timezone": "Africa/Asmara",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASB",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ASB",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ASC",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ASC",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ASD",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ASD",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ASE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ASE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ASF",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASF",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASG",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ASH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ASH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ASI",
    "timezone": "Atlantic/St_Helena",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ASI",
    "timezone": "Atlantic/St_Helena",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ASJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ASJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ASK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ASK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ASL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASM",
    "timezone": "Africa/Asmara",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASM",
    "timezone": "Africa/Asmara",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASO",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASP",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ASP",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ASQ",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ASQ",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ASR",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ASR",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ASS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ASS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AST",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ASU",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ASU",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ASV",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASV",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ASW",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ASW",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ASX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ASZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ATA",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ATA",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ATB",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ATB",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ATC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATD",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "ATE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATF",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ATF",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ATG",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ATG",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ATH",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ATH",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ATI",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ATI",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ATJ",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ATJ",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ATK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ATK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ATL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATM",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ATM",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ATN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ATN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ATO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ATP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ATP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ATQ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ATQ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ATR",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ATR",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ATS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ATS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ATT",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ATT",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ATU",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "ATV",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ATV",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ATW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATX",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "ATX",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "ATY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ATZ",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ATZ",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AUA",
    "timezone": "America/Aruba",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AUA",
    "timezone": "America/Aruba",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AUB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AUB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AUB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AUC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AUC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AUD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUE",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "AUF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AUF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AUG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AUH",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AUH",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AUI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AUK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "AUL",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AUN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AUO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUQ",
    "timezone": "Pacific/Marquesas",
    "offset": {
      "gmt": -9,
      "dst": -9
    }
  },
  {
    "code": "AUQ",
    "timezone": "Pacific/Marquesas",
    "offset": {
      "gmt": -9,
      "dst": -9
    }
  },
  {
    "code": "AUR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AUR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AUS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUT",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AUT",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AUU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AUW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AUX",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AUX",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "AUY",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AUY",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AUY",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AUZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AVA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AVA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AVB",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVB",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVG",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AVI",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVI",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVJ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVJ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVK",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "AVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVN",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVN",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AVR",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "AVR",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "AVS",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "AVU",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AVV",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "AVW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "AVX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AVX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AVX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "AWA",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AWA",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AWB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AWB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AWD",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AWD",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "AWE",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AWH",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AWK",
    "timezone": "Pacific/Wake",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AWK",
    "timezone": "Pacific/Wake",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "AWM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AWM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AWN",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "AWP",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AWR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AWR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AWZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AWZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AXA",
    "timezone": "America/Anguilla",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AXA",
    "timezone": "America/Anguilla",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AXB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AXC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AXC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AXD",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AXE",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "AXF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AXF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AXG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AXG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AXJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AXJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AXK",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AXK",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AXL",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AXM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AXM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AXN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AXN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AXP",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AXP",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AXR",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AXR",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "AXS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AXT",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AXT",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AXU",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AXU",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "AXV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AXV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AXX",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "AYA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AYE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AYG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "AYI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYK",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "AYK",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "AYL",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AYM",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AYM",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AYO",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AYO",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AYP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AYQ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AYQ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AYR",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AYR",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AYS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AYS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AYT",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AYT",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "AYU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AYU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AYW",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "AYY",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AYZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "AZA",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "AZB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "AZD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AZD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "AZG",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AZG",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AZI",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "AZL",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "AZM",
    "timezone": "Asia/Macau",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AZN",
    "timezone": "Asia/Tashkent",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "AZO",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AZO",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "AZP",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "AZQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "AZR",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AZR",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AZS",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AZS",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "AZT",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "AZZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "AZZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BAA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BAA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BAB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BAC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BAD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BAE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BAE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BAE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BAF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BAG",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAG",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAH",
    "timezone": "Asia/Bahrain",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BAH",
    "timezone": "Asia/Bahrain",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BAI",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BAI",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BAJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BAK",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "BAL",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BAL",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BAM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BAM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BAN",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BAN",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BAO",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BAP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BAQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BAQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BAR",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAR",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAR",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BAS",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BAS",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BAT",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BAT",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BAU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BAU",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BAV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BAW",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BAX",
    "timezone": "Asia/Omsk",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BAX",
    "timezone": "Asia/Omsk",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BAY",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BAY",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BAZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BAZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BBA",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BBA",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BBB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BBE",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BBF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BBG",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "BBG",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "BBH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BBH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BBI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BBI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BBJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BBJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BBK",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BBK",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BBL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BBL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BBL",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BBM",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BBN",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BBN",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BBO",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BBO",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BBP",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BBP",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BBQ",
    "timezone": "America/Antigua",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BBQ",
    "timezone": "America/Antigua",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BBR",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BBS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BBS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BBT",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BBU",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BBV",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BBV",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BBW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BBX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BBX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BBY",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BBY",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BBZ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BBZ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BCA",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCA",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BCD",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BCD",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BCE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BCF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BCF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BCG",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BCH",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BCH",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BCI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BCI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BCJ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BCK",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BCL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BCL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BCL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BCM",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BCM",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BCN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BCN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BCO",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BCP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BCQ",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BCQ",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BCR",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BCS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BCT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BCU",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BCU",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BCV",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BCV",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BCW",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BCX",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BCX",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BCY",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BCZ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BCZ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BDA",
    "timezone": "Atlantic/Bermuda",
    "offset": {
      "gmt": -4,
      "dst": -3
    }
  },
  {
    "code": "BDA",
    "timezone": "Atlantic/Bermuda",
    "offset": {
      "gmt": -4,
      "dst": -3
    }
  },
  {
    "code": "BDA",
    "timezone": "Atlantic/Bermuda",
    "offset": {
      "gmt": -4,
      "dst": -3
    }
  },
  {
    "code": "BDB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BDB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BDC",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BDD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BDE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BDE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BDF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BDG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BDG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BDH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BDI",
    "timezone": "Indian/Mahe",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BDJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BDJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BDK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BDK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BDL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BDL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BDM",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BDN",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BDO",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BDO",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BDP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BDP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BDQ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BDQ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BDR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BDR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BDS",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BDS",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BDT",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BDT",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BDU",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BDU",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BDV",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BDV",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BDW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BDX",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BDY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BDY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BDZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BEA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BEB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BEC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BED",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BED",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BEE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BEE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BEF",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BEF",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BEG",
    "timezone": "Europe/Belgrade",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BEG",
    "timezone": "Europe/Belgrade",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BEH",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BEI",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BEJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BEJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BEK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BEL",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BEL",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BEM",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BEN",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BEN",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BEN",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BEO",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BEP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BEP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BEQ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BEQ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BER",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BER",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BES",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BES",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BET",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BET",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BEU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BEU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BEV",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BEV",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BEW",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BEW",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BEX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BEX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BEY",
    "timezone": "Asia/Beirut",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BEY",
    "timezone": "Asia/Beirut",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BEZ",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "BFA",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BFB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BFC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BFC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BFD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BFE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BFF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BFF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BFG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BFH",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BFI",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BFJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BFJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BFK",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BFL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BFL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BFM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BFN",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BFN",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BFO",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BFO",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BFP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFQ",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BFQ",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BFR",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFR",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BFS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BFT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BFU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BFU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BFV",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BFW",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BFW",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BFX",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BFX",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BGA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BGB",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGC",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BGD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BGD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGG",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BGG",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BGG",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BGH",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BGI",
    "timezone": "America/Barbados",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BGI",
    "timezone": "America/Barbados",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BGJ",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BGK",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BGK",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BGL",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BGM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGN",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BGN",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BGN",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BGO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BGO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BGP",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BGQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BGR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BGS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BGT",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BGT",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BGU",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BGV",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BGW",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BGW",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BGX",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BGY",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BGZ",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BGZ",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BHA",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BHB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BHB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BHC",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHD",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BHE",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "BHE",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "BHF",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BHG",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BHG",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BHH",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BHI",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BHI",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BHJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHK",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHK",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHL",
    "timezone": "America/Tijuana",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BHL",
    "timezone": "America/Tijuana",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BHM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BHM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BHN",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BHO",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHO",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHQ",
    "timezone": "Australia/Broken_Hill",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "BHQ",
    "timezone": "Australia/Broken_Hill",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "BHR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BHS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BHT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BHU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHV",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHW",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BHX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BHX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BHY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BHY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BHZ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BIA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIB",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BIB",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BIC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BID",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BID",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BIE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BIE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BIF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BIG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BIG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BIH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BIH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BII",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "BIJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BIK",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BIK",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BIL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BIL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BIM",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BIM",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BIN",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BIO",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIO",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BIQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BIR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BIR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BIS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BIS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BIT",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BIU",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BIV",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BIV",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BIW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BIX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BIY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BIZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BJA",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BJB",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BJC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BJC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BJD",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BJE",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BJF",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BJF",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BJG",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BJG",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BJH",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BJH",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BJI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BJI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BJJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BJJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BJK",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BJK",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BJL",
    "timezone": "Africa/Banjul",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BJL",
    "timezone": "Africa/Banjul",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BJM",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BJM",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BJN",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BJO",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BJO",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BJP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BJP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BJQ",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BJR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BJR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BJS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BJT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BJT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BJU",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BJV",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BJW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BJW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BJX",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BJX",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BJY",
    "timezone": "Europe/Belgrade",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BJZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BJZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BKA",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BKB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BKC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BKC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BKD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BKD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BKE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BKF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BKF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BKF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BKG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BKH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BKH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BKI",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BKI",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BKJ",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BKK",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BKK",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BKL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BKM",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BKN",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BKN",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BKN",
    "timezone": "Africa/Niamey",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BKO",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BKO",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BKP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BKQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BKQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BKR",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BKR",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BKS",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BKS",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BKT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BKT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BKU",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BKU",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BKW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BKW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BKX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BKX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BKY",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BKY",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BKZ",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BKZ",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BLA",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BLA",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BLB",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BLC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BLC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BLD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLE",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLE",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BLF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BLG",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BLG",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BLH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLI",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLI",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLJ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BLJ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BLK",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BLK",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BLL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BLN",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BLN",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BLO",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BLP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BLP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BLQ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLQ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BLR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BLS",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BLS",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BLT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BLT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BLU",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BLV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BLW",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BLW",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BLX",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLX",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BLY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BLY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BLZ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BLZ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BMA",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BMB",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMB",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BMC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BMD",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BMD",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BME",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BME",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BMF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMG",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BMG",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BMH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BMI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BMI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BMJ",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BMJ",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BMK",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BMK",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BML",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BMM",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMM",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMN",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BMO",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BMO",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BMP",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BMQ",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BMQ",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BMR",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BMR",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BMS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BMS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BMT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BMU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BMU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BMV",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BMV",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BMW",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMW",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BMX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BMX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BMY",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BMY",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BMY",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BMY",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BMZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BNA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BNB",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BNB",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BNC",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BNC",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BND",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BND",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BNE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNF",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BNG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BNG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BNH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BNI",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BNI",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BNJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNK",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BNK",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BNL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BNL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BNM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BNO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BNP",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BNP",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BNQ",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BNR",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BNR",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BNS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BNS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BNT",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BNU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BNV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BNW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BNX",
    "timezone": "Europe/Sarajevo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNX",
    "timezone": "Europe/Sarajevo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BNY",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BNY",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BNZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BNZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BOA",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOA",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOB",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BOB",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BOC",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BOC",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BOD",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOD",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOE",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOE",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BOG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BOG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BOH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BOH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BOI",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BOI",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BOJ",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BOJ",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BOK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BOK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BOL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BOL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BOM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BOM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BON",
    "timezone": "America/Kralendijk",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BON",
    "timezone": "America/Kralendijk",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BOO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOP",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOP",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BOR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BOS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BOT",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BOT",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BOU",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOU",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BOV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BOW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BOW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BOX",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BOX",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BOY",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BOZ",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BOZ",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BPA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BPB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BPC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BPC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BPD",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BPE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPE",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BPE",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BPE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPF",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BPG",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BPG",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BPH",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPH",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPI",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BPK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BPK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BPL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPL",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BPM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BPN",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPN",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BPR",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BPS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BPS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BPU",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BPU",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BPX",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BPX",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BPY",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BQA",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQA",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQD",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BQE",
    "timezone": "Africa/Bissau",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BQE",
    "timezone": "Africa/Bissau",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BQG",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BQH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BQI",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "BQI",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "BQJ",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BQJ",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BQK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BQL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BQL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BQN",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BQN",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BQO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BQO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BQQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BQQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BQS",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BQT",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BQT",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BQU",
    "timezone": "America/St_Vincent",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BQU",
    "timezone": "America/St_Vincent",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BQV",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BQW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BQY",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BQZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRA",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRA",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRB",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRB",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRC",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRC",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BRD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BRE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BRH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BRI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRJ",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BRK",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BRK",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BRL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BRL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BRM",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BRM",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BRN",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRN",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BRO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BRP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BRQ",
    "timezone": "Europe/Prague",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRQ",
    "timezone": "Europe/Prague",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRR",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRR",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BRT",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BRT",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BRU",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRU",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRV",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRV",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BRW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BRX",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BRX",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BRY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BRY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BRZ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BRZ",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BRZ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BSA",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSA",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BSB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BSC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BSD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSE",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSE",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSF",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "BSG",
    "timezone": "Africa/Malabo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSG",
    "timezone": "Africa/Malabo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BSH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BSI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BSJ",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BSJ",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BSK",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSK",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BSM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BSN",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSN",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BSP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BSQ",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BSQ",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BSR",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSR",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSS",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BSS",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BST",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BST",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BSU",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSU",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BSV",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BSW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BSX",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BSX",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BSY",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSY",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BSZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BTA",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BTA",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BTB",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BTC",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BTC",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BTD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BTE",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BTE",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BTF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BTF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BTG",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BTG",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BTH",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BTH",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BTI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BTJ",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BTJ",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BTK",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BTL",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTL",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BTM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BTN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTO",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BTO",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BTP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTQ",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BTQ",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BTR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BTR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BTS",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BTS",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BTT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BTT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BTU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BTU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BTV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BTW",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BTW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BTX",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BTX",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BTY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BTY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BTZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BUA",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BUA",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "BUB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BUB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BUC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BUC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BUD",
    "timezone": "Europe/Budapest",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BUD",
    "timezone": "Europe/Budapest",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BUE",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BUF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BUF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BUG",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BUG",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BUH",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BUI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BUI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BUJ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BUJ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BUK",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BUL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BUL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BUN",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BUN",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "BUO",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BUO",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BUP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BUP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BUQ",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BUQ",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BUR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BUR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BUS",
    "timezone": "Asia/Tbilisi",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BUS",
    "timezone": "Asia/Tbilisi",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BUT",
    "timezone": "Asia/Thimphu",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BUT",
    "timezone": "Asia/Thimphu",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BUT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BUU",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BUV",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BUW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BUW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BUX",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BUX",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BUY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BUY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BUZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BVA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BVB",
    "timezone": "America/Boa_Vista",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVB",
    "timezone": "America/Boa_Vista",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVC",
    "timezone": "Atlantic/Cape_Verde",
    "offset": {
      "gmt": -1,
      "dst": -1
    }
  },
  {
    "code": "BVC",
    "timezone": "Atlantic/Cape_Verde",
    "offset": {
      "gmt": -1,
      "dst": -1
    }
  },
  {
    "code": "BVD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BVE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BVE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BVF",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "BVF",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BVG",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BVG",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BVH",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BVH",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVK",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVL",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVL",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BVM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BVM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BVN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BVN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BVO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BVO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BVP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BVR",
    "timezone": "Atlantic/Cape_Verde",
    "offset": {
      "gmt": -1,
      "dst": -1
    }
  },
  {
    "code": "BVS",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BVS",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "BVU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BVU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BVV",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVV",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVV",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVW",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BVX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BVX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BVY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BVY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BVZ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWA",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BWB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BWC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BWD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BWE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BWE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BWE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BWF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BWF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BWF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BWG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BWG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BWH",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWH",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BWI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BWJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BWK",
    "timezone": "Europe/Zagreb",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BWL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BWL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BWM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BWN",
    "timezone": "Asia/Brunei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWN",
    "timezone": "Asia/Brunei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BWO",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BWO",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BWP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BWQ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BWQ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BWS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BWT",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BWT",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BWU",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BWW",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BWW",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BWW",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BWX",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BWX",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "BWY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BXA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BXA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BXB",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BXB",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BXC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BXD",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BXE",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BXE",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BXF",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BXG",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BXG",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BXH",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BXI",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BXI",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BXJ",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BXK",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BXK",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "BXL",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "BXL",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "BXM",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BXN",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BXN",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BXO",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BXO",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BXP",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BXR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BXR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "BXS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BXS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BXT",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BXT",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BXU",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BXU",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BXV",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BXX",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BXX",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BXZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BYA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "BYB",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BYB",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BYB",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BYB",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "BYC",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BYC",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "BYD",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BYF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BYG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BYH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BYH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BYI",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BYI",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BYJ",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BYJ",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BYK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BYL",
    "timezone": "Africa/Monrovia",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "BYM",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BYM",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BYN",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "BYN",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "BYO",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BYO",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "BYP",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BYP",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BYQ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BYQ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "BYR",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYR",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BYS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BYT",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BYT",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BYU",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYU",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BYV",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "BYW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "BYX",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "BZA",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BZA",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BZB",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BZC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BZC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BZC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "BZD",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BZD",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "BZE",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BZE",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "BZF",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "BZG",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZG",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZH",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BZI",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BZK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BZK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BZL",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BZL",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "BZM",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "BZN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BZN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "BZO",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZO",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "BZQ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "BZS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "BZT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "BZU",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "BZV",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BZV",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "BZY",
    "timezone": "Europe/Chisinau",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "BZZ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "BZZ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CAA",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CAA",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CAB",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CAB",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CAC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CAC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CAD",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAD",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAF",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAF",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAG",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CAG",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CAH",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CAI",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CAI",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CAJ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAJ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CAL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CAM",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAM",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CAN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CAN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CAO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CAO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CAP",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CAQ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CAR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAS",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CAS",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CAT",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CAU",
    "timezone": "America/Recife",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CAU",
    "timezone": "America/Recife",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CAV",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CAV",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CAW",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CAX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CAX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CAY",
    "timezone": "America/Cayenne",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CAY",
    "timezone": "America/Cayenne",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CAZ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CAZ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBA",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CBA",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CBB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBC",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CBD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CBE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CBE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CBF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CBF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CBG",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CBG",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CBH",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CBI",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBI",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBJ",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBJ",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CBK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CBL",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBL",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CBN",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CBN",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CBO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CBO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CBP",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CBP",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CBQ",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CBQ",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CBR",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBR",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CBT",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CBT",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CBU",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CBU",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CBV",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CBW",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CBX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CBY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CBZ",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CCA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CCA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CCB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CCB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CCC",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CCC",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CCC",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CCD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CCE",
    "timezone": "America/Marigot",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CCF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CCF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CCG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CCH",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCH",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CCJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CCJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CCK",
    "timezone": "Indian/Cocos",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CCL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CCL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CCM",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CCN",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "CCO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CCP",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCP",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CCR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CCS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CCS",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CCT",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCT",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CCU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CCU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CCV",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "CCV",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "CCW",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CCW",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CCX",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CCY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CCZ",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CCZ",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDA",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CDB",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CDB",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CDC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CDC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CDD",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CDD",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CDE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CDF",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CDG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CDH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CDH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CDI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CDI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CDJ",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CDJ",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CDK",
    "timezone": "America/Kentucky/Monticello",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CDM",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CDN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDO",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CDP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CDP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CDQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CDQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CDR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CDR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CDS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CDS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CDT",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CDT",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CDU",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CDU",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CDV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CDV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CDW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CDY",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CDZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CDZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CEA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CEB",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CEB",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CEC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CEC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CED",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CED",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CEE",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CEE",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CEF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEG",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CEG",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CEH",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CEH",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CEI",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CEI",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CEJ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CEJ",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CEJ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CEK",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CEK",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CEL",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEL",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CEM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CEN",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CEN",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CEO",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CEO",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CEO",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CEP",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CEP",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CEQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CEQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CER",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CER",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CER",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CES",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CES",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CET",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CET",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CEU",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEU",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEV",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEV",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CEW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CEW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CEX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CEY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CEY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CEZ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CEZ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CFA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CFB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CFB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CFC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CFC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CFD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CFD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CFE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CFE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CFF",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CFF",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CFG",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CFG",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CFH",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CFI",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CFK",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CFK",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CFN",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CFN",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CFO",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CFP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CFQ",
    "timezone": "America/Creston",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CFR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CFR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CFS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CFS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CFT",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CFU",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CFU",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CFV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CFV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CFW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CGA",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CGA",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CGB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CGB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CGC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CGD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CGF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CGG",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CGH",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CGI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CGI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CGJ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CGJ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CGK",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CGM",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGN",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CGN",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CGO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGP",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CGP",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CGQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGR",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CGR",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CGS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CGS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CGT",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CGU",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CGV",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CGY",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGY",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGY",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CGZ",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CGZ",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CHA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHB",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CHB",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CHC",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "CHC",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "CHE",
    "timezone": "Europe/Tallinn",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CHF",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CHH",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CHH",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CHI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CHJ",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CHJ",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CHK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CHK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CHL",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CHL",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CHM",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CHN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CHN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CHO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CHP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CHQ",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CHQ",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CHR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CHS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CHT",
    "timezone": "Pacific/Chatham",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "CHU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CHU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CHV",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CHV",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CHW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CHW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CHW",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CHX",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CHX",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CHY",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "CHY",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "CHZ",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CIA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CIB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CIC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CID",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CID",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CIE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CIF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CIF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CIG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CIG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CIH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CIH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CII",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CII",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CIJ",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CIJ",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CIK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIL",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIL",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CIM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CIN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CIN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CIO",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CIP",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CIP",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CIQ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CIQ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CIR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CIS",
    "timezone": "Pacific/Enderbury",
    "offset": {
      "gmt": 13,
      "dst": 13
    }
  },
  {
    "code": "CIT",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CIU",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CIV",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CIW",
    "timezone": "America/St_Vincent",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CIW",
    "timezone": "America/St_Vincent",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CIX",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CIX",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CIY",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CIY",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CIZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CIZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CJA",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CJA",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CJB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CJB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CJC",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CJC",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CJD",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CJF",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CJF",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CJH",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CJH",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CJI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CJJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CJJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CJL",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CJL",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CJM",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CJM",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CJN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CJS",
    "timezone": "America/Ojinaga",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CJS",
    "timezone": "America/Ojinaga",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CJT",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CJT",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CJU",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CJU",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CKA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CKB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CKC",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CKC",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CKD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CKD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CKE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CKE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CKG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CKG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CKG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CKH",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CKH",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CKI",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CKI",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CKK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CKL",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CKM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKO",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CKR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CKR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CKS",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CKS",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CKT",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "CKT",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "CKU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CKV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CKW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CKW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CKX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CKX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CKY",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CKY",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CKZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CLA",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CLA",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CLB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CLB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CLC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CLD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CLG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CLH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CLI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLJ",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CLJ",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CLK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLN",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CLN",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CLO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CLO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CLP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CLP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CLQ",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLQ",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CLR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CLT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLU",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLU",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLV",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CLV",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CLW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CLX",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CLX",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CLY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CLY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CLZ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CLZ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CMA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMB",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CMB",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CMC",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CMC",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CMD",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CMD",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CME",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CME",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CMF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CMG",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CMH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CMI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CMJ",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CMK",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CML",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CML",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMM",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CMM",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CMN",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CMO",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CMP",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CMQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CMR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CMS",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CMT",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CMU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CMV",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "CMV",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "CMW",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMW",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMX",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMX",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CMY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CMY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CMZ",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CNA",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CNA",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CNB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CNB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CNC",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CND",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CND",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CND",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CNE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNF",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CNG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CNH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CNI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CNI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CNJ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CNJ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CNK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CNK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CNL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CNL",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CNM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CNO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CNP",
    "timezone": "America/Scoresbysund",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "CNP",
    "timezone": "America/Scoresbysund",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "CNP",
    "timezone": "America/Scoresbysund",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "CNQ",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNQ",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNR",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNS",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CNS",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CNT",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNT",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CNU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CNV",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNV",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CNW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CNX",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CNX",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CNY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CNZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CNZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "COA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "COB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "COC",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "COC",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "COD",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "COD",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "COE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "COF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "COG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "COH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "COI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COJ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "COJ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "COK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "COK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "COL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "COM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "COM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CON",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CON",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COO",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "COO",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "COP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COQ",
    "timezone": "Asia/Choibalsan",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "COQ",
    "timezone": "Asia/Choibalsan",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "COR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "COR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "COS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "COS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "COT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "COT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "COU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "COU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "COV",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "COW",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "COX",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COX",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "COY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "COY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "COZ",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CPA",
    "timezone": "Africa/Monrovia",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CPA",
    "timezone": "Africa/Monrovia",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CPB",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CPC",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPC",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPD",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CPD",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CPE",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CPE",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CPF",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CPF",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CPG",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPG",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPH",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CPH",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CPI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CPJ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CPL",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CPL",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CPM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CPN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CPO",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPO",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CPQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CPR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CPR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CPS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CPT",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CPT",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "CPU",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPU",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPV",
    "timezone": "America/Recife",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPV",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPX",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CPX",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CPZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CPZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CQA",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CQA",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CQD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "CQF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CQF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CQF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CQM",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CQM",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CQP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CQS",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CQS",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CQT",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CRA",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CRA",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CRB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CRB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CRC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CRC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CRD",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRD",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CRF",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CRG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CRI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRJ",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CRJ",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CRK",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRK",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRK",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRL",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CRM",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRM",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CRO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CRO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CRP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CRS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRU",
    "timezone": "America/Grenada",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CRV",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CRV",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CRW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CRX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CRY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CRZ",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CRZ",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CSA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CSB",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CSC",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CSD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CSE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CSF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CSF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CSG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CSG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CSH",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CSH",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CSI",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CSI",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CSJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CSJ",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CSK",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CSK",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "CSL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CSL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CSN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CSN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CSO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CSO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CSO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CSP",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CSQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CSQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CSR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CSS",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "CST",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CSU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CSV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CSW",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CSW",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CSX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CSX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CSY",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CSY",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CSZ",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CSZ",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CTA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CTB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CTC",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CTD",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CTE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CTF",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CTF",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CTG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CTG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CTH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTI",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CTI",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CTJ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTJ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CTK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CTL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CTL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CTM",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CTM",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CTN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CTN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CTO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTP",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CTP",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CTQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CTR",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CTS",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "CTT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CTU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CTU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CTW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CTX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CTZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CUA",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CUC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CUD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CUE",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUE",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUF",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CUF",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CUG",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CUG",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CUH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CUH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CUI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUJ",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CUK",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CUK",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CUL",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUL",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUM",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUM",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUN",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUN",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUP",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUP",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CUQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CUR",
    "timezone": "America/Curacao",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUR",
    "timezone": "America/Curacao",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUT",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CUT",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CUU",
    "timezone": "America/Chihuahua",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUU",
    "timezone": "America/Chihuahua",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CUV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CUW",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CUX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CUY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CUY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CUZ",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CUZ",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CVA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CVB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CVC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CVC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CVE",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CVF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CVF",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CVG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CVG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CVH",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CVH",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CVI",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CVI",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CVJ",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CVJ",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CVL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CVM",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CVM",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CVN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CVN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CVO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CVO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CVQ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CVQ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CVR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CVS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CVT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CVT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CVU",
    "timezone": "Atlantic/Azores",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "CWA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CWB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CWB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CWC",
    "timezone": "Europe/Uzhgorod",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CWC",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "CWF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CWG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CWI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CWI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CWL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CWL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "CWO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CWP",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "CWR",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "CWS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CWS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CWT",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CWT",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CWW",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CWW",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CWX",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CWX",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "CXA",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CXB",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "CXC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CXF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CXF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CXH",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CXI",
    "timezone": "Pacific/Kiritimati",
    "offset": {
      "gmt": 14,
      "dst": 14
    }
  },
  {
    "code": "CXJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CXL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CXL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CXN",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "CXO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CXO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CXP",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CXP",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CXQ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CXR",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "CXT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CXT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CXY",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CYA",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CYA",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CYB",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CYB",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CYC",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CYD",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CYE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CYF",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CYF",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CYG",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CYG",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "CYI",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CYL",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CYM",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CYM",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CYO",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CYO",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "CYP",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CYP",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CYR",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CYR",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "CYS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CYS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "CYT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CYU",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CYU",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CYW",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CYW",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CYX",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CYZ",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CZA",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CZA",
    "timezone": "America/Merida",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "CZB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "CZC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZE",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CZE",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "CZF",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZH",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CZH",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "CZJ",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZJ",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CZK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "CZL",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CZL",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "CZM",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZM",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZO",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZP",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "CZS",
    "timezone": "America/Eirunepe",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZS",
    "timezone": "America/Rio_Branco",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "CZU",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZU",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "CZW",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "CZX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CZX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "CZY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "CZZ",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DAA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAC",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DAC",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DAD",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DAD",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DAE",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DAF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DAG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DAH",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DAI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DAJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAK",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DAL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DAM",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DAM",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DAN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DAR",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DAR",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DAS",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DAS",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DAT",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DAT",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DAU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DAV",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "DAV",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "DAW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DAY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DAZ",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DBA",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBB",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DBC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DBC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DBD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBK",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBK",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DBM",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DBN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DBN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DBO",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DBO",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DBP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DBQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DBQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DBS",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DBT",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DBT",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DBU",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBU",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DBV",
    "timezone": "Europe/Zagreb",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DBV",
    "timezone": "Europe/Zagreb",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DBY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DBY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DCA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DCF",
    "timezone": "America/Dominica",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "DCG",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DCI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DCI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DCK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DCM",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DCM",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DCN",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DCP",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DCR",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DCT",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DCT",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DCU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DCY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DCY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DDB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DDC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DDC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DDG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DDG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DDH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DDI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DDM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DDN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DDP",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "DDU",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DDU",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DDV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DEA",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEA",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEB",
    "timezone": "Europe/Budapest",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DEB",
    "timezone": "Europe/Budapest",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DEC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DEC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DED",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEE",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DEE",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DEE",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DEF",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "DEF",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "DEH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DEH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DEI",
    "timezone": "Indian/Mahe",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DEL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEM",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DEN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DEN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DEO",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DEP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DEQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DER",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DES",
    "timezone": "Indian/Mahe",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DET",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DEW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DEX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DEX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DEY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DEY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DEZ",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DEZ",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DFI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DFI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DFP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DFW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DFW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DGA",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DGA",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DGB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DGB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DGC",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DGD",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DGE",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DGE",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DGF",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DGF",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DGG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DGG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DGK",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DGL",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "DGM",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DGM",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DGN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DGN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DGO",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DGO",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DGP",
    "timezone": "Europe/Riga",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DGP",
    "timezone": "Europe/Riga",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DGR",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "DGR",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "DGT",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DGT",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DGU",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DGU",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DGW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DGW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DGX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DHA",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DHA",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DHB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DHB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DHD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DHF",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DHI",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DHI",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DHL",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DHM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DHN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DHN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DHO",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DHR",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DHR",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DHT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DHT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DHU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DHU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DIB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIC",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DIE",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DIE",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DIG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DIG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DIJ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DIK",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DIK",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DIL",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DIL",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DIM",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIM",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIN",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DIN",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DIO",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DIO",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DIP",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIP",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "DIQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "DIR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DIR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DIS",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DIS",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DIU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIV",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIV",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DIW",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIW",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DIY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DIY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DJA",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJA",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DJB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DJE",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJE",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJH",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DJH",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DJJ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DJJ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DJJ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DJM",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJM",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DJN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DJN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DJO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DJO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DJR",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DJU",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DKA",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DKI",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DKI",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DKK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DKK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DKL",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DKR",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DKR",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DKS",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DKS",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DKV",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DKX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DLA",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DLA",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DLB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DLC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DLC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DLD",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DLE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DLE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DLF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DLG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DLG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DLH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DLH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DLI",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DLI",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DLK",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "DLL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DLL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DLM",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DLM",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DLN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DLN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DLO",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DLS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DLS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DLU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DLU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DLV",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DLY",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "DLY",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "DLZ",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "DLZ",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "DMA",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "DMB",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DMD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DMD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DME",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DMK",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DMM",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DMM",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DMN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DMN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DMO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DMO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DMR",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DMS",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DMT",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "DMT",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "DMU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DNA",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DNB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DNC",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DND",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DND",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DNE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DNF",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DNG",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DNH",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DNH",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DNI",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DNK",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DNK",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DNL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DNM",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DNM",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DNN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DNN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DNO",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DNO",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DNP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DNP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DNQ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DNQ",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DNR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DNS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DNS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DNT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DNU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DNV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DNX",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DNZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DNZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DNZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DOA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOB",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DOB",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DOC",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DOC",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DOD",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOD",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOE",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DOF",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DOG",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOG",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOH",
    "timezone": "Asia/Qatar",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOH",
    "timezone": "Asia/Qatar",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DOI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DOK",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DOK",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DOL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DOL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DOM",
    "timezone": "America/Dominica",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "DOM",
    "timezone": "America/Dominica",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "DON",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DON",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DOO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DOP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DOP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DOR",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DOR",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DOS",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "DOU",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "DOU",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "DOV",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DOV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DOV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DOX",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DOY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DOY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DPA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DPE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DPG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DPK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DPL",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DPL",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DPO",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DPO",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DPS",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DPS",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DPT",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DPT",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DPU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DQA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DQA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DQM",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DQM",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DRA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DRA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DRB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DRB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DRC",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DRC",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DRD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DRE",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DRF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DRG",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DRG",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DRH",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DRH",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DRI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DRJ",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DRJ",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DRK",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DRK",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "DRM",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "DRN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DRN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DRO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DRO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DRR",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DRS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DRS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DRT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DRT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DRU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DRU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DRV",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DRV",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DRW",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DRW",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DRX",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DRY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DSA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DSA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DSC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DSC",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DSD",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "DSE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DSG",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DSI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DSK",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DSL",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "DSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DSN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSO",
    "timezone": "Asia/Pyongyang",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSO",
    "timezone": "Asia/Pyongyang",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DSV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DSX",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DSX",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DTA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DTA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DTB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DTB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DTD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DTD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DTE",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DTE",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DTG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DTH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DTI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "DTI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "DTL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DTL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DTM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DTM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DTN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DTR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DTR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DTS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DTT",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DTW",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DTZ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DUA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DUA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DUB",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DUB",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "DUC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DUC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DUD",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "DUD",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "DUE",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "DUF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DUF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DUG",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "DUG",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "DUH",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DUI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DUI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DUJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DUJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DUK",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DUM",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DUM",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "DUN",
    "timezone": "America/Thule",
    "offset": {
      "gmt": -4,
      "dst": -3
    }
  },
  {
    "code": "DUQ",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DUQ",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "DUR",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DUR",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DUS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DUS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DUT",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "DUT",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "DUX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DVD",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DVK",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "DVL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DVL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DVN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DVN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DVO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DVO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DVP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DVR",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DVT",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "DWA",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DWA",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "DWB",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DWB",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DWC",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DWD",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DWF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DWH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DWN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DWO",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DWO",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DWR",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DWS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "DXA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "DXB",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DXB",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "DXD",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DXE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DXE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DXR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DXR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DXX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DYA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DYA",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "DYG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DYG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DYL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DYL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "DYM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "DYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "DYR",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "DYR",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "DYS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DYT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "DYU",
    "timezone": "Asia/Dushanbe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DYU",
    "timezone": "Asia/Dushanbe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "DYW",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DYW",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "DZA",
    "timezone": "Indian/Mayotte",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DZA",
    "timezone": "Indian/Mayotte",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DZA",
    "timezone": "Indian/Mayotte",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "DZI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "DZN",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "DZO",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DZO",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "DZU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EAA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EAA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EAB",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EAE",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "EAE",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "EAL",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EAM",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EAN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EAN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EAP",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EAP",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EAR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EAR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EAS",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EAS",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EAT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EAT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EAU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EAU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EBA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EBB",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBB",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBD",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBD",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EBG",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EBH",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EBJ",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EBJ",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EBL",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBL",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EBM",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EBM",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EBN",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EBO",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EBO",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EBR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "EBS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EBS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EBU",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EBU",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EBW",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EBW",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ECA",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ECC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "ECG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ECH",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ECH",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "ECI",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "ECI",
    "timezone": "America/Managua",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "ECN",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ECN",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ECO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ECP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ECR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ECS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ECU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EDA",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EDA",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EDB",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EDD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EDE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EDF",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EDG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EDI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EDI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EDK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EDL",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EDL",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EDM",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EDM",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EDO",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EDO",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EDQ",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "EDQ",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "EDR",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EDW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EDW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EED",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EED",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EEK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EEK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EEL",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EEM",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EEN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EEN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EEO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EEP",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EER",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EEU",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EFB",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EFD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EFG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EFK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EFK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EFL",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EFL",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EFO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EFT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EFW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "EGA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EGC",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EGC",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EGE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EGE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EGH",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "EGI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EGL",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EGM",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "EGM",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "EGN",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EGN",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EGO",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EGO",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EGP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EGS",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EGS",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EGV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EGV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EGX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EGX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EHD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EHL",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EHL",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EHM",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EHO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EHR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EHT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EHT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EIA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EIB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EIB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EIE",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "EIE",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "EIH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EIH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EIK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EIK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EIL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EIN",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EIN",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EIS",
    "timezone": "America/Tortola",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EIS",
    "timezone": "America/Tortola",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EIY",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EIZ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EJA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EJA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EJH",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EJQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EJT",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EJT",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "EKA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EKA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EKB",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "EKB",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "EKD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EKE",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EKI",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EKI",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EKN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EKO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EKO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EKQ",
    "timezone": "America/Kentucky/Monticello",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EKS",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EKS",
    "timezone": "Asia/Sakhalin",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EKT",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EKT",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EKX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EKX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ELA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "ELB",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ELB",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ELC",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ELD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ELD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ELE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ELE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ELF",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ELF",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ELG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ELG",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ELH",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ELH",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ELI",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ELI",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ELJ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ELK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ELL",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ELL",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ELM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ELM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ELN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ELN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ELO",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ELO",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ELP",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ELP",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ELQ",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ELQ",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ELR",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ELS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ELS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ELT",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ELU",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ELU",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ELU",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ELV",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ELV",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ELW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ELX",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ELX",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ELY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ELY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ELZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EMA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EMB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EMD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EMD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EME",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EME",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EMG",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "EMI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EMK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EMK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EML",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EML",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EMM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EMN",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EMN",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EMO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EMP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EMP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EMS",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EMV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EMX",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EMY",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "ENA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ENA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ENB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENC",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "END",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ENE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENF",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ENF",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ENH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENI",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENI",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENJ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "ENK",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ENK",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ENL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ENL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ENN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ENN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ENO",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ENQ",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "ENS",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ENS",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ENT",
    "timezone": "Pacific/Pohnpei",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "ENU",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ENU",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ENV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ENV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ENW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ENW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ENY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ENY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EOH",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EOI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EOK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EOK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EOR",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EOS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EOZ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EOZ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EPA",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EPG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EPH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EPH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EPI",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "EPK",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EPL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EPL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EPL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EPN",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EPR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EPR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EPS",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EPS",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EPT",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "EPU",
    "timezone": "Europe/Tallinn",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EQS",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EQS",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EQY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ERA",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ERA",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ERB",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ERC",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ERC",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ERD",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ERE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ERF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ERG",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ERG",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ERH",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ERH",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ERI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ERI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ERL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ERL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ERM",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ERM",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ERN",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ERO",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ERO",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ERQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ERS",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "ERT",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "ERU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ERV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ERV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ERY",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ERZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ERZ",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ESA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ESA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ESB",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ESB",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ESC",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ESC",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ESD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ESD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ESE",
    "timezone": "America/Tijuana",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ESE",
    "timezone": "America/Tijuana",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ESF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ESG",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ESG",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ESH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ESH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ESI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ESK",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ESK",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ESL",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ESL",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ESM",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ESM",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ESN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ESO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ESO",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ESP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ESP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ESR",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ESR",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ESS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ESS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ESS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EST",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EST",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ESU",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ESU",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "ESW",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "ETB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ETB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ETD",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "ETE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ETH",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ETH",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ETN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "ETR",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ETR",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ETS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ETS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ETZ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ETZ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ETZ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EUA",
    "timezone": "Pacific/Tongatapu",
    "offset": {
      "gmt": 13,
      "dst": 13
    }
  },
  {
    "code": "EUA",
    "timezone": "Pacific/Tongatapu",
    "offset": {
      "gmt": 13,
      "dst": 13
    }
  },
  {
    "code": "EUC",
    "timezone": "Australia/Eucla",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EUC",
    "timezone": "Australia/Eucla",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EUE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EUE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EUF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EUF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EUG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EUG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EUL",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EUM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EUN",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EUN",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EUO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "EUQ",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EUX",
    "timezone": "America/Kralendijk",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "EVA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "EVB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EVD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EVE",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVE",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVG",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVG",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "EVH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "EVI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EVM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EVN",
    "timezone": "Asia/Yerevan",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "EVN",
    "timezone": "Asia/Yerevan",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "EVV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EVV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EVW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EVW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "EVX",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EVX",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "EWB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EWB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EWD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EWD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EWE",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EWI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EWI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "EWK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EWK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "EWN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EWN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EWO",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EWO",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "EWR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EWY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EWY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EXI",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EXI",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "EXM",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "EXS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EXT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EXT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "EXX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EYE",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EYF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EYK",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "EYK",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "EYL",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "EYP",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "EYR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "EYS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EYS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "EYW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EYW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EZE",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "EZF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EZM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "EZS",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EZS",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "EZV",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FAA",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FAA",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FAB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAB",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAC",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FAC",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FAE",
    "timezone": "Atlantic/Faroe",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAE",
    "timezone": "Atlantic/Faroe",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAE",
    "timezone": "Atlantic/Faroe",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FAG",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FAH",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FAH",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FAI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FAI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FAJ",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FAJ",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FAK",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FAK",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FAL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FAM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FAM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FAN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FAO",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAO",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FAQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FAR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FAR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FAS",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FAT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FAT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FAU",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FAV",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FAV",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FAY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FAY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FAZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "FAZ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "FBA",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FBA",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FBD",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FBD",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FBE",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "FBG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FBK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FBL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FBL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FBM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FBM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FBR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FBS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FBY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FCA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FCA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FCB",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FCB",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FCH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FCM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FCN",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FCO",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FCS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FCT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FCY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FDE",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FDE",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FDF",
    "timezone": "America/Martinique",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FDF",
    "timezone": "America/Martinique",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "FDH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FDH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FDK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FDK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FDO",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FDR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FDR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FDU",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FDU",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FDY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FDY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FEA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FEB",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FEC",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FEG",
    "timezone": "Asia/Tashkent",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FEG",
    "timezone": "Asia/Tashkent",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FEJ",
    "timezone": "America/Rio_Branco",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "FEJ",
    "timezone": "America/Rio_Branco",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "FEK",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FEL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FEL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FEN",
    "timezone": "America/Noronha",
    "offset": {
      "gmt": -2,
      "dst": -2
    }
  },
  {
    "code": "FEP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FEP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FER",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "FES",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FET",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FET",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FEW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FEZ",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FEZ",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FFA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FFA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FFD",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FFD",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FFL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FFL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FFM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FFM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FFO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FFT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FFT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FFU",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FGD",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FGI",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "FGL",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "FGL",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "FGR",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FGU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FGU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FHB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FHU",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "FHZ",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FHZ",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "FIC",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FID",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FID",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FIE",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FIG",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FIG",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FIH",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FIH",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FIK",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FIK",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FIL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FIN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FIN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FIR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FIS",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FIT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FIV",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FIZ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FIZ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FJR",
    "timezone": "Asia/Dubai",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FKB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FKB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FKB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FKH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FKH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FKI",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FKI",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FKJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FKK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FKL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FKN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FKN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FKQ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FKQ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FKS",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FKS",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FLA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "FLA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "FLB",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FLB",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FLC",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FLD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FLE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FLF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FLG",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "FLH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FLH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FLI",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FLI",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FLJ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FLJ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FLL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLM",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "FLM",
    "timezone": "America/Asuncion",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "FLN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "FLN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "FLO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FLP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FLR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FLR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FLS",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FLT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FLU",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FLV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FLW",
    "timezone": "Atlantic/Azores",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "FLX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FLY",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FLZ",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "FLZ",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "FMA",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FMA",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FMC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FME",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "FME",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FMG",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FMH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FMI",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FMI",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FMM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FMM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FMN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FMN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FMO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FMO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FMS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FMU",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FMV",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FMY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FMY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FNA",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FNA",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FNB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FNB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FNC",
    "timezone": "Atlantic/Madeira",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FNC",
    "timezone": "Atlantic/Madeira",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FNE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FNG",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FNG",
    "timezone": "Africa/Ouagadougou",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FNH",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "FNI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FNI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FNJ",
    "timezone": "Asia/Pyongyang",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FNJ",
    "timezone": "Asia/Pyongyang",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FNK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FNL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FNL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FNL",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FNR",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FNT",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FNT",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FNU",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FOA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FOA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FOB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FOB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FOC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FOC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FOC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FOD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FOD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FOE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FOG",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FOG",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FOI",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FOK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FOM",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FOM",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FON",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FON",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FON",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FOO",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FOP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FOP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FOR",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FOR",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FOS",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FOS",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FOT",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FOT",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FOU",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FOU",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FOX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FOY",
    "timezone": "Africa/Monrovia",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "FOZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FPK",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPO",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPO",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FPY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FQD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FQQ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FRA",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRA",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FRB",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "FRC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "FRC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "FRD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FRD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FRE",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "FRE",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "FRF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRH",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRH",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FRJ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRK",
    "timezone": "Indian/Mahe",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FRK",
    "timezone": "Indian/Mahe",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "FRL",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FRM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FRN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FRN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FRO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRO",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRP",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FRQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FRQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FRR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRS",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FRS",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FRS",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "FRT",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FRT",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FRU",
    "timezone": "Asia/Bishkek",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "FRU",
    "timezone": "Asia/Bishkek",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "FRW",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FRW",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FRY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FRZ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FRZ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FSA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FSC",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FSC",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "FSD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FSP",
    "timezone": "America/Miquelon",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "FSP",
    "timezone": "America/Miquelon",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "FSS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FSS",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FST",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FST",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FSU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FSW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FSZ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FSZ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FTA",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "FTE",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FTE",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FTG",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "FTI",
    "timezone": "Pacific/Pago_Pago",
    "offset": {
      "gmt": -11,
      "dst": -11
    }
  },
  {
    "code": "FTI",
    "timezone": "Pacific/Pago_Pago",
    "offset": {
      "gmt": -11,
      "dst": -11
    }
  },
  {
    "code": "FTK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FTK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FTL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FTL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FTU",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "FTW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FTW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FTX",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FTX",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FTY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FUA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "FUB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FUD",
    "timezone": "Asia/Harbin",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FUE",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FUE",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FUG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FUG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FUJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FUJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FUK",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FUK",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "FUL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FUL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "FUM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "FUN",
    "timezone": "Pacific/Funafuti",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "FUN",
    "timezone": "Pacific/Funafuti",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "FUN",
    "timezone": "Pacific/Funafuti",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "FUO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FUO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FUT",
    "timezone": "Pacific/Wallis",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "FUT",
    "timezone": "Pacific/Wallis",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "FVL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FVM",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FVM",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "FVR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FVS",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "FVX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FWA",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FWA",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FWC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FWH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FWL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "FWM",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FWN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FWQ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FWS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FXE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "FXM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FXM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FXO",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FXO",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "FXY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FXY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FYG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FYJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FYJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FYM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FYM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FYN",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FYN",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "FYT",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FYT",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "FYU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FYU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "FYV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FYV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "FZB",
    "timezone": "America/Montevideo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "FZO",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "FZO",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GAA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GAA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GAB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GAB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GAC",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GAD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GAE",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAE",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAF",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAF",
    "timezone": "Africa/Tunis",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GAH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GAI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GAJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GAJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GAK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GAL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GAL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GAM",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GAM",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "GAN",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAN",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAO",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GAO",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GAP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAQ",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GAR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GAS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GAT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GAT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GAU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAV",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GAW",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GAX",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAX",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GAY",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAY",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GAZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GAZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GBA",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GBA",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GBB",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "GBC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GBD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GBD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GBE",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GBE",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GBF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GBH",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GBI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GBI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GBJ",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GBJ",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GBK",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GBK",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GBL",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GBM",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GBM",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GBN",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GBO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GBP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GBQ",
    "timezone": "Asia/Bahrain",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "GBR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GBR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GBS",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GBT",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GBU",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GBV",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GBW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GBW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GBX",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GBZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GCA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GCC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GCC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GCD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GCH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GCH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GCI",
    "timezone": "Europe/Guernsey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GCI",
    "timezone": "Europe/Guernsey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GCJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GCK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GCK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GCM",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GCM",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GCM",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GCN",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GCN",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GCV",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GCW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GCW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GCY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GCY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDA",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GDC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDD",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GDE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GDE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GDG",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GDG",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GDH",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GDI",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GDJ",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GDJ",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GDL",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GDL",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GDM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDN",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GDN",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GDO",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GDO",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GDP",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GDP",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GDQ",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GDQ",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GDT",
    "timezone": "America/Grand_Turk",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GDT",
    "timezone": "America/Grand_Turk",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GDU",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GDU",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GDV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GDV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GDW",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDW",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GDX",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GDX",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GDZ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GDZ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GEA",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GEB",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GEC",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GED",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GED",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GEE",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GEE",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GEF",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GEG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GEG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GEI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GEK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GEL",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GEL",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GEM",
    "timezone": "Africa/Malabo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GEM",
    "timezone": "Africa/Malabo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GEM",
    "timezone": "Africa/Malabo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GEN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GEN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GEO",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GEO",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GER",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GER",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GES",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GES",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GET",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GET",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GEU",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GEV",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GEW",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GEX",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GEX",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GEY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GEY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GFA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GFB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GFD",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GFD",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GFE",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GFF",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GFF",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GFK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GFK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GFL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GFL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GFN",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GFN",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GFO",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GFO",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GFR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GFY",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "GFY",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "GGA",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GGA",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GGC",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GGC",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GGD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GGE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GGG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GGG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GGL",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GGM",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GGM",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GGN",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GGN",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GGO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GGO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GGR",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GGR",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GGS",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GGS",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GGT",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GGT",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GGW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GGW",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GGZ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GHA",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GHB",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GHB",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GHC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GHC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GHD",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GHE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GHE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GHF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GHF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GHM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GHM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GHN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GHT",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GHT",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GHU",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GHU",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GIA",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GIB",
    "timezone": "Europe/Gibraltar",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GIB",
    "timezone": "Europe/Gibraltar",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GIC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GID",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GID",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GIF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GIF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GIG",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GII",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GII",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GIL",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GIL",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GIM",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GIR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GIR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GIS",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GIS",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GIT",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GIT",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GIU",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GIU",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GIY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GIY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GIZ",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GIZ",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GJA",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GJA",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GJB",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GJL",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GJL",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GJM",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GJR",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GJT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GJT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GKA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GKA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GKD",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GKD",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GKE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GKE",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GKH",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GKK",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GKK",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GKL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GKN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GKN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GKO",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GKT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GKT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GKW",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GKY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GLA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GLB",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GLC",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GLD",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GLD",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GLE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLF",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GLF",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GLG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GLH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLI",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GLI",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GLJ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GLK",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GLK",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GLL",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GLL",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GLM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GLN",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GLN",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GLO",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GLP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GLQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GLR",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GLS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GLT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GLU",
    "timezone": "Asia/Thimphu",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GLU",
    "timezone": "Asia/Thimphu",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GLV",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GLV",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GLW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GLX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GLX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GLY",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GLZ",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GLZ",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GMA",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GMA",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GMB",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GMB",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GMC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GMD",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GMD",
    "timezone": "Africa/Casablanca",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GME",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GME",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GMI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GML",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GMM",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GMM",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GMN",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GMN",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GMO",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GMP",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GMR",
    "timezone": "Pacific/Gambier",
    "offset": {
      "gmt": -9,
      "dst": -9
    }
  },
  {
    "code": "GMR",
    "timezone": "Pacific/Gambier",
    "offset": {
      "gmt": -9,
      "dst": -9
    }
  },
  {
    "code": "GMS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GMT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GMU",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GMV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "GMZ",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GNA",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GNA",
    "timezone": "Europe/Minsk",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GNB",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GND",
    "timezone": "America/Grenada",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GNE",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GNF",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GNG",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GNG",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GNI",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GNI",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GNM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GNM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GNN",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GNN",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GNR",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GNR",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GNS",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "GNS",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "GNT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GNT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GNU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GNU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GNV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GNV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GNY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GNZ",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GNZ",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GOA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GOA",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GOB",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOB",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GOE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GOF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GOG",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "GOG",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "GOH",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "GOH",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "GOI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GOI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GOJ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOJ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GOK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GOL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GOL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GOM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GOM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GON",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GON",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GOO",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GOO",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GOP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GOP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GOQ",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GOQ",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GOR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOR",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GOS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GOT",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GOT",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GOU",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GOU",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GOV",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GOV",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GOY",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GOZ",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GPA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GPA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GPB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GPB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GPD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GPD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GPI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GPI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GPL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GPN",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GPO",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GPO",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GPS",
    "timezone": "Pacific/Galapagos",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GPZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GPZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GQQ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GQQ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GRA",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "GRB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRC",
    "timezone": "Africa/Monrovia",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GRD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GRD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GRE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRF",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GRG",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "GRH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GRI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GRJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GRK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GRM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GRN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GRN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GRO",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRO",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRP",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GRP",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GRQ",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRQ",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRR",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GRR",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GRS",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRS",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRT",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GRU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GRV",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GRV",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GRW",
    "timezone": "Atlantic/Azores",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "GRX",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRX",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRY",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GRY",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GRZ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GRZ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GSA",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GSB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSC",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GSC",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GSE",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GSH",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSH",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSI",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "GSJ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GSJ",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GSL",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GSM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GSM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GSN",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "GSN",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "GSO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GSQ",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GSR",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GSS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GSS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GST",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GST",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "GSU",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GSY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GTA",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GTB",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GTB",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GTC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GTC",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GTE",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GTF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GTF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GTG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GTG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GTI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GTI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GTK",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GTN",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GTN",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "GTO",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GTP",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GTP",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GTR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GTS",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "GTS",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "GTT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GTT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GTW",
    "timezone": "Europe/Prague",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GTY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GTZ",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GUA",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GUA",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GUA",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GUB",
    "timezone": "America/Tijuana",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "GUB",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GUC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GUC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GUD",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GUD",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GUE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GUF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GUG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GUH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GUI",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GUJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GUL",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GUL",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GUM",
    "timezone": "Pacific/Guam",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUM",
    "timezone": "Pacific/Guam",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "GUO",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "GUP",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GUP",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GUQ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GUQ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GUR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUS",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GUT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GUT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GUU",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "GUV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GUW",
    "timezone": "Asia/Oral",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GUW",
    "timezone": "Asia/Oral",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GUX",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GUX",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GUY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GUY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GUZ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GVA",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GVA",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GVE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GVI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GVI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GVN",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GVP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GVP",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "GVR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GVR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GVT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GVT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GVW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GVW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GVX",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GVX",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GWA",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GWA",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "GWD",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GWD",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GWE",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GWE",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GWL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GWL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "GWN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GWO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GWO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GWS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GWT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GWT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GWV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GWV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "GWY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GWY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "GXF",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "GXG",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GXG",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GXH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GXH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GXQ",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "GXX",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GXX",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "GXY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GXY",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "GYA",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "GYD",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "GYE",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GYE",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "GYG",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GYG",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "GYI",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "GYL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYM",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GYM",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GYN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GYN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "GYP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GYP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "GYR",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GYR",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "GYS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "GYY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GYY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GZA",
    "timezone": "Asia/Gaza",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GZH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "GZI",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "GZI",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "GZM",
    "timezone": "Europe/Malta",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "GZO",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GZO",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "GZP",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GZT",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GZT",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "GZW",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "GZW",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "HAA",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAA",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HAB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HAC",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HAC",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HAD",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAD",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAE",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HAF",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HAG",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAH",
    "timezone": "Indian/Comoro",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HAI",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAI",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAK",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HAK",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HAL",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "HAM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAM",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAN",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HAN",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HAO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HAQ",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HAQ",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HAR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAS",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HAS",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HAT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HAU",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAU",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HAV",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAV",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HAW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HAW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HAX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HAY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HAZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HBA",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HBA",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HBB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HBC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HBD",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HBE",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HBH",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HBI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HBI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HBK",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HBL",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HBM",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HBM",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HBN",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HBO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HBO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HBP",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HBR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HBT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HBU",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "HBU",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "HBV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HBX",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HBX",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HBZ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HCA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HCA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HCB",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HCC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HCC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HCD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HCJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCM",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HCN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCQ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCQ",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HCR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HCR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HCW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HDA",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HDB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HDB",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HDD",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HDD",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HDE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HDE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HDF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HDG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HDG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HDH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HDM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "HDN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HDN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HDO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HDQ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HDR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "HDS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HDS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HDY",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HDY",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HEA",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "HEA",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "HEB",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HEB",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HEC",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HED",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HEE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HEH",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HEH",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HEI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HEI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HEI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HEK",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HEK",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HEL",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HEL",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HEM",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HEN",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HEO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HEO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HER",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HER",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HES",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HES",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HET",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HET",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HEV",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HEV",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HEX",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HEY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HEZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HEZ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HFA",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HFA",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HFD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HFD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HFE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HFE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HFE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HFF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HFN",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HFS",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HFS",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HFT",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HFT",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HGA",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HGD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HGD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HGH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HGH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HGI",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HGI",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HGL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HGL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HGN",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HGN",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HGO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HGO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HGR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HGR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HGS",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HGT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HGU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HGU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HGZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HHA",
    "timezone": "Asia/Chongqing",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HHE",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HHH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HHI",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HHK",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HHN",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HHP",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HHQ",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HHQ",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HHR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HHS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HHZ",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HHZ",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HIA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HIA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HIA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HIB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HIB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HID",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HIE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HIF",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HIG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIG",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HIH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HII",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HII",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HIJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HIJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HIK",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HIL",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HIM",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HIM",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HIM",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HIN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HIN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HIO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HIP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIR",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "HIR",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "HIS",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIS",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIT",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HIW",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HIX",
    "timezone": "Pacific/Marquesas",
    "offset": {
      "gmt": -9,
      "dst": -9
    }
  },
  {
    "code": "HJH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HJJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HJO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HJR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HJT",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "HJT",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "HKA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HKB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HKB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HKC",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HKD",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HKD",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HKG",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HKG",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HKK",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "HKK",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "HKN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HKN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HKP",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HKS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HKT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HKT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HKV",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HKV",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HKV",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HKY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLA",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HLB",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLB",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HLC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HLD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HLD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HLF",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HLG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HLH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HLI",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HLI",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HLL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HLM",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLM",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HLN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HLN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HLO",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HLP",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HLR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HLS",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HLS",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HLT",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HLU",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "HLV",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HLV",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HLW",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HLW",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HLY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HLZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "HLZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "HMA",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HMA",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HMB",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HMB",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HME",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "HME",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "HMG",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HMI",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HMI",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HMJ",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HMN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HMO",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HMO",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "HMR",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HMR",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HMS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HMV",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HNA",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HNA",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HNB",
    "timezone": "America/Indiana/Vincennes",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HNB",
    "timezone": "America/Indiana/Vincennes",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HNC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HNC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HND",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HNE",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNE",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNG",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "HNH",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNH",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HNK",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HNL",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HNL",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HNM",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HNN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HNN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HNO",
    "timezone": "Europe/Podgorica",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HNS",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNS",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HNX",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HNY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HNY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HNY",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HNZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HOA",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HOA",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HOB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HOB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HOC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HOD",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HOE",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HOE",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HOF",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HOG",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HOG",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HOH",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOH",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOH",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOI",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HOI",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HOK",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HOL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HOM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HOM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HON",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HON",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOO",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HOO",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HOO",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HOP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOQ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOQ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOR",
    "timezone": "Atlantic/Azores",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "HOR",
    "timezone": "Atlantic/Azores",
    "offset": {
      "gmt": -1,
      "dst": 0
    }
  },
  {
    "code": "HOS",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "HOT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HOV",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOV",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HOW",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "HOX",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HOX",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HOY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HPA",
    "timezone": "Pacific/Tongatapu",
    "offset": {
      "gmt": 13,
      "dst": 13
    }
  },
  {
    "code": "HPA",
    "timezone": "Pacific/Tongatapu",
    "offset": {
      "gmt": 13,
      "dst": 13
    }
  },
  {
    "code": "HPB",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HPB",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HPE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HPG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HPG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HPG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HPH",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HPH",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HPN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HPN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HPP",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HPV",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HPY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HPY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HQM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HQM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HRA",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HRB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HRB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HRC",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HRD",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HRE",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRE",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRG",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRG",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRI",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HRI",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HRJ",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HRK",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HRK",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HRL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HRL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HRM",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "HRN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HRO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HRO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HRR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "HRS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRS",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HRT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HRT",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HRY",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HRZ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "HSA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HSB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "HSC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSG",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HSG",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HSH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HSI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HSI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HSK",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HSK",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HSL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HSL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HSM",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HSM",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HSN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HSP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HSS",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HSS",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HST",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HST",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HSV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HSV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HSZ",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HSZ",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HTA",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HTA",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HTB",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HTB",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HTG",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HTG",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HTH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HTI",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HTI",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HTL",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTM",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "HTM",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "HTN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HTN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HTO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTR",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HTR",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HTS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTT",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HTT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HTU",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HTU",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HTV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HTV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HTW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HTY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HTY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HTZ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "HTZ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "HUA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "HUC",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HUC",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HUD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HUE",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HUF",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HUF",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HUG",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "HUG",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "HUH",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HUH",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HUH",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "HUI",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HUI",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "HUJ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUJ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUK",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HUK",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HUL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUM",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HUN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HUQ",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HUS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HUS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HUT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUU",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "HUV",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HUV",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HUW",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HUW",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "HUX",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUX",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HUY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HUZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HUZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HVA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "HVB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HVB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HVD",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "HVD",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "HVE",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HVG",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HVG",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HVK",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HVM",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HVN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HVN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HVR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HVR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HVS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HVS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HVT",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HVZ",
    "timezone": "Europe/Budapest",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HWA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HWD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "HWI",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HWK",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "HWK",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "HWN",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "HWO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HWO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HXD",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HXD",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "HXX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HXX",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "HYA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HYA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HYC",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "HYD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HYD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "HYF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "HYG",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HYG",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HYL",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HYL",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "HYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HYN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HYR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HYS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HYV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "HYX",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HZB",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HZB",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "HZC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZE",
    "timezone": "America/North_Dakota/Beulah",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HZG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "HZK",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "HZL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HZL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "HZP",
    "timezone": "America/Edmonton",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HZP",
    "timezone": "America/Edmonton",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "HZR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "HZV",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IAA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "IAA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "IAB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IAD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IAG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IAG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IAH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IAM",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IAN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IAN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IAO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IAO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IAQ",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IAR",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IAR",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IAR",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IAS",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IAS",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IAT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IAU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IAU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IBA",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IBA",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IBB",
    "timezone": "Pacific/Galapagos",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "IBE",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IBI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IBL",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IBM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "IBO",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "IBP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IBP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IBR",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IBR",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IBT",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IBZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IBZ",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ICA",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ICA",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ICI",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ICI",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "ICK",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ICK",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ICL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ICL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ICN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ICO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ICR",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ICR",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ICS",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "ICT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ICT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ICY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IDA",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "IDA",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "IDB",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IDB",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IDC",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IDF",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IDF",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IDG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IDH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IDI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IDI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IDK",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "IDN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IDO",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IDO",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IDP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IDP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IDR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IDR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IDY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IEG",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IEG",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IEG",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IEJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IEJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IEM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IES",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IES",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IEV",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IEV",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IFA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IFF",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IFH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IFJ",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "IFJ",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "IFL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IFL",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IFN",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IFN",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IFO",
    "timezone": "Europe/Uzhgorod",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IFP",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "IFP",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "IFR",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IFU",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IFU",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IGA",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IGA",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IGA",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IGB",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IGB",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IGC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IGD",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IGD",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IGE",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IGG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IGG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IGH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IGH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IGL",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IGM",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "IGM",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "IGN",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IGN",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IGO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IGR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IGR",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IGS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IGS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IGS",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IGT",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IGT",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IGU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IGU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IHA",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IHC",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IHC",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IHN",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IHN",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IHO",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IHO",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IHR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IHU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IHU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IIA",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "IIA",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "IIL",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IIN",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IIS",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IIS",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IJK",
    "timezone": "Europe/Samara",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "IJK",
    "timezone": "Europe/Samara",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "IJU",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IJX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IKA",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "IKB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IKE",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IKE",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IKI",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IKK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IKK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IKL",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IKL",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IKO",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "IKO",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "IKP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IKS",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IKS",
    "timezone": "Asia/Yakutsk",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IKT",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IKT",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IKV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILA",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ILB",
    "timezone": "America/Campo_Grande",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "ILD",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ILD",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ILE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILF",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILF",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILG",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILH",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ILI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ILI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ILK",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ILK",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ILL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ILM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ILO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ILO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "ILP",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "ILP",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "ILQ",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ILQ",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ILR",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ILR",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ILU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ILX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ILY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ILZ",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ILZ",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IMA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IMB",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "IMB",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "IMD",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IMF",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IMF",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IMG",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "IMI",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "IMK",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IMK",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IML",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "IML",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "IMM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IMM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IMN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IMO",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IMO",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IMP",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IMP",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IMR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IMT",
    "timezone": "America/Menominee",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "INA",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "INA",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "INB",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "INB",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "INB",
    "timezone": "America/Belize",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "INC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "INC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IND",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IND",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "INE",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "INF",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ING",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "INH",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "INH",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "INI",
    "timezone": "Europe/Belgrade",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "INJ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "INJ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "INK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "INK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "INL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "INL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "INM",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "INM",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "INN",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "INN",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "INO",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "INO",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "INP",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "INQ",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "INQ",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "INR",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "INS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "INS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "INT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "INU",
    "timezone": "Pacific/Nauru",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "INV",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "INV",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "INW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "INW",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "INX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "INX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "INY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "INY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "INZ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "INZ",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IOA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IOA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IOB",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IOK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IOM",
    "timezone": "Europe/Isle_of_Man",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "IOM",
    "timezone": "Europe/Isle_of_Man",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ION",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "ION",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IOP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IOQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IOQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IOR",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "IOS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IOS",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IOT",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IOT",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IOU",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IOW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IOW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IPA",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IPA",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IPC",
    "timezone": "Pacific/Easter",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IPE",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IPE",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IPG",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "IPG",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "IPH",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IPH",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IPI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IPI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IPL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IPL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IPN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IPN",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IPR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "IPT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IPT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IPU",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IPW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "IQA",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IQM",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "IQM",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "IQN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "IQQ",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IQQ",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IQT",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IQT",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IRA",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IRA",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "IRB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IRC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IRD",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "IRD",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "IRE",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IRG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IRI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IRI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IRJ",
    "timezone": "America/Argentina/La_Rioja",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IRJ",
    "timezone": "America/Argentina/La_Rioja",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "IRK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IRM",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IRM",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IRN",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "IRO",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IRO",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "IRP",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IRP",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "IRR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IRS",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IRS",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IRT",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IRU",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "IRZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "IRZ",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ISA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ISA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ISB",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISB",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISC",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ISC",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "ISD",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ISE",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ISE",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ISG",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ISG",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ISH",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ISI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ISI",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ISJ",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ISJ",
    "timezone": "America/Cancun",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "ISK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "ISL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "ISM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ISN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ISN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ISO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ISP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ISP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ISQ",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ISR",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "ISS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "IST",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IST",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "ISU",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "ISW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ISW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "ITA",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ITA",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ITB",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "ITB",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ITE",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ITH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "ITI",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ITI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "ITK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "ITM",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "ITN",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ITN",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "ITO",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "ITO",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "ITP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITQ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "ITT",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "ITU",
    "timezone": "Asia/Magadan",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IUE",
    "timezone": "Pacific/Niue",
    "offset": {
      "gmt": -11,
      "dst": -11
    }
  },
  {
    "code": "IUI",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IUI",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "IUL",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IUM",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IUS",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "IVA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IVC",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "IVC",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "IVG",
    "timezone": "Europe/Podgorica",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IVG",
    "timezone": "Europe/Podgorica",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "IVH",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IVI",
    "timezone": "America/Panama",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "IVL",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IVL",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IVO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "IVR",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "IVR",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "IVW",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWA",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IWA",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "IWD",
    "timezone": "America/Menominee",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IWJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWK",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWK",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWO",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWO",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IWS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "IXA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXC",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXC",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXD",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXE",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXE",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXG",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXG",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXJ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXK",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXL",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXM",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXN",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXN",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXP",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXQ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXS",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXS",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXT",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXV",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXV",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXW",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXW",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXY",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXZ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IXZ",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "IYK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IYK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "IYS",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "IZA",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "IZM",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "IZO",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IZO",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "IZT",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JAA",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "JAB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JAB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JAC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JAC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JAD",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JAE",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JAE",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JAF",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAF",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAG",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAG",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAH",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JAH",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JAI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAI",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JAJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JAK",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JAK",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JAL",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JAL",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JAM",
    "timezone": "Europe/Sofia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JAN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JAN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JAO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JAP",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "JAP",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "JAP",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "JAQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JAR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "JAS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JAT",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "JAU",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JAU",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JAV",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JAV",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JAX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JAX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JBB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "JBB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "JBC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JBD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JBK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JBP",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JBQ",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "JBR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JBR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JBS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JBT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JCA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JCB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JCB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JCC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JCD",
    "timezone": "America/St_Thomas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "JCE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JCH",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JCH",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JCI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JCJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JCJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JCK",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JCK",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JCM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JCM",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JCN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JCN",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JCO",
    "timezone": "Europe/Malta",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JCR",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "JCR",
    "timezone": "America/Santarem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JCT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JCU",
    "timezone": "Africa/Ceuta",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JCU",
    "timezone": "Africa/Ceuta",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JCX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JCY",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JDA",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JDB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDF",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JDF",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JDG",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JDH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JDH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JDK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JDN",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JDO",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JDP",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JDR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JDR",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JDT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDX",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JDY",
    "timezone": "America/Boise",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JDZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JDZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JEA",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JEA",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JEC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JED",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JED",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JEE",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JEE",
    "timezone": "America/Port-au-Prince",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JEF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JEF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JEG",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JEG",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JEJ",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "JEJ",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "JEK",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "JEM",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JEQ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JER",
    "timezone": "Europe/Jersey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "JER",
    "timezone": "Europe/Jersey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "JER",
    "timezone": "Europe/Jersey",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "JEV",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JFK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JFM",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JFN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JFR",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JFR",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JGA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JGB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JGB",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JGC",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "JGD",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGE",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JGL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JGN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGO",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JGO",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JGQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JGR",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JGR",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JGS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JGX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JHB",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JHB",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JHC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JHE",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JHL",
    "timezone": "America/Edmonton",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JHM",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JHM",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JHQ",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JHS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JHS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JHW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JHW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JHY",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JIA",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "JIB",
    "timezone": "Africa/Djibouti",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIB",
    "timezone": "Africa/Djibouti",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIC",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JID",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JIJ",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIJ",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIJ",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIK",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JIL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIM",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIN",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIN",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JIO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JIP",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JIP",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JIQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JIR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JIU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JIW",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JJA",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "JJG",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JJG",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JJI",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JJM",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JJN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JJU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JJU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JKG",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JKH",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JKL",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JKL",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JKR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JKR",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JKT",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "JKV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JKV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JLA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JLA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JLB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JLD",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JLH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JLL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JLN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JLN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JLP",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JLR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JLR",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JLS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JLS",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JLX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JMA",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JMB",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "JMB",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "JMC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JMC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JMH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JMK",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JMK",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JMM",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JMN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JMO",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JMO",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JMS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JMS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JMU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JMU",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JMY",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JNA",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JNB",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "JNB",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "JNG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JNG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JNH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JNI",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JNI",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JNJ",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "JNJ",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "JNN",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JNN",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JNP",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JNS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JNS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JNU",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JNU",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JNX",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JNX",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JNZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JNZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JOC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JOE",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JOG",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "JOG",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "JOH",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "JOI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JOI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JOJ",
    "timezone": "America/Cambridge_Bay",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "JOK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JOK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JOL",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JOM",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JON",
    "timezone": "Pacific/Johnston",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JON",
    "timezone": "Pacific/Johnston",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JOP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JOR",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JOS",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "JOS",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "JOT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JPA",
    "timezone": "America/Recife",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JPA",
    "timezone": "America/Fortaleza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JPD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JPN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JPR",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "JPR",
    "timezone": "America/Porto_Velho",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "JPT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JPU",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JQA",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JQA",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JQE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JQE",
    "timezone": "America/Panama",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JQF",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JQJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JQJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JQO",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JRA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JRB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JRC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JRD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JRE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JRF",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JRF",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "JRH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JRK",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JRK",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JRN",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "JRN",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "JRO",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JRO",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JRS",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JRS",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JSA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JSD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JSG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JSH",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSH",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSI",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSI",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSI",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JSK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JSL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JSM",
    "timezone": "America/Argentina/Catamarca",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JSN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JSO",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JSO",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JSP",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JSP",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "JSR",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "JSR",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "JSS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JST",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JST",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JSU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JSU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JSY",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JTC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JTC",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JTI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JTI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "JTO",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JTR",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JTR",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JTY",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JUA",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "JUA",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "JUB",
    "timezone": "Africa/Juba",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JUB",
    "timezone": "Africa/Juba",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JUC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "JUH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JUH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JUI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JUI",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "JUJ",
    "timezone": "America/Argentina/Jujuy",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JUJ",
    "timezone": "America/Argentina/Jujuy",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "JUK",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUK",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUL",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JUL",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JUM",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JUM",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "JUN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JUN",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "JUO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JUO",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "JUP",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JUR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JUR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JUT",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "JUU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUV",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUV",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "JUZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JUZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JVA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JVA",
    "timezone": "Indian/Antananarivo",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "JVI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JVL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "JVM",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "JWA",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "JWC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JWH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JWL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "JWN",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "JXA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JXA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JXN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JXN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JXS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JXS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JYO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "JYQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JYQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JYQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JYR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "JYV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JYV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "JZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "JZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KAA",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAA",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAB",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAB",
    "timezone": "Africa/Harare",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAC",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAD",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KAD",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KAE",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KAE",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KAF",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KAG",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KAH",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KAI",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KAJ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAJ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAK",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KAL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KAL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KAM",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "KAN",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KAN",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KAO",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAO",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAP",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAP",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KAQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KAR",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KAR",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KAS",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "KAS",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "KAT",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KAT",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KAU",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAU",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KAV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KAW",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KAW",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KAX",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KAX",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KAY",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KAZ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KAZ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KBA",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KBA",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KBB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KBC",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KBD",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KBE",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "KBF",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KBG",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KBG",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KBH",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KBH",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KBI",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KBI",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KBJ",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KBK",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KBL",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KBL",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KBM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KBM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KBN",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBN",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBP",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KBQ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBQ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KBR",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KBR",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KBS",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KBS",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KBT",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KBU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KBU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KBV",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KBV",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KBW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KBX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KBY",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KBY",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KBZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KBZ",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KCA",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KCA",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KCB",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "KCC",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCC",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCD",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KCE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KCE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KCF",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KCF",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KCG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCH",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KCH",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KCI",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KCI",
    "timezone": "Asia/Dili",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KCJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KCK",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KCK",
    "timezone": "Asia/Irkutsk",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KCL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCM",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KCN",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "KCN",
    "timezone": "America/Adak",
    "offset": {
      "gmt": -10,
      "dst": -9
    }
  },
  {
    "code": "KCO",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KCO",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KCP",
    "timezone": "Europe/Uzhgorod",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KCQ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KCS",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KCT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KCT",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KCU",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KCU",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KCZ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KCZ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KDA",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KDA",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KDB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KDC",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KDC",
    "timezone": "Africa/Porto-Novo",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KDD",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDF",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KDH",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KDH",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KDI",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KDI",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KDJ",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KDK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KDL",
    "timezone": "Europe/Tallinn",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KDM",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDM",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDN",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KDO",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDO",
    "timezone": "Indian/Maldives",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDS",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KDT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KDU",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDV",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KDV",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KDV",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KDW",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDW",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDX",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KDX",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KDY",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDY",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDY",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KDY",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KDZ",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KEA",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KEB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KEB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KEC",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KEC",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KED",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KEE",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KEE",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KEF",
    "timezone": "Atlantic/Reykjavik",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KEG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KEG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KEH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KEH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KEI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KEJ",
    "timezone": "Asia/Novokuznetsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KEJ",
    "timezone": "Asia/Novokuznetsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KEK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KEK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KEL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KEL",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KEM",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KEN",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KEN",
    "timezone": "Africa/Freetown",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KEO",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KEP",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KEQ",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KER",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KER",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KES",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KET",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KEU",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KEV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KEV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KEV",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KEW",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KEX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KEX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KEY",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KEZ",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KFA",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KFA",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KFE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KFE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KFG",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KFI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KFP",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KFP",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KFS",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KFS",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KGA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KGC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KGD",
    "timezone": "Europe/Kaliningrad",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGD",
    "timezone": "Europe/Kaliningrad",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGE",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KGE",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KGF",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KGG",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KGH",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGI",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGI",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGJ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGJ",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KGK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KGL",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGL",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KGM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGN",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KGN",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KGO",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KGO",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KGP",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KGP",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KGQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KGQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KGR",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KGS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KGS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KGT",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGT",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KGV",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KGW",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KGX",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KGY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGY",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KGZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KHA",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHA",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHC",
    "timezone": "Europe/Simferopol",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KHC",
    "timezone": "Europe/Simferopol",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KHD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHD",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHE",
    "timezone": "Europe/Simferopol",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KHE",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHH",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHH",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHI",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KHI",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KHJ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KHJ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KHK",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHM",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KHN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KHO",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KHQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KHQ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KHR",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "KHR",
    "timezone": "Asia/Ulaanbaatar",
    "offset": {
      "gmt": 8,
      "dst": 9
    }
  },
  {
    "code": "KHS",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KHT",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KHU",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KHU",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KHV",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KHV",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KHW",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KHW",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KHX",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KHX",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KHY",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KHZ",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KIA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KIB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KIC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KIC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KID",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KID",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KIE",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KIE",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KIF",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KIF",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KIG",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KIH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KII",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KIJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KIJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KIK",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIK",
    "timezone": "Asia/Baghdad",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIL",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIL",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIM",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIM",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIN",
    "timezone": "America/Jamaica",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "KIN",
    "timezone": "America/Jamaica",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "KIO",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KIP",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KIQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KIR",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KIS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIS",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIT",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KIU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIV",
    "timezone": "Europe/Chisinau",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KIV",
    "timezone": "Europe/Chisinau",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KIW",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIW",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KIX",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KIY",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIY",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KIZ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KJA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KJA",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KJH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KJH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KJH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KJI",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KJI",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KJK",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KJK",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KJN",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KJP",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KJR",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KJU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KKA",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKC",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KKC",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KKD",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KKD",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KKE",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KKE",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KKF",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKG",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KKH",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKH",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KKJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KKK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKM",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KKM",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KKN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KKN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KKO",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KKO",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KKP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KKQ",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KKR",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KKR",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KKT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KKT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KKU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KKW",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KKX",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KKY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KKY",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KKZ",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KLA",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLB",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KLB",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KLC",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KLC",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KLD",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLD",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLE",
    "timezone": "Africa/Douala",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KLF",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLF",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLG",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KLI",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KLJ",
    "timezone": "Europe/Vilnius",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KLK",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLK",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KLL",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KLN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KLO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KLP",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLQ",
    "timezone": "Asia/Pontianak",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KLR",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLR",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KLT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLT",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLU",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLU",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLV",
    "timezone": "Europe/Prague",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLV",
    "timezone": "Europe/Prague",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KLW",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLW",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KLX",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KLY",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KLY",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KLZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KLZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMC",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMC",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMD",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KME",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KME",
    "timezone": "Africa/Kigali",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMG",
    "timezone": "Asia/Chongqing",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "KMG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KMG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KMH",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMH",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMI",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMI",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMK",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KMK",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KML",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMM",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMN",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMO",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KMO",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KMP",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "KMP",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "KMQ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMQ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KMR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KMS",
    "timezone": "Africa/Accra",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KMS",
    "timezone": "Africa/Accra",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KMT",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KMU",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMU",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMV",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KMV",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KMW",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMW",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMX",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMX",
    "timezone": "Asia/Riyadh",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KMY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KMY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KMZ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KMZ",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KNA",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "KNB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "KNB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "KNC",
    "timezone": "Asia/Harbin",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KND",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KND",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KNE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KNF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KNF",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KNG",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KNG",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KNH",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNH",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNH",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNI",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNI",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNJ",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KNK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KNK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KNL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KNM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KNM",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KNN",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KNN",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KNO",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KNP",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KNP",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KNQ",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KNR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KNS",
    "timezone": "Australia/Currie",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KNS",
    "timezone": "Australia/Currie",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KNT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KNT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "KNU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KNU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KNV",
    "timezone": "America/Vancouver",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KNW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KNW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KNX",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNX",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KNY",
    "timezone": "America/Regina",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "KNZ",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KNZ",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KOA",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KOA",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KOC",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KOC",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KOD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOD",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOF",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KOF",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KOG",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KOI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KOI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KOJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KOJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KOK",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KOK",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KOK",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KOL",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KOM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KOM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KON",
    "timezone": "Asia/Ho_Chi_Minh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KOO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KOP",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOP",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOQ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "KOR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KOR",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KOS",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOS",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KOT",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KOT",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KOU",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KOU",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KOV",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KOV",
    "timezone": "Asia/Almaty",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KOW",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOW",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KOX",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KOY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KOY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KOZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KOZ",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPB",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPC",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPC",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "KPE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPG",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KPH",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPI",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KPI",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KPK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPN",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPN",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPO",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KPO",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KPP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KPR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KPS",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KPT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KPT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "KPV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPW",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KPW",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KPY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KPY",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KQA",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KQA",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KQB",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KQL",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KQR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KQR",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KQT",
    "timezone": "Asia/Dushanbe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KRA",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KRA",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KRB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRB",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRC",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KRC",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KRD",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KRE",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KRE",
    "timezone": "Africa/Bujumbura",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KRF",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRG",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KRH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KRH",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KRI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRK",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRK",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRL",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KRL",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KRM",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KRM",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KRN",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRN",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRO",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KRO",
    "timezone": "Asia/Yekaterinburg",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KRP",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRP",
    "timezone": "Europe/Copenhagen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRQ",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KRR",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRR",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRS",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRS",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KRT",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRT",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRU",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRV",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRV",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KRW",
    "timezone": "Asia/Ashgabat",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KRX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KRY",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KRY",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KRZ",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KRZ",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "KSA",
    "timezone": "Pacific/Kosrae",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KSA",
    "timezone": "Pacific/Kosrae",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KSB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KSC",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSC",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSD",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSD",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSE",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSE",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSF",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KSH",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "KSI",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KSI",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KSJ",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSJ",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSK",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSL",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSL",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSM",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KSM",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KSN",
    "timezone": "Asia/Qyzylorda",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KSO",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KSQ",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KSQ",
    "timezone": "Asia/Samarkand",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KSR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KSR",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KSS",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KST",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KST",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KST",
    "timezone": "Africa/Khartoum",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSU",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KSV",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KSV",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "KSW",
    "timezone": "Asia/Jerusalem",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KSY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSY",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KSZ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KSZ",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KTA",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KTA",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KTB",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTB",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTC",
    "timezone": "Africa/Abidjan",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KTD",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KTE",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KTE",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KTF",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KTF",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KTG",
    "timezone": "Asia/Pontianak",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KTH",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTI",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KTK",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KTL",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KTL",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KTM",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTM",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTN",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTN",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTO",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KTP",
    "timezone": "America/Jamaica",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "KTQ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KTQ",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KTR",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KTR",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KTS",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTS",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KTT",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KTU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "KTW",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KTW",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KTX",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KTX",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KTY",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTY",
    "timezone": "Asia/Colombo",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KTZ",
    "timezone": "Asia/Hong_Kong",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUA",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUA",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUB",
    "timezone": "Asia/Brunei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUC",
    "timezone": "Pacific/Tarawa",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KUD",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUD",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUE",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KUF",
    "timezone": "Europe/Samara",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KUF",
    "timezone": "Europe/Samara",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KUG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUH",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUH",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUI",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KUJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KUK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KUL",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUL",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KUM",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUN",
    "timezone": "Europe/Vilnius",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KUN",
    "timezone": "Europe/Vilnius",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KUO",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KUO",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KUP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUR",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KUS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KUS",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KUT",
    "timezone": "Asia/Tbilisi",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KUT",
    "timezone": "Asia/Tbilisi",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KUU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KUU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "KUV",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUW",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KUX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUY",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KUZ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KUZ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KUZ",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "KVA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KVA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KVB",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KVB",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KVC",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KVC",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KVD",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "KVD",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "KVE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KVG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KVG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KVK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KVK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KVK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KVL",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KVL",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KVM",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KVM",
    "timezone": "Asia/Anadyr",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KVN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KVN",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KVR",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KVU",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KVU",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KVX",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KVX",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KVX",
    "timezone": "Europe/Volgograd",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KWA",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KWA",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "KWB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KWB",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KWD",
    "timezone": "Africa/Bangui",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "KWE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KWE",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KWF",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWF",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWG",
    "timezone": "Europe/Zaporozhye",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KWG",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KWG",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KWH",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "KWI",
    "timezone": "Asia/Kuwait",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KWI",
    "timezone": "Asia/Kuwait",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KWJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KWJ",
    "timezone": "Asia/Seoul",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "KWK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KWL",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KWM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KWM",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KWN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWN",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWO",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KWP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWP",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWQ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KWR",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KWS",
    "timezone": "Pacific/Guadalcanal",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KWT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWT",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KWU",
    "timezone": "Pacific/Auckland",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KWV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KWX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KWY",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KWY",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KWZ",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KWZ",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KXA",
    "timezone": "America/Metlakatla",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KXA",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KXE",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KXE",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "KXF",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KXF",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "KXK",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KXK",
    "timezone": "Asia/Vladivostok",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KXR",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "KXU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KXU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "KYA",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KYA",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KYB",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KYD",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KYE",
    "timezone": "Asia/Beirut",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KYE",
    "timezone": "Asia/Beirut",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KYF",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "KYI",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "KYK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KYK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KYL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "KYL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "KYN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KYN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "KYO",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "KYP",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KYS",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KYS",
    "timezone": "Africa/Bamako",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "KYT",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KYU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KYU",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KYX",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KYY",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KYZ",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KYZ",
    "timezone": "Asia/Krasnoyarsk",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KZB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KZB",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KZC",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KZD",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KZF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "KZG",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KZG",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "KZH",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "KZI",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KZI",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KZK",
    "timezone": "Asia/Phnom_Penh",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "KZN",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KZN",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "KZO",
    "timezone": "Asia/Qyzylorda",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KZO",
    "timezone": "Asia/Qyzylorda",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "KZR",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KZR",
    "timezone": "Europe/Istanbul",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "KZS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LAA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAA",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAB",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LAC",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LAC",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LAD",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LAD",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LAE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LAE",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LAF",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAF",
    "timezone": "America/Indiana/Indianapolis",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAG",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LAG",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LAH",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LAH",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LAI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LAI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LAJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LAJ",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LAK",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAK",
    "timezone": "America/Yellowknife",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAN",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LAO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LAO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LAP",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAP",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAQ",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LAR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAR",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LAS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LAS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LAT",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LAU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LAU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LAU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LAV",
    "timezone": "Pacific/Apia",
    "offset": {
      "gmt": 14,
      "dst": 13
    }
  },
  {
    "code": "LAW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LAW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LAX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LAX",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LAY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LAY",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LAZ",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LBA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LBA",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LBB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBB",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBC",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBD",
    "timezone": "Asia/Dushanbe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LBD",
    "timezone": "Asia/Dushanbe",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LBE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LBE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LBF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBH",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LBI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBI",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBJ",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBK",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LBL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LBM",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LBN",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LBO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LBO",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LBP",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBP",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBQ",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LBR",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LBS",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LBS",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LBT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LBT",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LBU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBV",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LBV",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LBW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBX",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LBY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LBZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LBZ",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LCA",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LCA",
    "timezone": "Asia/Nicosia",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LCB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "LCB",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "LCC",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCC",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LCD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LCE",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LCE",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LCF",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LCG",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCG",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LCH",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LCI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCJ",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCL",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCL",
    "timezone": "America/Havana",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCM",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LCM",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LCN",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "LCO",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LCP",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LCQ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCQ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LCR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LCR",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LCS",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LCV",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCV",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LCX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LCX",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LCY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LCZ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LDB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LDB",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LDC",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LDE",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDG",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDG",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDH",
    "timezone": "Australia/Lord_Howe",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LDH",
    "timezone": "Australia/Lord_Howe",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LDI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LDJ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LDK",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDK",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDM",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LDM",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LDN",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LDN",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LDO",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LDO",
    "timezone": "America/Paramaribo",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LDR",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDR",
    "timezone": "Asia/Aden",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LDS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LDS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LDU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LDU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LDV",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDV",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LDW",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LDX",
    "timezone": "America/Cayenne",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LDY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LDY",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LDZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LDZ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LEA",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LEA",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LEB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEC",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LED",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LED",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LEE",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEF",
    "timezone": "Africa/Maseru",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LEG",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LEH",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEI",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEJ",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEK",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LEK",
    "timezone": "Africa/Conakry",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LEL",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LEM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LEN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEN",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEO",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LEP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LEP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LEQ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LER",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LES",
    "timezone": "Africa/Maseru",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LES",
    "timezone": "Africa/Maseru",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LET",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LET",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LEU",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEV",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LEV",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LEW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LEY",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEY",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LEZ",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LFA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LFA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LFB",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LFI",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LFK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LFM",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "LFN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LFN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LFO",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LFP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LFQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LFQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LFQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LFR",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LFR",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LFT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LFT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LFW",
    "timezone": "Africa/Lome",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LFW",
    "timezone": "Africa/Lome",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LGA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LGB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LGB",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LGC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LGD",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LGE",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGF",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "LGG",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LGG",
    "timezone": "Europe/Brussels",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LGH",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "LGH",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "LGI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LGI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LGI",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LGJ",
    "timezone": "Europe/Bucharest",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LGK",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGK",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGK",
    "timezone": "Asia/Kuala_Lumpur",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGL",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGL",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LGN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LGO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LGO",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LGP",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGP",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LGQ",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LGQ",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LGR",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LGR",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LGS",
    "timezone": "America/Argentina/Mendoza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LGS",
    "timezone": "America/Argentina/Mendoza",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LGT",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LGU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LGU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LGV",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LGW",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LGX",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LGX",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LGY",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LGZ",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LHA",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LHA",
    "timezone": "Europe/Berlin",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LHB",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LHC",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LHD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LHE",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LHE",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LHG",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LHG",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LHI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LHI",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LHK",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LHN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LHP",
    "timezone": "Pacific/Bougainville",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LHR",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LHS",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LHS",
    "timezone": "America/Argentina/Rio_Gallegos",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LHU",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "LHV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LHV",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LHW",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LHW",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LHX",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LIA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LIA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LIB",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LIC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LIC",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LID",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIE",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LIE",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LIF",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LIF",
    "timezone": "Pacific/Noumea",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LIG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIG",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LIH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LIH",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LII",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LII",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LIJ",
    "timezone": "America/Juneau",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LIK",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "LIK",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "LIL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIL",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIM",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LIM",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LIN",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LIO",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LIO",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LIP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LIP",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LIQ",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LIQ",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LIR",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LIR",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LIS",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LIS",
    "timezone": "Europe/Lisbon",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LIT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LIT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LIV",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LIW",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LIW",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LIX",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LIX",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LIY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LIZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LJA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LJA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LJC",
    "timezone": "America/Kentucky/Louisville",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LJG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LJG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LJN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LJU",
    "timezone": "Europe/Ljubljana",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LJU",
    "timezone": "Europe/Ljubljana",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKA",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LKA",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LKB",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LKB",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LKC",
    "timezone": "Africa/Brazzaville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LKD",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LKE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LKG",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKG",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKH",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LKH",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LKI",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LKJ",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKK",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LKL",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKL",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKN",
    "timezone": "Europe/Oslo",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LKO",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LKO",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LKP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LKP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LKR",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKR",
    "timezone": "Africa/Mogadishu",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LKU",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LKV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LKW",
    "timezone": "Asia/Muscat",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "LKY",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKY",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LKZ",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LLA",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LLA",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LLB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLB",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLE",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LLF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LLG",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LLH",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LLH",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LLI",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LLI",
    "timezone": "Africa/Addis_Ababa",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LLJ",
    "timezone": "Asia/Dhaka",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LLK",
    "timezone": "Asia/Baku",
    "offset": {
      "gmt": 4,
      "dst": 5
    }
  },
  {
    "code": "LLL",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLM",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLM",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLN",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LLN",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LLO",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLO",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LLQ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LLS",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LLS",
    "timezone": "America/Argentina/Cordoba",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LLT",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LLT",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LLU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "LLU",
    "timezone": "America/Godthab",
    "offset": {
      "gmt": -3,
      "dst": -2
    }
  },
  {
    "code": "LLV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLV",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LLW",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LLW",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LLX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LLX",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LLY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LLY",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LLZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LLZ",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LMA",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LMB",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LMB",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LMC",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LMD",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LMD",
    "timezone": "America/Argentina/Salta",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LME",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LME",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LMG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LMH",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LMI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LMI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LMJ",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LMK",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LML",
    "timezone": "Pacific/Kwajalein",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "LMM",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LMM",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LMN",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LMN",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LMO",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LMO",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LMP",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LMP",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LMQ",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LMR",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LMR",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LMS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LMT",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LMX",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LMY",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LMY",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LMZ",
    "timezone": "Africa/Maputo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LNA",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNB",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LNC",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LND",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LND",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LNE",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LNE",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LNF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNH",
    "timezone": "Australia/Darwin",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LNI",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LNJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LNJ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LNK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LNK",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LNM",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNN",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNO",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LNO",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LNP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNP",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNQ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LNR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LNS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNS",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LNV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNV",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LNX",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LNX",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LNY",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LNZ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LNZ",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LOA",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LOB",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LOB",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LOC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "LOC",
    "timezone": "Australia/Adelaide",
    "offset": {
      "gmt": 10,
      "dst": 9
    }
  },
  {
    "code": "LOD",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LOD",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LOE",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LOE",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LOF",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LOG",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LOH",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LOH",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LOI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LOI",
    "timezone": "America/Sao_Paulo",
    "offset": {
      "gmt": -2,
      "dst": -3
    }
  },
  {
    "code": "LOK",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LOK",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LOL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LOL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LOM",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LOM",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LON",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LOO",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LOO",
    "timezone": "Africa/Algiers",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LOP",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LOP",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LOP",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LOQ",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LOQ",
    "timezone": "Africa/Gaborone",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LOR",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LOS",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LOS",
    "timezone": "Africa/Lagos",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LOT",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LOU",
    "timezone": "America/Kentucky/Louisville",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LOV",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LOV",
    "timezone": "America/Monterrey",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LOW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LOX",
    "timezone": "America/Guatemala",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LOY",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LOY",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LOZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LOZ",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LPA",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LPA",
    "timezone": "Atlantic/Canary",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LPB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LPB",
    "timezone": "America/La_Paz",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LPC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LPC",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LPD",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LPD",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LPE",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LPF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LPF",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LPG",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LPG",
    "timezone": "America/Argentina/Buenos_Aires",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LPI",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LPI",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LPJ",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LPK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LPK",
    "timezone": "Europe/Moscow",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "LPL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LPL",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LPM",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LPM",
    "timezone": "Pacific/Efate",
    "offset": {
      "gmt": 11,
      "dst": 11
    }
  },
  {
    "code": "LPN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LPN",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LPO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LPP",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LPP",
    "timezone": "Europe/Helsinki",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LPQ",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LPQ",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LPR",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LPS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LPT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LPT",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LPU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LPU",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LPW",
    "timezone": "America/Sitka",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LPX",
    "timezone": "Europe/Riga",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LPY",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LQK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LQK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LQM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LQM",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LQN",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "LQN",
    "timezone": "Asia/Kabul",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "LQP",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LQP",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LQQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LQQ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LQS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LQS",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LRA",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LRB",
    "timezone": "Africa/Maseru",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LRB",
    "timezone": "Africa/Maseru",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LRD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRD",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LRE",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LRF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRG",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LRH",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LRI",
    "timezone": "America/Bogota",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LRJ",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRK",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LRL",
    "timezone": "Africa/Lome",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LRL",
    "timezone": "Africa/Lome",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "LRM",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LRM",
    "timezone": "America/Santo_Domingo",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LRN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LRO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRQ",
    "timezone": "America/Winnipeg",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LRR",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "LRS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LRS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LRT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LRT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LRU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LRU",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LRV",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LSA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LSA",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LSB",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LSC",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LSC",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LSD",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LSE",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LSF",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LSH",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LSH",
    "timezone": "Asia/Rangoon",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LSI",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LSJ",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LSK",
    "timezone": "America/Denver",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "LSL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LSL",
    "timezone": "America/Costa_Rica",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LSM",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LSM",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LSN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LSN",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LSO",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LSO",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LSP",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LSQ",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LSQ",
    "timezone": "America/Santiago",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LSR",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LSS",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LSS",
    "timezone": "America/Guadeloupe",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LST",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LST",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LSU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LSU",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LSV",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LSW",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LSX",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LSX",
    "timezone": "Asia/Jakarta",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LSY",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LSY",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LSZ",
    "timezone": "Europe/Zagreb",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LTA",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LTA",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LTB",
    "timezone": "Australia/Melbourne",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LTB",
    "timezone": "Australia/Hobart",
    "offset": {
      "gmt": 11,
      "dst": 10
    }
  },
  {
    "code": "LTC",
    "timezone": "Africa/Ndjamena",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LTD",
    "timezone": "Africa/Tripoli",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LTF",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LTG",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LTH",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LTI",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "LTI",
    "timezone": "Asia/Hovd",
    "offset": {
      "gmt": 7,
      "dst": 8
    }
  },
  {
    "code": "LTK",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LTK",
    "timezone": "Asia/Damascus",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LTL",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LTL",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LTM",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LTM",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LTN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LTO",
    "timezone": "America/Hermosillo",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "LTO",
    "timezone": "America/Mazatlan",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LTP",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LTQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LTQ",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LTR",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LTR",
    "timezone": "Europe/Dublin",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LTS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LTS",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LTT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LTT",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LTU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LTU",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LTV",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LTW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LTW",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LTX",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LTX",
    "timezone": "America/Guayaquil",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LTZ",
    "timezone": "Europe/Rome",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUA",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LUA",
    "timezone": "Asia/Kathmandu",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LUB",
    "timezone": "America/Guyana",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "LUC",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LUC",
    "timezone": "Pacific/Fiji",
    "offset": {
      "gmt": 13,
      "dst": 12
    }
  },
  {
    "code": "LUD",
    "timezone": "Africa/Windhoek",
    "offset": {
      "gmt": 2,
      "dst": 1
    }
  },
  {
    "code": "LUE",
    "timezone": "Europe/Bratislava",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUF",
    "timezone": "America/Phoenix",
    "offset": {
      "gmt": -7,
      "dst": -7
    }
  },
  {
    "code": "LUG",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUG",
    "timezone": "Europe/Zurich",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUH",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LUI",
    "timezone": "America/Tegucigalpa",
    "offset": {
      "gmt": -6,
      "dst": -6
    }
  },
  {
    "code": "LUJ",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LUK",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LUL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LUL",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LUM",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LUM",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LUN",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LUN",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LUO",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LUO",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LUP",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LUP",
    "timezone": "Pacific/Honolulu",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "LUQ",
    "timezone": "America/Argentina/San_Luis",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LUQ",
    "timezone": "America/Argentina/San_Luis",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LUR",
    "timezone": "America/Nome",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LUS",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LUS",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LUT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LUU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LUU",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LUV",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LUV",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "LUW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LUW",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LUX",
    "timezone": "Europe/Luxembourg",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUX",
    "timezone": "Europe/Luxembourg",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUY",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUY",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUZ",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LUZ",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LUZ",
    "timezone": "Europe/Warsaw",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LVA",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LVB",
    "timezone": "America/Bahia",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "LVD",
    "timezone": "America/Anchorage",
    "offset": {
      "gmt": -9,
      "dst": -8
    }
  },
  {
    "code": "LVI",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LVI",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LVK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LVK",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LVL",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LVM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LVM",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LVO",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LVO",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LVP",
    "timezone": "Asia/Tehran",
    "offset": {
      "gmt": 3,
      "dst": 4
    }
  },
  {
    "code": "LVR",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "LVR",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "LVS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LVS",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LWA",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LWB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LWB",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LWC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LWC",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LWE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LWE",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LWG",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LWH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LWI",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LWK",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LWL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LWL",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LWM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LWM",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LWN",
    "timezone": "Asia/Yerevan",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "LWN",
    "timezone": "Asia/Yerevan",
    "offset": {
      "gmt": 4,
      "dst": 4
    }
  },
  {
    "code": "LWO",
    "timezone": "Europe/Uzhgorod",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LWO",
    "timezone": "Europe/Kiev",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LWR",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LWR",
    "timezone": "Europe/Amsterdam",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LWS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LWS",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "LWT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LWT",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LWV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LWV",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LWY",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LWY",
    "timezone": "Asia/Kuching",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LXA",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LXA",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LXG",
    "timezone": "Asia/Vientiane",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "LXI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LXN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LXN",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LXR",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LXR",
    "timezone": "Africa/Cairo",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LXS",
    "timezone": "Europe/Athens",
    "offset": {
      "gmt": 2,
      "dst": 3
    }
  },
  {
    "code": "LXU",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LXU",
    "timezone": "Africa/Lusaka",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LXV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LXV",
    "timezone": "America/Denver",
    "offset": {
      "gmt": -7,
      "dst": -6
    }
  },
  {
    "code": "LYA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYA",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYB",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LYB",
    "timezone": "America/Cayman",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "LYC",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYC",
    "timezone": "Europe/Stockholm",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYE",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LYE",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LYG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYG",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYH",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LYI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYI",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYK",
    "timezone": "Asia/Makassar",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LYN",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LYO",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LYP",
    "timezone": "Asia/Karachi",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "LYR",
    "timezone": "Arctic/Longyearbyen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYR",
    "timezone": "Arctic/Longyearbyen",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYS",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYS",
    "timezone": "Europe/Paris",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LYT",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LYU",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LYX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LYX",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "LZA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LZA",
    "timezone": "Africa/Lubumbashi",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "LZB",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LZC",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LZC",
    "timezone": "America/Mexico_City",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "LZD",
    "timezone": "Asia/Chongqing",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZH",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZI",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LZI",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LZM",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LZM",
    "timezone": "Africa/Luanda",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "LZN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZN",
    "timezone": "Asia/Taipei",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZO",
    "timezone": "Asia/Shanghai",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "LZR",
    "timezone": "Australia/Lindeman",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "LZS",
    "timezone": "Europe/Vienna",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "LZU",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "LZY",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "LZY",
    "timezone": "Asia/Urumqi",
    "offset": {
      "gmt": 6,
      "dst": 6
    }
  },
  {
    "code": "MAA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "MAA",
    "timezone": "Asia/Kolkata",
    "offset": {
      "gmt": 5,
      "dst": 5
    }
  },
  {
    "code": "MAB",
    "timezone": "America/Araguaina",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "MAB",
    "timezone": "America/Belem",
    "offset": {
      "gmt": -3,
      "dst": -3
    }
  },
  {
    "code": "MAC",
    "timezone": "America/New_York",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "MAD",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "MAD",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "MAE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "MAE",
    "timezone": "America/Los_Angeles",
    "offset": {
      "gmt": -8,
      "dst": -7
    }
  },
  {
    "code": "MAF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MAF",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MAG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAG",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAH",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "MAH",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "MAH",
    "timezone": "Europe/Madrid",
    "offset": {
      "gmt": 1,
      "dst": 2
    }
  },
  {
    "code": "MAI",
    "timezone": "Africa/Blantyre",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "MAJ",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "MAJ",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "MAK",
    "timezone": "Africa/Juba",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MAK",
    "timezone": "Africa/Juba",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MAL",
    "timezone": "Asia/Jayapura",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "MAM",
    "timezone": "America/Matamoros",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MAM",
    "timezone": "America/Matamoros",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MAN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "MAN",
    "timezone": "Europe/London",
    "offset": {
      "gmt": 0,
      "dst": 1
    }
  },
  {
    "code": "MAO",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "MAO",
    "timezone": "America/Manaus",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "MAP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAP",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAQ",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "MAQ",
    "timezone": "Asia/Bangkok",
    "offset": {
      "gmt": 7,
      "dst": 7
    }
  },
  {
    "code": "MAR",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "MAR",
    "timezone": "America/Caracas",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "MAS",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAS",
    "timezone": "Pacific/Port_Moresby",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MAT",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "MAT",
    "timezone": "Africa/Kinshasa",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "MAU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "MAU",
    "timezone": "Pacific/Tahiti",
    "offset": {
      "gmt": -10,
      "dst": -10
    }
  },
  {
    "code": "MAV",
    "timezone": "Pacific/Majuro",
    "offset": {
      "gmt": 12,
      "dst": 12
    }
  },
  {
    "code": "MAW",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MAX",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "MAX",
    "timezone": "Africa/Dakar",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "MAY",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "MAY",
    "timezone": "America/Nassau",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "MAZ",
    "timezone": "America/Puerto_Rico",
    "offset": {
      "gmt": -4,
      "dst": -4
    }
  },
  {
    "code": "MBA",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBA",
    "timezone": "Africa/Nairobi",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "MBB",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "MBC",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "MBC",
    "timezone": "Africa/Libreville",
    "offset": {
      "gmt": 1,
      "dst": 1
    }
  },
  {
    "code": "MBD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "MBD",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "MBE",
    "timezone": "Asia/Tokyo",
    "offset": {
      "gmt": 9,
      "dst": 9
    }
  },
  {
    "code": "MBF",
    "timezone": "Australia/Sydney",
    "offset": {
      "gmt": null,
      "dst": null
    }
  },
  {
    "code": "MBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MBG",
    "timezone": "America/Chicago",
    "offset": {
      "gmt": -6,
      "dst": -5
    }
  },
  {
    "code": "MBH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MBH",
    "timezone": "Australia/Brisbane",
    "offset": {
      "gmt": 10,
      "dst": 10
    }
  },
  {
    "code": "MBI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBI",
    "timezone": "Africa/Dar_es_Salaam",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBJ",
    "timezone": "America/Jamaica",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "MBJ",
    "timezone": "America/Jamaica",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "MBK",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "MBK",
    "timezone": "America/Cuiaba",
    "offset": {
      "gmt": -3,
      "dst": -4
    }
  },
  {
    "code": "MBL",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "MBL",
    "timezone": "America/Detroit",
    "offset": {
      "gmt": -5,
      "dst": -4
    }
  },
  {
    "code": "MBM",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "MBM",
    "timezone": "Africa/Johannesburg",
    "offset": {
      "gmt": 2,
      "dst": 2
    }
  },
  {
    "code": "MBN",
    "timezone": "Australia/Perth",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "MBO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "MBO",
    "timezone": "Asia/Manila",
    "offset": {
      "gmt": 8,
      "dst": 8
    }
  },
  {
    "code": "MBP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "MBP",
    "timezone": "America/Lima",
    "offset": {
      "gmt": -5,
      "dst": -5
    }
  },
  {
    "code": "MBQ",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBQ",
    "timezone": "Africa/Kampala",
    "offset": {
      "gmt": 3,
      "dst": 3
    }
  },
  {
    "code": "MBR",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "MBR",
    "timezone": "Africa/Nouakchott",
    "offset": {
      "gmt": 0,
      "dst": 0
    }
  },
  {
    "code": "MBS",
    "timezone": "America/Detroit",
  },