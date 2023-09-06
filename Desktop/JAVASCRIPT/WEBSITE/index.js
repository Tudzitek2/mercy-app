// let student = 23;
// console.log(student /= 2);
// // document.getElementById("p1").innerHTML="I just changed this paragraph text";

// // function innerHTMLChanger()
// // {
// //     var ids = document.getElementsByClassName("jjj");

// //     for (var i = 0; i < ids.length; i++)
// //     {
// //             ids[i].innerHTML = "I just changed the text in all the paragraphs";
// //     }
// // }
// // function innerHTMLChanger()
// // {
// //     var id = ["p1", "p2", "p3"];
// //     // var ids = document.getElementById(id);

// //     for (var i = 0; i < id.length; i++)
// //     {
// //         document.getElementById(id[i]).innerHTML="It was fun creating my own custom fumnction to handle this";
// //     }
// // }
// // 12
// // console.log(window.prompt('How old are you'));

let myVar;

document.getElementById("myButton").onclick = myFunction;

function myFunction()
{
    myVar = document.getElementById("myInput").value;
    console.log(myVar);
    window.alert("Hello " + myVar + "\n" +"Nice meeting you");
}





















