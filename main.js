
//1
// function welcome(){
//     document.getElementById("myh1").innerHTML=alert("welcome")
// }


//2
// var myDate=new Date()
// function hour(){
//    console.log(document.getElementById("myDiv").innerHTML=myDate.getHours())
// }

//3
// function changeColor(color){
//     console.log(color)
// }

//4
// function addText(text){
//     document.getElementById("myDiv").innerHTML=text
// }

//5
// function textToH1(){
//    myh1.innerHTML=myInput.value
// }

//6
// function colorChange(){
//     myh3.style="color:purple"
// }

//7 (4)
// function changeBtn(){
// myBtn.style="scale:1.5"
// }


//5
// function h1Change(){
//     myh1.innerHTML=myh2.innerHTML
// }


//6
// var onLoad= prompt("insert a name")
// function promptToP(){
//     myP.innerHTML=onLoad
// }


//7
// function dayNightCheck(){
//     var body=document.body
//     var currentDate = new Date();

//     if(currentDate.getHours()>=12){
//     body.style.backgroundColor= "yellow"
//     }
//     else{
//     body.style.backgroundColor= "blue"
//     myh1.innerHTML=`good evening`
//     }
   
// }
    // document.body.onload= dayNightCheck



//8 פונקציה שמחליפה צבע לפי מספר ממשתמש וגם כשהעכבר עובר מעליה
    // function welcomeToPage(){
    //     var userAge= +prompt("insert an age")
    //     if(userAge>=18){
    //         myh1.style.color="red"
    //     }
    //     else{
    //         myh1.style.color="blue"
    //     }
    // }
    // document.body.onload= welcomeToPage

    // function colorChange(){
    //     myh1.style.color="green"
    // }



    //9
    // function lotteryBtn(){
    //     var myArray=[]
    // for(i=0; i<5; i++){
    //     var randomNumber = Math.floor(Math.random() * 56) + 1;
    //   myArray.push(myDiv.innerHTML+=`<h1>${randomNumber}</h1>`) 
    // }
    // }
    // function rightBtn(){
    //     var anotherRandomNumber=Math.floor(Math.random() * 56) + 1;
    //     var winnerMessage=""
    //     for (i =0; i< myArray.length; i++) {
    //         if(myArray[i]===anotherRandomNumber){
    //           winnerMessage = "<h1>you are a winner!</h1>";
    //         break;
    //         }
    //     }
    //    myDiv.innerHTML+= `<h1>${anotherRandomNumber}</h1>`+ winnerMessage;
    // }




//     //10
//     var family={
//         familyName: prompt("choose a family name"),
//         father: prompt("choose a father name"),
//         mother: prompt("choose a mother name"),
//         brother:prompt("choose a brother name"),
//         sister:prompt("choose a sister name"),
//     }

//     function myFamily(){
//     myDiv.innerHTML+= `<ul>
//     <li>${family.familyName}</li>
//     <li>${family.father}</li>
//     <li>${family.mother}</li>
//     <li>${family.brother}</li>
//     <li>${family.sister}</li>
// </ul>`
//     }
       


//     function welcomeToPage(){
        

//         var userAge= +prompt("insert an age")
//         if(userAge>=18){
//             myh1.style.color="blue"
//            myDiv.innerHTML+=`<button id="myBtn" onclick="myFamily()">press me</button>`
//         }
//         else{
//             myDiv.style.color="red"
//             myh1.innerHTML = "NO ENTRY!" +
//             '<img src="https://phabcart.imgix.net/cdn/scdn/images/uploads/636844577374966611_7a003bk_web_600.jpg">';
//     }
// }
//     document.body.onload= welcomeToPage

//      function colorChange(){
//         myh1.style.color="green"
//     }
