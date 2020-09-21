var wrapperEle = document.body.querySelector(".wrapper");

// if(isNaN()){
//   wrapperEle.innerHTML="Is not a number";
// }
var number = 0;

for(var i=0; i<5; i++){
  number=number+1;
  repeat=prompt("Input the amount of damage");
}
wrapperEle.innerHTML = Math.floor((Math.random() * 5) + 1);