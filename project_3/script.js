const clock=document.getElementById('clock');

setInterval(function(){
    let current_time=new Date();
    clock.innerHTML= current_time.toLocaleTimeString();
},1000);