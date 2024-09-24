
// document.querySelector("button")
// .addEventListener("click",() => handleClick("hai"));

// function handleClick(greet){
//     alert(`Hello FSW 2, ${greet}`);
// }

// // handleClick();

console.log(document.querySelectorAll("button")[6]);

//array.length()
let totalButton = document.querySelectorAll("button").length;

let tom1 = new Audio("sounds/tom-1.mp3");
let tom2 = new Audio("sounds/tom-2.mp3");
let tom3 = new Audio("sounds/tom-3.mp3");
let tom4 = new Audio("sounds/tom-4.mp3");
let snare = new Audio("sounds/snare.mp3");
let crash = new Audio("sounds/crash.mp3");
let kick = new Audio("sounds/kick-bass.mp3");
                                                                                                                

for(let i = 0; i < totalButton; i++ ){
    // console.log(i);
    document.querySelectorAll("button")[i].addEventListener("click", function() {
        // alert("hallo fsw 2 "+ i);

        // lakuin sesuatu setelah button nya di klik
        // let audio = new Audio("sounds/tom-1.mp3");
        // audio.play(); 
        // this.style.color="yellow";
        // this = <button class="w drum">w</button> 
        switch(this.innerHTML) {
            case "w":
                tom1.play();
                this.style.borderColor="yellow";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                
                break;
            case "a":
                tom2.play();
                this.style.borderColor="red";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
            case "s":
                tom3.play();
                this.style.borderColor="green";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
            case "d":
                tom4.play();
                this.style.borderColor="blue";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
            case "j":
                snare.play();
                this.style.borderColor="white";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
            case "k":
                crash.play();
                this.style.borderColor="black";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
            case "l":
                kick.play();
                this.style.borderColor="grey";
                setTimeout(function(){
                    document.querySelectorAll("button")[i].style.borderColor="";
                }, 1000);
                break;
                                        
                default:
            };
        });
    };

for(let i = 0; i < totalButton; i++ ){
    document.querySelectorAll("button")[i].addEventListener("keydown", function(event) {
        switch(event.key) {
            case "w":
                tom1.play();
                document.getElementById("w-drum").style.borderColor="yellow";
                setTimeout(function(){
                    document.getElementById("w-drum").style.borderColor="";
                }, 1000);
                break;
            case "a":
                tom2.play();
                document.getElementById("a-drum").style.borderColor="red";
                setTimeout(function(){
                    document.getElementById("a-drum").style.borderColor="";
                }, 1000);
                break;
            case "s":
                tom3.play();
                document.getElementById("s-drum").style.borderColor="green";
                setTimeout(function(){
                    document.getElementById("s-drum").style.borderColor="";
                }, 1000);
                break;
            case "d":
                tom4.play();
                document.getElementById("d-drum").style.borderColor="blue";
                setTimeout(function(){
                    document.getElementById("d-drum").style.borderColor="";
                }, 1000);
                break;
            case "j":
                snare.play();
                document.getElementById("j-drum").style.borderColor="white";
                setTimeout(function(){
                    document.getElementById("j-drum").style.borderColor="";
                }, 1000);
                break;
            case "k":
                crash.play();
                document.getElementById("k-drum").style.borderColor="black";
                setTimeout(function(){
                    document.getElementById("k-drum").style.borderColor="";
                }, 1000);
                break;
            case "l":
                kick.play();
                document.getElementById("l-drum").style.borderColor="grey";
                setTimeout(function(){
                    document.getElementById("l-drum").style.borderColor="";
                }, 1000);
                break;
                default:
            };
        });
    };