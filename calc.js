var completed = false;
var display = "0";
var total = "0";

do {

function buttonnumber(number) {
  number = number.toString();
  display = display.toString();
  if (document.getElementById("display").innerHTML === "0") {
    zeroWipe();
  }
  if (display.indexOf("e") > -1) {
    display = Number(display);
    display = display.toString();
    display += number;
    display = Number(display);
    display = display.toExponential(5);
    document.getElementById("display").innerHTML = display;
  }
  else {
  display = display.toString();
  document.getElementById("display").textContent += number;
  display = document.getElementById("display").innerHTML;

    if (display.length > 9) {
    display = Number(display);
    display = display.toExponential(5);
    display = display.toString();
    }
  document.getElementById("display").innerHTML = display;
  }
}

function addSignNumber() {
    if (document.getElementById('total').innerHTML === "0") {
      totalWipe();
    }
    if ((total.charAt(total.length-1) === "-") ||(total.charAt(total.length-1) === "*") || (total.charAt(total.length-1) === "/")) {
      total = document.getElementById("total").innerHTML;
      total = total.toString();
      total = total.replace(total.charAt(total.length-1), "+")
      document.getElementById("total").innerHTML = total;
      zeroWipe();
    }
    else {
    total = document.getElementById("total").innerHTML;
    total = total.toString();
    total += display;
    total += "+";
    document.getElementById("total").innerHTML = total;
    zeroWipe();
  }
  }
  function subtractSignNumber() {
      if (document.getElementById('total').innerHTML === "0") {
        totalWipe();
      }
      total = document.getElementById("total").innerHTML;
      total = total.toString();
      total += display;
      total += "-";
      document.getElementById("total").innerHTML = total;
      zeroWipe();
      display = document.getElementById("display").innerHTML;
      }
    function multiplySignNumber() {
        if (document.getElementById('total').innerHTML === "0") {
          totalWipe();
        }
        total = document.getElementById("total").innerHTML;
        total = total.toString();
        total += display;
        total += "*";
        document.getElementById("total").innerHTML = total;
        zeroWipe();
      }
      function divideSignNumber() {
          if (document.getElementById('total').innerHTML === "0") {
            totalWipe();
          }
        total = document.getElementById("total").innerHTML;
          total = total.toString();
          total += display;
          total += "/";
          document.getElementById("total").innerHTML = total;
          zeroWipe();
      }
      
  function operator(name) {
          if (document.getElementById('total').innerHTML === "0") {
            totalWipe();
          }
          total += display;
          if ((total.charAt(total.length-2) === "-") ||(total.charAt(total.length-2) === "*") || (total.charAt(total.length-2) === "/") || (total.charAt(total.length-1) === "+")) {
            total = document.getElementById("total").innerHTML;
            total = total.toString();
            total = total.replace(total.charAt(total.length-2), name)
            document.getElementById("total").innerHTML = total;
            zeroWipe();
          }
          else {
          total = document.getElementById("total").innerHTML;
          total = total.toString();
          total += display;
          total += name;
          document.getElementById("total").innerHTML = total;
          zeroWipe();
        }
        }

function decimalSignButton() {
  display = document.getElementById("display").innerHTML;
  display = display.toString();
  if (display.indexOf(".") > -1) {

  }
  else {
  document.getElementById("display").textContent += ".";
  display = document.getElementById("display").innerHTML;
}
}


function clean() {
  document.getElementById("display").innerHTML = "0";
}

  function zeroWipe() {
  document.getElementById("display").innerHTML = "";
}


function negativeSignButton() {
  display = document.getElementById("display").innerHTML;
  display = eval(display) * -1;
    if ((Number.isNaN(eval(display))) || (eval(display) === "Infinity") || (total.indexOf("/0") > -1) || (total.indexOf("**") > -1) || (total.indexOf("++") > -1)){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }

  else {
  document.getElementById("display").innerHTML = display;
  }
}

function percentageSignButton() {
  display = document.getElementById("display").innerHTML;
  if ((Number.isNaN(eval(display))) || (eval(display) === "Infinity") || (total.indexOf("/0") > -1) || (total.indexOf("**") > -1) || (total.indexOf("++") > -1)){
    document.getElementById("display").innerHTML = "Sorry, that is not a valid operation";
  }
  else {
    if (total.indexOf("--") > -1) {
      total.replace("--", "+");
    }
  display = eval(display);
  display = display / 100
  document.getElementById("display").innerHTML = eval(display);
  }
}

  function equalSignButton() {
    display = document.getElementById("display").innerHTML;
    console.log(display, "first display");
    total = document.getElementById("total").innerHTML;
    if (total === "0") {
      totalWipe();
    }
    total = document.getElementById("total").innerHTML;
    console.log(total, "first total")
    total += display;
    console.log(total, "second total");
    document.getElementById("total").innerHTML = total;
      if ((Number.isNaN(eval(display))) || (eval(display) === "Infinity") || (total.indexOf("/0") > -1) || (total.indexOf("**") > -1) || (total.indexOf("++") > -1)){
      document.getElementById("display").innerHTML = "Sorry, that is not a valid operation"
    }
    else {
    if (total.indexOf("--") > -1) {
      total.replace("--", "+");
    }

    if (display.indexOf("--") > -1) {
      display.replace("--", "+");
    }

    if (total.indexOf(",") > -1) {
      total.replace(",", "");
    }

    if (display.indexOf(",") > -1) {
      display.replace(",", "");
    }


    if (total.toString() === "0") {
      document.getElementById("display").innerHTML = eval(display);
    }
    else {
    total = document.getElementById("total").innerHTML;
    display = eval(total);
    display = display.toString();
    if (display.length > 9) {
      display = Number(display);
      display = display.toExponential();
      document.getElementById("display").innerHTML = display;
      console.log("it get's here");
    }
    else {
    document.getElementById("display").innerHTML = eval(total).toLocaleString();
    display = document.getElementById("display").innerHTML;
    totalZeroWipe();
    console.log(display, "second display");
    console.log("ez clappers");
    }
  }
}


    completed = true;
  }


} while(completed = false)
