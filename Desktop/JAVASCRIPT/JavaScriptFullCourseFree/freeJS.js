let a, b, c;


document.getElementById("submitBtn").onclick = function (){
    a = parseInt(document.getElementById("sideA").value);
    // a = Number(a);
    
    b = Number(document.getElementById("sideB").value);
    // b = Number(b);
    
    c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
    document.getElementById("sideC").innerHTML= c;
}

// console.log(Math.sqrt(Math.pow(12, 2) + Math.pow(12, 2)));
