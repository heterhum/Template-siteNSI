document.addEventListener('DOMContentLoaded',domloaded,false);

function domloaded(){
    window.c = document.getElementById("myCanvas");
    window.ctx = c.getContext("2d");
    const canvasWidth = c.offsetWidth;
    const canvasHeight = c.offsetHeight;

// Ajuster les dimensions internes du canvas
    c.width = canvasWidth;
    c.height = canvasHeight;
    
}
function doit(){
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();
}
function doit1(){
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 200);
    ctx.stroke();
}
function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: (evt.clientX - rect.left) / (rect.right - rect.left) * canvas.width,
        y: (evt.clientY - rect.top) / (rect.bottom - rect.top) * canvas.height
    };
  }
var taillex=10
var tailley=10
function draw(e){
    let a=[]
    for (let i = 0; i < tailley; i++) {
        let b=[]
        for (let i = 0; i < tailley; i++) {
            b[i]=0
        }
        a[i]=b
    }
    ctx.fillStyle=10;
    ctx.fillRect(200,200,20,20)
    //var pos=getMousePos(c,e);
    //console.log(pos.x,pos.y)
    //ctx.arc(pos.x, pos.y, 2, 0, 2 * Math.PI);
    //ctx.stroke();
}

