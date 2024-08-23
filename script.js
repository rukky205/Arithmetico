function setScreenValue(value){
   document.getElementById("result").value += value;
}

function clearScreen(value){
          document.getElementById("result").value = "";
}

function calculateResult(value){
   const resultElement = document.getElementById("result");
  const expression = resultElement.value.trim();

  if(expression === ""){
     resultElement.value = "Enter an expression";
    return;
  }

  try{
      resultElement.value = eval(expression);

  }catch(e){
    resultElement.value = "Invalid Expression"
  }

}


let bracketCount = 0; 
function setScreenValue(value) {
  const resultElement = document.getElementById("result");

  if (value === '(') { 
    bracketCount++;  // Increase count for opening bracket
    resultElement.value += value; 
  } else if (value === ')') { 
    if (bracketCount > 0) { 
      bracketCount--;  // Decrease count for closing bracket
      resultElement.value += value;
    } 
  } else {
    resultElement.value += value; // Handle other button values
  }
}