const myArr = [23, 12, 6, 89, 99];

function myArrMax(A)
{
    return(Math.max.apply(null, A));
}
console.log(myArrMax(myArr));