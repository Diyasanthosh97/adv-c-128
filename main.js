song2="";
song1="";
leftWristX=0;
rightWristY=0;
leftWristY=0;
rightWristX=0;
function preload(){
    song2=loadSound("song2.mp4");
song1=loadSound("song1.mp4")
}
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on("pose",gotposes);
}
function draw(){
    image(video,0,0,600,500);
}
function play(){
song1.play();
song2.play();
}