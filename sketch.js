let message = 'Away!';
let messageX;
const xSpeed = 2;
const ySpeed = 0.05;
const amplitude = 100;
const verticalLetterSpacing = 10;
let font;

function preload() {
  font = loadFont('./lemon_milk/LEMONMILK-MediumItalic.otf');
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  textFont(font);

  messageX = width;
}

function draw() {
  resizeCanvas(window.innerWidth, window.innerHeight)
  background(32);
  fill(170, 112, 207);

  textSize(100);

  for (let i = 0; i < message.length; i++) {
    const letterX = messageX + textWidth(message.substring(0, i));

    const letterOffset = i * verticalLetterSpacing;
    const letterY = height / 2 +
      sin((frameCount - letterOffset) * ySpeed) * amplitude;

    text(message[i], letterX, letterY);
  }

  messageX -= xSpeed;
  if (messageX < - textWidth(message)) {
    messageX = width + 50;
  }
}
