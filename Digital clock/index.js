const time=document.querySelector('#answer')

setInterval(function(){
let date=new Date();
time.innerHTML=date.toLocaleTimeString();

},1000);//second for 1 //if you want differ in 2 sec give 2000