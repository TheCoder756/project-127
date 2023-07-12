song_left_wrist = "";
song_right_wrist = "";

function preload() {
    song_left_wrist = loadSound("Sweater Weather.mp3");
    song_right_wrist = loadSound("Dandelions.mp3");
}

function setup() {
    canvas = createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 600, 500);
}

function play()
{
    song.play();
}


