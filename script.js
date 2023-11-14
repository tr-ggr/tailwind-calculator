$(document).ready(function () {
  var operation;
  var num1;
  var num2;
  $(".button").on("click", function (e) {
    let number = e.target.id;
    let temp = $(".screen").text($(".screen").text() + number);

    console.log($(".screen").prop("innerText"));
    console.log(parseInt($(".screen").text()));
  });

  $(".operation").on("click", function (e) {
    operation = e.target.id;
    num1 = parseInt($(".screen").prop("innerText"));
    $(".screen").text("");

    console.log(operation);
  });

  $(".result").on("click", function (e) {
    console.log(operation);
    switch (operation) {
      case "+":
        num2 = parseInt($(".screen").prop("innerText"));
        console.log(num1 + num2);
        $(".screen").text(num1 + num2);
        break;
      case "-":
        num2 = parseInt($(".screen").prop("innerText"));
        $(".screen").text(num1 - num2);
        break;
      default:
        alert("didnt wokr!");
    }
  });
});
