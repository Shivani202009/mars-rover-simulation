var canvas = document.getElementById("Canvas")
var ctx = canvas.getContext("2d")
var marsimages =["mars.jpg","mars1.jpg","mars2.jpg","mars3.jpg"]
var x = Math.floor(Math.random()*4)
var rover = "rover.png"
var background = marsimages[x]
var roverx = 10
var rovery = 10
var roverwidth = 100
var roverheight= 100

function add(){
    bg=new Image()
    bg.onload=uploadbackground
    bg.src=background

    roverimg=new Image()
    roverimg.onload=uploadrover
    roverimg.src=rover
}

function uploadbackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)

}

function uploadrover(){
    ctx.drawImage(roverimg,roverx,rovery,roverwidth,roverheight)

}

window.addEventListener("keydown",kd)

function kd(e){
var x = e.keyCode
console.log(x)
if(x==37){
    console.log("left is pressed")
    left()

}
if(x==38){
    console.log("up is pressed")
    up()
}
if(x==39){
    console.log("right is pressed")
    right()
}
if(x==40){
    console.log("down is presses")
    down()
}
}

function right(){
    if(roverx<700){
        roverx=roverx+10
        uploadbackground()
        uploadrover()
        
    }
}

function left(){
    if(roverx>0){
        roverx=roverx-10
        uploadbackground()
        uploadrover()
    }
}

function down(){
    if(rovery<500)
    rovery=rovery+10
    uploadbackground()
    uploadrover()
}

function up(){
    if(rovery>0)
    rovery=rovery-10
    uploadbackground()
    uploadrover()
}


