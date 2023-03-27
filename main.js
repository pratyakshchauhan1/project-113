function preload(){
}



function setup(){
canvas = createCanvas(640,680);
canvas.position(110,250);
video = createCapture(VIDEO);
video.hide();

tint_color = "";

}




function draw(){
image(video,0,0,640,680);
tint(tint_color);
fill('red');
stroke('red');
circle(70,30,50);
circle(70,650,50);
circle(600,30,50);
circle(600,650,50);


fill('green');
stroke('green');
rect(70,20,10,630);
rect(600,20,10,630);

rect(70,20,530,10);
rect(70,640,530,10);


















}

function take_snapshot(){
save('student_name.png');
}

function filter_tint()
{
tint_color = document.getElementById("color_name").value;
}