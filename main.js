function setup() {
    canvas = createCanvas(500, 400)
    canvas.position(400, 300)
    camusee = createCapture(VIDEO);
    camusee.hide();
}
function draw() {
    //cam
    image(camusee, 0, 0, 500, 400);
    //circledesign
    fill(87, 43, 89);
    stroke(136, 250, 159);
    strokeWeight(3)
    circle(460, 190, 80);
    circle(40, 190, 80);
    circle(250, 40, 80);
    circle(250, 360, 80);
    //rect design
    //bottom layer
    fill(43, 87, 89);
    stroke(250, 136, 159);
    strokeWeight(3)
    rect(310, 360, 160, 40)
    rect(30, 360, 160, 40)
    //top layer
    rect(310, 3, 160, 40)
    rect(30, 3, 160, 40)
    //left
    rect(460, 240, 40, 110)
    rect(460, 50, 40, 90)
    //right
    rect(1, 240, 40, 110)
    rect(1  , 50, 40, 90) 
}