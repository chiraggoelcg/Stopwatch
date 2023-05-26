var container = document.getElementsByClassName("container")[0];
var Label = document.getElementById("timer");
var lap = document.getElementById("lap");
var start = document.getElementById("start");
var flag = false;
var x;
var timer = 0;
var id = 1;
var d = document.getElementById("lapss"); 

Label.innerHTML = "00:00:00";

start.addEventListener("click",startTime);
lap.addEventListener("click",addLap);

function startTime(event){
    
    if(flag == false){
        flag = true;
        start.style.color = "#c42c25";
        start.style.backgroundColor = "#351714";
        x = setInterval(function(){
            timer++;
            var sec = timer%60;
            if(sec<10) sec = "0" + sec;
            var min = parseInt(timer/60)%60;
            if(min<10) min = "0"+ min;
            var hr = parseInt(timer/3600);
            if(hr <10) hr = "0"+ hr;
            Label.innerHTML = `${hr}:${min}:${sec}`;  
        },1000)
        start.innerHTML = "Stop";
        lap.innerHTML = "Lap";
    }else{
        clearInterval(x);
        flag = false;
        start.innerHTML = "Start";
        lap.innerHTML = "Reset";
        start.style.color = "aquamarine";
        start.style.backgroundColor = "green";
    }
    
}

function addLap(event){
    if(flag){
        if(id == 1)
        {
            var hr = document.createElement("hr");
            hr.setAttribute("class","hr");
            d.appendChild(hr);
            hr.style.marginTop = "60px";
        }
        var Div = document.createElement("div");
        Div.setAttribute("class","laps");
        var temp1 = document.createElement("label");
        temp1.setAttribute("class","lap1");
        temp1.innerHTML = "Lap " + id;
        id++;
        var temp2 = document.createElement("label");
        temp2.setAttribute("class","lap2");
        temp2.innerHTML = Label.innerHTML;
        Div.appendChild(temp1);
        Div.appendChild(temp2);
        d.appendChild(Div);
        var hr = document.createElement("hr");
        hr.setAttribute("class","hr");
        d.appendChild(hr);

    }else{
        timer = 0;
        id = 1;
        Label.innerHTML = "00:00:00";
        d.innerHTML = "";


    }
}
