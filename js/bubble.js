let Bubble = document.getElementById('bubble');
let t = Bubble.getContext('2d');

function ResetSize(canvas) {
    function Resize() {
        canvas.width = document.documentElement.clientWidth;
        canvas.height = document.documentElement.clientHeight;
    }
    Resize();

    window.onresize = function () {
        Resize(canvas);
    }
}

ResetSize(Bubble);

let num = 3000;
let bubbleX = [];
let bubbleY = [];
let bubbleR = [];
let bubbleK=[];
let bubbleS = [];
let colours = ["rgb(255, 255, 255, .4)"];
for(let i = 0; i < num; i++) {
    let radius = Math.floor(Math.random() * 5 + 1);
    let x = Math.floor(Math.random() * 5000);
    let y = Bubble.offsetHeight + Math.floor(Math.random() * Bubble.offsetHeight);
    let sp = Math.floor(Math.random() * 10 + 5);
    bubbleX.push(x);
    bubbleY.push(y);
    bubbleR.push(radius);
    bubbleS.push(sp);
}

let x;
let y;
function Move(){
    t.clearRect(0, 0, Bubble.offsetWidth, Bubble.offsetHeight);

    
    for(let i = 0;i < num; i++) {
        (function (i) {
            if(bubbleK[i] == null){
                bubbleK[i] = 0;
            }
            y = bubbleK[i] * bubbleS[i] + bubbleY[i];
            x = bubbleX[i];
            if(y + bubbleR[i] <= 0){
                bubbleY[i] = Bubble.offsetHeight;
                bubbleK[i] = 0;
                y = bubbleK[i] * bubbleS[i] + bubbleY[i];
            }
            t.beginPath();
            t.fillStyle = colours;
            t.globalAlpha = Math.max(0, (y + bubbleR[i]) / Bubble.offsetHeight - 0.5);
            t.arc(x, y, bubbleR[i], 0, Math.PI * 2);
            t.fill();
            bubbleK.splice(i,1,bubbleK[i]);
            bubbleK[i]-=0.1;
        })(i);
    }
}

setInterval(Move,20);

