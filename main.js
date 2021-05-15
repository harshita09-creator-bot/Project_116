x_value = 0;
y_value = 0;

function preload(){
    lip_filter = loadImage('https://i.postimg.cc/gJh7kmqZ/unnamed-removebg-preview.png');
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.position(525,200);
    video = createCapture(VIDEO);
    video.size(300,300)
    video.hide();

    poseNet = ml5.poseNet (video,modelLoaded);
    poseNet.on('pose',gotPoses);

}

function modelLoaded(){
console.log("Hey")
}

function gotPoses(results){

if(results.length > 0){
    console.log(results)
    console.log("lip x = "+ results[0].pose.nose.x)
    console.log("lip y = "+ results[0].pose.nose.y)
    x_value = results[0].pose.nose.x + 35;
    y_value = results[0].pose.nose.y + 105;
}
}

function draw(){
   image(video,0,0,400,400);
   image(lip_filter,x_value,y_value,50,30);
}

function snap(){
    save('clown_photo.png');
}