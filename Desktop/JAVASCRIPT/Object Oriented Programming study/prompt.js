
let interest = {
    principal: parseFloat(prompt("Input the principal loan amount")),
    rate: parseFloat(prompt("Input the rate")),
    time: parseFloat(prompt("Input the time")),
    simpleInterest: function ()
    {
               return ((this.principal * this.rate * this.time) / 100);
    } 
};
 console.log(interest.simpleInterest());
 let disp = interest.simpleInterest();
 document.getElementById("SI").innerHTML= "The simple interest on your loan amount is " + disp;