function add(number1, number2) {
  return number1 + number2;
};
function subtract(number1, number2) {
  return number1 - number2;
};
function multiply(number1, number2) {
  return number1 * number2;
};
function divide(number1, number2) {
  return number1 / number2;
};


$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#input1").val());
    const number2 = parseInt($("#input2").val());
    var operator = document.getElementById("#expression");
    var result = operator.option[operator.selectedIndex].value;
      $("#output").text(result);
    });
});
