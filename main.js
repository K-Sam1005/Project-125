var leftWristX = 0;
var rightWristX = 0;
var difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);

    canvas = createCanvas(600,450);
    canvas.position(560,100);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results){
    if(results.length > 0){
        //console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;

        difference = floor(leftWristX - rightWristX);
    }
}

function modelLoaded(){
    console.log("PoseNet is initialized...");
}

function draw(){
    background('#5196e3');

    textSize(difference);
    fill("#FFE787");
    text("Sam", 50, 400);
}