var splash,bgsound,playbutton,nextbutton,soundonbutton,soundoffbutton
var gameState="wait"
var health=400
var maxHealth=400
var playerimg1
var score1=0
 

function preload(){
    splash=loadImage("splash.gif")
bgsound = loadSound("assets/bgosund.mp3")
level1bg=loadImage("assets/image.png")

}

function setup(){
createCanvas(windowWidth,windowHeight)

playbutton=createImg("assets/play.png")
playbutton.position(width/2-100,height/1.3)


soundonbutton = createImg("/assets/music.png")
soundonbutton.position(playbutton.x-250, playbutton.y+10 )
soundonbutton.size(300,300)
soundonbutton.mouseClicked(mute)

soundoffbutton = createImg("/assets/muteMusic.png")
soundoffbutton.position(playbutton.x+300, playbutton.y+10 )
soundoffbutton.size(300,300)
soundoffbutton.mouseClicked(mute)


bgsound.play()
}

function draw(){
    
    if (gameState == "wait") {
background(splash)
    }


    playbutton.mousePressed(() => {
        gameState = "level1"
        playbutton.hide()
    })


    if (gameState == "level1") {
        // background(level1bg)
        image(level1bg,0,0,width,height)
        playbutton.hide()
        soundoffbutton.hide()
        soundonbutton.hide()
      

    }


    drawSprites()

    if(gameState=="level1"){
        textSize(50)
        fill("black")
        stroke("yellow")
        strokeWeight(4)
        text("LEVEL 1",width/2-100,80)
        healthlevel1()

    }

}



function mute(){
    if(bgsound.isPlaying()){
        bgsound.stop()
        soundoffbutton.show()
        soundonbutton.hide()
        console.log("mute")
    }
    else{
        soundbutton.show()
        soundoffbutton.hide()
        bgsound.play()
        console.log("unmute")
    }
}


function healthlevel1() {

    stroke("gold");
    strokeWeight(7);
    noFill();
    rect(10, 10, 200, 20);

    noStroke();
    fill("red");
    rect(10, 10, map(health, 0, maxHealth, 0, 200), 20);
}

//gun part, blast, boxs, rename images