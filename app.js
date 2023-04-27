const endDate = "25 April 2023 10:00 AM";
document.getElementById("end-Date").innerText = endDate;


function clock(){
    const end = new Date(endDate);
    const now = new Date();
    const diff = (end-now)/1000;
    // console.log(end);
    if(diff<=0) return;
    const inputs = document.querySelectorAll("input");
    inputs[0].value = Math.floor(diff/(3600*24));
    inputs[1].value = Math.floor((diff/3600)%24);
    inputs[2].value = Math.floor((diff/60)%60);    
    inputs[3].value = Math.floor(diff%60);  
}
clock();
setInterval(clock , 100);



/*
1day=24hrs
1hr=60min
1min=60 sec
1day=3600*24
*/