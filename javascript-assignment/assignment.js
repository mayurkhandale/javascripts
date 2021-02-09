//  1)
// function myfunction(p1,p2){
//    alert("sum of 2 numbers is " + (p1+p2))
//    alert("multiplication of 2 numbers"+ (p1*p2))
//    alert("modules of 2 number"+ (p1%p2))


// } 
// <button onclick="myfunction(10,20)">Submit</button>
// 2)
// function myfunction(){
//     var a=Number(prompt("enter 1 number"))
//     var b=Number(prompt("enter 2 number"))
//     alert("sum of two number is"+(a+b))
//     alert("multiplication of two number"+(a*b))
//     alert("modules of two number"+(a%b))
// }
// <button onclick="myfunction()">Submit</button>

// 2)
// function myfunction(p1,p2){
//    alert("sum of 2 numbers is " + " " + (p1+p2))
//    multi(20,20)
//    module(10,5)
   
// } 

// function multi(p1,p2){
// 	alert("multiplication of 2 number"+ " " +(p1*p2))
// }

// function module(p1,p2){
// 	alert("modulus of 2 number"+ " " + (p1%p2))
// }


// 4)local function demonstrate here
// function myfunction(){
// 	let a=10;
// 	console.log(a)

// }
// alert(a)

// 5)
// uusing two global variables demonstrate sum,mul and modules 
// var j=10;
// var k=20;
// function myfunction(){
// console.log(j+k)
// console.log(j*k)
// console.log(j%k)
// }
// myfunction()

// 5) using local variable claculate sum,mul,modules
// function myfun(){
//   let c=12;
//   let d=10;
//   console.log(c+d)
//   console.log(c*d)
//   console.log(c%d)
// }
// myfun()


// 9) 
// alert("The name is set as : Bruce")
// alert("Name is display is as: wayne")

/* --------------------for loop--------------*/
// 1) loop write a program to print 1 to 30 number
// for (var i=1;i<=30;i++){
// console.log(i)
// }


// 2) write a program  to display  1 to 10 numbers  in reverse order like 10,9,8 to 1
// for(var i=10;i>=1;i--){
// console.log(i)
// }


// 3)write a program to print number 12 to 33 and end of the print total of 12 to 33 number
// var result=0;
// for (var i=12; i<=33;i++)
// {
// console.log(i)
// result+=i

// }


// write a program to print a 1 to 30 all odd numbers
// for(var a=1;a<=30;a++){
//   if (a%2!=0){
//    console.log(a)
//   }
// }


// write a program to print  1 to 30 all even numbers







//


 // function temperatureChange(valNum)
 // { 
 // 	valNum = parseFloat(valNum);
 //   document.getElementById("outputC").innerHTML=(valNum-32)/1.8;
 // }


// function myfun(p1,p2,p3){
// 	alert(p1+p2)
// }
// myfun(10,20)


//  write a program to display in cosole  1 to 30 even Numbers
// for (var a=1;a<=30;a++){
// if (a%2==0){
//    console.log(a)
// }

// }


//  write a program to display 
// if you enter '1' then display 1 to 11
// if you enter '2' then display 2 to 12
// if you enter '3' then display 3 to 13
// if you enter '4' then dispay  4 to 14
// if you enter '5' then display 5 to 15

﻿
// var a=prompt("enter a number" )
// if (a==='1'){
// for(a;a<=11;a++){
// console.log(a)

//    }
// }
// else if(a==='2'){
//      for(a;a<=12;a++){
//      console.log(a)

//    }

// }
// else if(a==='3'){
//     for(a;a<=13;a++){
//       console.log(a)
//       }

// }
// else if(a==='4'){
//     for(a;a<=14;a++){
//       console.log(a)
//       }

// }
// else if(a==='5'){
// for(a;a<=15;a++){
// console.log(a)
// }

// }
// else{
// console.log("wrong input")
// }

// write a program to display 
// if user input 1 the print "one"
// if user input 2 the print "two"
// if user input 3 the print "three"
// if user input 4 the print "four"
// if user input 5 the print "five"
// else enter a valid number

// var a=prompt("enter a number");
// if (a==='1'){
// alert("one")
// }
// else if(a==='2'){
// alert('two')
// }
// else if(a==='3'){
// alert("three")
// }
// else if(a==='4'){
// alert("four")
// }
// else if (a==='4'){
// alert("five")
// }
// else{
// alert("wrong input")
// }


// 10.)
//  If I enter a number between 1 to 10, it should alert, the number is between ‘1 and 10’
// If I enter a number between 11 to 20, it should alert, the number is between ‘11 and 20’
// If I enter a number between 21 to 30, it should alert, the number is between ‘21 and 30’
// If I enter a number between 31 to 40, it should alert, the number is between ‘31 and 40’
// If I enter a number between 41 to 50, it should alert, the number is between ‘41 and 50’

// var a=prompt("enter a number")
// if (a>=1 && a<=10){
//   alert((a)+" " + "is number between 1 to 10")
// }
// else if(a>=11 && a<=20){
//    alert((a)+" "+ "is number between 11 to 20")
// }
// else if (a>=21 && a<=30){
//   alert((a)+ " "+ "is number between 21 to 30")
// }
// else if(a>=31 && a<=40){
//        alert((a)+ " " + "is number between 31 to 40")
// }
// else if(a>=41 && a<=50){
//        alert((a)+ " " + "is number between 41 to 50")
// }



// 11.If the number is less than 50 or greater than 200, alert the number is a valid number
// If the number is between 50 and 200, alert this is a good number.
// Else, alert ‘It is an invalid number’.

// var a=prompt("enter a number")
// if (a<50 || a>200){
//   alert((a)+" " +" number is valid  number")
// }
// else if(a>=50 || a<=200){
//    alert((a)+" "+ " number is good")

// }
// else{
//   alert((a)+ " "+ "not  valid number")
// }




          // function displayNextImage() {
          //     x = (x === images.length - 1) ? 0 : x + 1;
          //     document.getElementById("img").src = images[x];
          // }

          // function displayPreviousImage() {
          //     x = (x <= 0) ? images.length - 1 : x - 1;
          //     document.getElementById("img").src = images[x];
          // }

          // function startTimer() {
          //     setInterval(displayNextImage, 3000);
          // }

          // var images = [], x = -1;
          // images[0] = "Images/01.jpg";
          // images[1] = "Images/02.jpg";
          // images[2] = "Images/03.jpg";

