status = "";

function setup() {
    canvas = createCanvas(640, 380);
    canvas.position(360, 260);
    video = createCapture(VIDEO);
    video.size(640, 380);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    name_of_object = document.getElementById("find").value;
}

function modelLoaded() {
    console.log('Model Loaded!');
    status = true;
}

function draw() {
    image(video, 0, 0, 640, 380);
}