var completed = false;
var display = "0";
var total = "0";

do {

function buttonNumber1() {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "1";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber2() {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "2";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber3() {
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "3";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber4() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "4";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber5() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "5";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber6() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "6";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber7() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "7";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber8() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "8";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber9() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "9";
  display = document.getElementById("display").innerHTML;
}

function buttonNumber0() {
  if (document.getElementById("display").innerHTML === "0") {
    wipe();
  }
  display = display.toString();
  document.getElementById("display").textContent += "0";
  display = document.getElementById("display").innerHTML;
}

function addSignButton() {
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

function subtractSignButton() {
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

function multiplySignButton() {
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

function divideSignButton() {
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

function decimalSignButton() {
  display = document.getElementById("display").innerHTML;
  display = display.toString();
  document.getElementById("display").textContent += ".";
  display = document.getElementById("display").innerHTML;
}

function clearSignButton() {
  document.getElementById("display").innerHTML = "0";
}

function negativeSignNumber() {
  display = document.getElementById("display").innerHTML;
  display = eval(display) * -1;
  if ((Number.isNaN(display)) || (display === "Infinity" || (display === "/0") || (display[1,2] === "**") || (display[1,2] === "++") || (display[1,2] === "--"))){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = display;
  }
}

function percentageSignButton() {
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

  function equalSignButton() {
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
