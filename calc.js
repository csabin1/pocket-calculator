var completed = false;
var display = "0";
var total = "0";

do {

function numberButton1() {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "1";
  display = document.getElementById("display").innerHTML;
}

function button(2) {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "2";
  display = document.getElementById("display").innerHTML;
}

function button(3) {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "3";
  display = document.getElementById("display").innerHTML;
}

function button(4) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "4";
  display = document.getElementById("display").innerHTML;
}

function button(5) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "5";
  display = document.getElementById("display").innerHTML;
}

function button(6) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "6";
  display = document.getElementById("display").innerHTML;
}

function button(7) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "7";
  display = document.getElementById("display").innerHTML;
}

function button(8) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "8";
  display = document.getElementById("display").innerHTML;
}

function button(9) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "9";
  display = document.getElementById("display").innerHTML;
}

function button(0) {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "0";
  display = document.getElementById("display").innerHTML;
}

function button('+') {
    if (document.getElementById('total').innerHTML === "0") {
      extraWipe();
    }
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "+";
    document.getElementById("total").innerHTML = total;
    wipe();
  }

function button('-') {
    if (document.getElementById("total").innerHTML === "0") {
       extraWipe();
    }
       total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "-";
    document.getElementById("total").innerHTML = total;
    wipe();
  }

function button('*') {
if (document.getElementById('total').innerHTML === "0") {
      extraWipe();
    }
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "*";
    document.getElementById("total").innerHTML = total;
    wipe();
  }

function button('/') {
if (document.getElementById('total').innerHTML === "0") {
      extraWipe();
    }
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "/";
    document.getElementById("total").innerHTML = total;
    wipe();
  }

function decimalInsert('.') {
  display = document.getElementById("display").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += ".";
  display = document.getElementById("display").innerHTML;
}

function wipe() {
  document.getElementById("display").innerHTML = "0";
}

function extraWipe() {
  document.getElementById("total").innerHTML = "";
}

function clean() {
  document.getElementById("display").innerHTML = "0";
}

function extraClean() {
  document.getElementById("display").innerHTML = "0";
  document.getElementById("total").innerHTML = "0";
}

function numberNegation() {
  display = document.getElementById("display").innerHTML;
  display = eval(display) * -1;
  if ((Number.isNaN(display)) || (display === "Infinity" || (display === "/0") || (display[1,2] === "**") || (display[1,2] === "++") || (display[1,2] === "--"))){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = display;
  }
}

function numberPercentage() {
  display = document.getElementById("display").innerHTML;
  display = eval(display);
  display = display / 100;
  if ((Number.isNaN(display)) || (display === "Infinity" || (display === "/0") || (display[1,2] === "**") || (display[1,2] === "++") || (display[1,2] === "--"))){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = eval(display);
  }
}

  function equal() {
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    document.getElementById("total").innerHTML = total;
    if ((Number.isNaN(total)) || (eval(total) === null) || (eval(total) === undefined) || (eval(total) === "Infinity")){
      document.getElementById("display").innerHTML = "Sorry, that is not a valid operation"
    }
    if (total.indexOf("--") > -1) {
      total.replace("--", "+");
    }
    document.getElementById("display").innerHTML = eval(total);



    completed = true;
  }


/*function pi() {
  document.getElementById("display").textContent += "π";
}*/

} while(completed = false)
