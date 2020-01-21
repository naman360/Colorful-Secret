
var colors=[];
var optColor=Math.floor(Math.random()*6);
var col;
var box=document.getElementsByClassName('box');





for(i=0;i<6;i++){
    col=genColor();
    colors.push(col);
}
document.getElementById('color').textContent=colors[optColor];

for(i=0;i<6;i++){
    box[i].style.backgroundColor=colors[i];
}

for(i=0;i<6;i++){
    box[i].addEventListener('click', checkColor);
}


function genColor(){
    var r=Math.floor(Math.random()*256);
    var g=Math.floor(Math.random()*256);
    var b=Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b  + ")";
}

function checkColor(){

    if(this.style.backgroundColor==colors[optColor]){
    document.getElementById('message').textContent="Yaay! Correct answer.";
    for(i=0;i<6;i++){
        box[i].style.backgroundColor=colors[optColor];
    }
}
    else{
    this.style.backgroundColor="white"
    document.getElementById('message').textContent=" Bad luck! Try Again";
    }
}

function resetColor(){
    colors=[];
    optColor=Math.floor(Math.random()*6);
    for(i=0;i<6;i++){
        newCol=genColor();
        colors.push(newCol);
    }
    document.getElementById('color').textContent=colors[optColor];
    
    for(i=0;i<6;i++){
        box[i].style.backgroundColor=colors[i];
    }
    document.getElementById('message').textContent="Go Ahead!";
}
document.getElementsByTagName('button')[0].addEventListener('click',resetColor);