
const firstCurrency = document.getElementById("first-cur");
const secondCurrency = document.getElementById("second-cur");

const currency3="INR";
const currency4="EUR";
const currency5="RUB";


const amount = document.getElementById("amount");
const result = document.getElementById("output");
const url = 'https://v6.exchangerate-api.com/v6/0265b98fdb7079c748595f24/latest/';


time();


function Calculate(){
  const currencyOne= firstCurrency.value; 
  const currencyTwo = secondCurrency.value;

    
 
      fetch(url + currencyOne) 
    .then((res) => res.json())
     .then((data) =>{
        
      function rate( k){
        var value=data.conversion_rates[k];
        return value;
      };
       
      const output =(amount.value*rate(currencyTwo)).toFixed(4);
      
      document.getElementById('output').value= output;   

       document.getElementById("rateshow1").innerText=`1 ${currencyOne} = ${rate(currencyTwo).toFixed(4)} ${currencyTwo}`;
       document.getElementById("rateshow2").innerText=`1 ${currencyOne} = ${rate(currency3).toFixed(4)} ${currency3}`;
       document.getElementById("rateshow3").innerText=`1 ${currencyOne} = ${rate(currency4).toFixed(4)} ${currency4}`;
       document.getElementById("rateshow4").innerText=`1 ${currencyOne} = ${rate(currency5).toFixed(4)} ${currency5}`;

    
     });



     
    
};

function time(){
  var today= new Date();

  var day = today.getDate();
  var month = today.toLocaleString('default', { month: 'long' });
  
  var year= today.getFullYear();
  
  var hour= today.getHours();
  var minute= today.getMinutes();
  
  
  document.getElementById("date-").innerHTML=month +" "+ day +", "+year;
  
  document.getElementById("-time").innerHTML=hour +":"+ minute+ " "+ "IST" ;
  setTimeout("time()",100)
}




function Swap(){
    const Temp= firstCurrency.value;
      firstCurrency.value = secondCurrency.value;
      secondCurrency.value= Temp;
     
      amount.value=output.value;
     

      Calculate();
}


window.onload=Calculate();

document.getElementById("swap").addEventListener("click",Swap);

firstCurrency.addEventListener("change" ,Calculate);
secondCurrency.addEventListener("change" ,Calculate);

amount.addEventListener("input", Calculate);
