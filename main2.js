var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var optionfrom,optionto;

input.addEventListener("keyup", myResult)
inputType.addEventListener("change", myResult)
resultType.addEventListener("change", myResult)

optionfrom=inputType.value
optionto=resultType.value

function myResult(){

    optionfrom=inputType.value
    optionto=resultType.value

    if(optionfrom==="meter" && optionto==="kilometer")
        {result.value=Number(input.value)*0.001}

    else if(optionfrom==="meter" && optionto==="centimeter")
        {result.value=Number(input.value)*100}

    else if(optionfrom==="meter" && optionto==="meter")
        {result.value=Number(input.value)}
    
}