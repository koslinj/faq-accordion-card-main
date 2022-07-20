
let flag=0;

function hide(elem){
    elem.classList.add("hidden");
}

function light(elem){
    elem.classList.remove("strong");
}

function derotate(elem){
    elem.classList.remove("rotate");
}

function min(elem){
    elem.classList.remove("max");
}

document.querySelector('.q1').onclick = function(){
    document.querySelectorAll('.question img').forEach(derotate);
    document.querySelectorAll('.answer').forEach(hide);
    document.querySelectorAll('.tostrong').forEach(light);
    document.querySelectorAll('.anim').forEach(min);
    if(flag != 1){
        document.querySelector('.q1 .hidden').classList.remove("hidden");
    document.querySelector('.q1 .tostrong').classList.add("strong");
    document.querySelector('.q1 img').classList.add("rotate");
    document.querySelector('.q1 .anim').classList.add("max");
    flag=1;
    }
    else{
        flag=0;
    }
}

document.querySelector('.q2').onclick = function(){
    document.querySelectorAll('.question img').forEach(derotate);
    document.querySelectorAll('.answer').forEach(hide);
    document.querySelectorAll('.tostrong').forEach(light);
    document.querySelectorAll('.anim').forEach(min);
    if(flag != 2){
        document.querySelector('.q2 .hidden').classList.remove("hidden");
    document.querySelector('.q2 .tostrong').classList.add("strong");
    document.querySelector('.q2 img').classList.add("rotate");
    document.querySelector('.q2 .anim').classList.add("max");
    flag=2;
    }
    else{
        flag=0;
    }
}

document.querySelector('.q3').onclick = function(){
    document.querySelectorAll('.question img').forEach(derotate);
    document.querySelectorAll('.answer').forEach(hide);
    document.querySelectorAll('.tostrong').forEach(light);
    document.querySelectorAll('.anim').forEach(min);
    if(flag != 3){
        document.querySelector('.q3 .hidden').classList.remove("hidden");
    document.querySelector('.q3 .tostrong').classList.add("strong");
    document.querySelector('.q3 img').classList.add("rotate");
    document.querySelector('.q3 .anim').classList.add("max");
    flag=3;
    }
    else{
        flag=0;
    }
}

document.querySelector('.q4').onclick = function(){
    document.querySelectorAll('.question img').forEach(derotate);
    document.querySelectorAll('.answer').forEach(hide);
    document.querySelectorAll('.tostrong').forEach(light);
    document.querySelectorAll('.anim').forEach(min);
    if(flag != 4){
        document.querySelector('.q4 .hidden').classList.remove("hidden");
    document.querySelector('.q4 .tostrong').classList.add("strong");
    document.querySelector('.q4 img').classList.add("rotate");
    document.querySelector('.q4 .anim').classList.add("max");
    flag=4;
    }
    else{
        flag=0;
    }
}

document.querySelector('.q5').onclick = function(){
    document.querySelectorAll('.question img').forEach(derotate);
    document.querySelectorAll('.answer').forEach(hide);
    document.querySelectorAll('.tostrong').forEach(light);
    document.querySelectorAll('.anim').forEach(min);
    if(flag != 5){
        document.querySelector('.q5 .hidden').classList.remove("hidden");
    document.querySelector('.q5 .tostrong').classList.add("strong");
    document.querySelector('.q5 img').classList.add("rotate");
    document.querySelector('.q5 .anim').classList.add("max");
    flag=5;
    }
    else{
        flag=0;
    }
}