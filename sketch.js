var mapImg;
var multiplier = 2;
var originX = 834 / multiplier;
var originY = 513 / multiplier;
var stepX = 1.955 * multiplier // east is positive, west is negative
var stepY = -1.955 * multiplier; // It's negative because south is negative north is positive
var decimalDigits = 4;

function preload() {
  mapImg = loadImage("gta_lcs_map_3.png");
}

function setup() {
  noSmooth();
  frameRate(60);
  createCanvas(mapImg.width / multiplier, mapImg.height / multiplier);
  clear();
  background("#00000000");
}

function draw() {
  clear();
  background("#00000000");
  if ((mouseX >= 0 && mouseY >= 0) && (mouseX <= mapImg.width / multiplier && mouseY <= mapImg.height / multiplier)) {
    cursor("pointer");
  }
  image(mapImg, 0, 0, mapImg.width / multiplier, mapImg.height / multiplier);
  line(originX, originY, mouseX, mouseY);
  textSize(20);
  text(((mouseX - originX) * stepX).toFixed(decimalDigits) + "," + ((mouseY - originY) * stepY).toFixed(decimalDigits), 0, 690);
}

function copyCoordsToClipboard() {
  let copyText = document.getElementById("coordinates");
  copyText.select();
  copyText.setSelectionRange(0, 99999);
  document.execCommand("copy");
  alert("Copied to clipboard:\n" + copyText.value);
}

function mousePressed() {
  if ((mouseX >= 0 && mouseY >= 0) && (mouseX <= mapImg.width / multiplier && mouseY <= mapImg.height / multiplier)) {
    document.getElementById("coordinates").value = ((mouseX - originX) * stepX).toFixed(decimalDigits) + "," + ((mouseY - originY) * stepY).toFixed(decimalDigits);
    console.log("Your coordinates are:\n" + ((mouseX - originX) * stepX).toFixed(decimalDigits) + "," + ((mouseY - originY) * stepY).toFixed(decimalDigits));
    copyCoordsToClipboard();
  }
}