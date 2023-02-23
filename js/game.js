
function play() {


const box = document.getElementById("game")
var ctx = box.getContext("2d")

const mario = new Image()
const city = new Image()
const floor = new Image()
const pipeup = new Image()
const pipebottom = new Image()

mario.src="img/mario.png"
city.src="img/city.png"
floor.src="img/floor.png"
pipeup.src="img/pipeup.png"
pipebottom.src="img/pipebottom.png"

const fly = new Audio();
const score_mp3 = new Audio();
const fon_mp3 = new Audio();

score_mp3.src="mp3/score.mp3";
score_mp3.volume = 0.3

fon_mp3.src="mp3/фон.mp3";
fon_mp3.volume = 0.1


let xPos = 10;
let yPos = 150;
let gap = 90;
let score = 0;
const gravitation = 1.5;


addEventListener("keydown", function(event) {
    {
    yPos -= 25
    }
  });
var pipes = [];

pipes[0]  = {
   x : box.width,
   y : 0 
}


function draw() {
    ctx.drawImage(city, 0, 0)
    fon_mp3.play();
    for (i=0; i<pipes.length; i++) {
    ctx.drawImage(pipeup, pipes[i].x , pipes[i].y -30 )
    ctx.drawImage(pipebottom, pipes[i].x, pipes[i].y + pipeup.height + gap )
    
    pipes[i].x--;

    if(pipes[i].x == 125) {
        pipes.push({
            x : box.width,
            y : Math.floor(Math.random()*pipeup.height) - pipeup.height + 40
        })
        }
    

        if(xPos + mario.width >= pipes[i].x
            && xPos <= pipes[i].x + pipeup.width 
            && (yPos <= pipes[i].y + pipeup.height - 40
            || yPos + mario.height >= pipes[i].y + pipeup.height + gap) || yPos + mario.height >= box.height - floor.height + 13)  { 
                location.reload();
            }
            if(pipes[i].x == 5  ) {
                score++
                score_mp3.play();
            }
    }
    ctx.drawImage(floor, 0, box.height - floor.height )
    ctx.drawImage(mario, xPos, yPos, 38, 40)
    
    yPos  += gravitation;
    ctx.fillStyle = "#000";
    ctx.font = "24px Verdana";
    ctx.fillText("Счет: " + score, 10, box.height - 20);
    // addEventListener("keyup", function(event) {
    //     if (event)
       
    //         yPos <=354;
        
    //   });
    requestAnimationFrame(draw)
    
}

pipebottom.onload = draw;

}
