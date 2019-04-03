$(document).ready(function(){
  $("form").submit(function(event){
  var userInput = parseInt($("#number").val());
  var total = 1;
  if(userInput <= 1){
    document.write(userInput + " doesn't have Factorial, please enter a number bigger than 1");
  } else {
  for(index=1; index<=userInput; index++){
  //alert(index);
  total = (total * index);
  }
}
document.write("Factorial for " + userInput + " is " + total +".");
event.preventDefault();
  });
});
