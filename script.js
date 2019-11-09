"use strict";

document.addEventListener("DOMContentLoaded", fetchJsonData);

function fetchJsonData() {
  // Jeg starter med at lave den funktion hvor jeg vil fetche JSON filen

  async function getJson() {
    let jsonData = await fetch("http://dummy.restapiexample.com/api/v1/employees");

    const jsonInfo = await jsonData.json();
    // Jeg fetcher filen og laver den til const'en jsonInfo
    const result = [];

    for (const i in jsonInfo) result.push([i, jsonInfo[i]]);

    // Jeg laver et array udfra jsonInfo, i const'en "result"

    console.log(result);
  }

  getJson();
  status();
}

function status(result) {
  // jeg forsøger at vise at hvis result er "tomt", hvis error
  if (result === "") {
    console.log("error");
  } else {
    // og hvis ikke, hvis success
    console.log("success");
  }
}
